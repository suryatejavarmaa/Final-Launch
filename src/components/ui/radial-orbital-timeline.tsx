"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";
import { motion, AnimatePresence } from "motion/react";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const animationFrameRef = useRef<number>();
  const lastAutoExpandedId = useRef<number | null>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Orbit radius - smaller for left-side view
  const orbitRadius = useMemo(() => {
    if (isMobile) return 140;
    return 200;
  }, [isMobile]);

  // Reset handler
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
      setUserInteracted(false);
    }
  };

  // Toggle node expansion
  const toggleItem = useCallback((id: number, isManual = false) => {
    if (isManual) {
      setUserInteracted(true);
    }

    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        if (isManual) {
          setAutoRotate(false);
          centerViewOnNode(id);
        }
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        if (isManual) {
          setAutoRotate(true);
        }
        setPulseEffect({});
      }
      return newState;
    });
  }, []);

  const getRelatedItems = useCallback((itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  }, [timelineData]);

  // Get node at display position (right side of orbit = 0°)
  const getNodeAtDisplayPosition = useCallback(() => {
    const displayAngle = 0; // Right side of the orbit faces the content
    const threshold = 30;

    for (let i = 0; i < timelineData.length; i++) {
      const nodeAngle = ((i / timelineData.length) * 360 + rotationAngle) % 360;
      let diff = Math.abs(nodeAngle - displayAngle);
      if (diff > 180) diff = 360 - diff;
      if (diff < threshold) {
        return timelineData[i].id;
      }
    }
    return null;
  }, [rotationAngle, timelineData]);

  // Auto-expand node at display position
  useEffect(() => {
    if (!autoRotate || userInteracted) return;
    const nodeAtDisplay = getNodeAtDisplayPosition();

    if (nodeAtDisplay !== null && nodeAtDisplay !== lastAutoExpandedId.current) {
      lastAutoExpandedId.current = nodeAtDisplay;
      setExpandedItems({ [nodeAtDisplay]: true });
      setActiveNodeId(nodeAtDisplay);

      const relatedItems = getRelatedItems(nodeAtDisplay);
      const newPulseEffect: Record<number, boolean> = {};
      relatedItems.forEach((relId) => {
        newPulseEffect[relId] = true;
      });
      setPulseEffect(newPulseEffect);
    }
  }, [rotationAngle, autoRotate, userInteracted, getNodeAtDisplayPosition, getRelatedItems]);

  // Smooth continuous rotation
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (autoRotate) {
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        setRotationAngle((prev) => {
          const baseSpeed = isMobile ? 0.12 : 0.15;
          const displaySpeed = activeNodeId && !userInteracted ? 0.06 : baseSpeed;
          const newAngle = (prev + (displaySpeed * deltaTime / 16.67)) % 360;
          return Number(newAngle.toFixed(2));
        });
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [autoRotate, isMobile, activeNodeId, userInteracted]);

  // Center view on clicked node
  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(360 - targetAngle); // Bring to right side (0°)
  };

  // Calculate node position on the orbit
  const calculateNodePosition = useCallback((index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = orbitRadius * Math.cos(radian);
    const y = orbitRadius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.5 + 0.5 * ((1 + Math.cos(radian)) / 2)));
    const scale = Math.max(0.7, Math.min(1.1, 0.8 + 0.3 * ((1 + Math.cos(radian)) / 2)));

    return { x, y, angle, zIndex, opacity, scale };
  }, [rotationAngle, orbitRadius]);

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  // Get active item for content panel
  const activeItem = useMemo(() => {
    return timelineData.find(item => item.id === activeNodeId) || null;
  }, [activeNodeId, timelineData]);

  const getStatusColor = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return { bg: "linear-gradient(135deg, #B1122C 0%, #FF3A4A 100%)", text: "#FF5E63", label: "ENTREPRENEUR" };
      case "in-progress":
        return { bg: "linear-gradient(135deg, #00A9FF 0%, #4AD4FF 100%)", text: "#4AD4FF", label: "CAREER" };
      default:
        return { bg: "rgba(255, 255, 255, 0.15)", text: "#94A3B8", label: "UPCOMING" };
    }
  };

  // Star particles
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      delay: Math.random() * 4,
    }));
  }, []);

  return (
    <div
      className="w-full min-h-screen relative overflow-hidden flex"
      style={{ backgroundColor: '#0A0F1C' }}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Star particles */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.size, height: star.size }}
            animate={{ opacity: [star.opacity, star.opacity * 0.2, star.opacity] }}
            transition={{ duration: 3 + star.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          left: isMobile ? '-100px' : '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'radial-gradient(circle, rgba(0, 169, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ========== LEFT SIDE: ORBITAL SYSTEM ========== */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: isMobile ? '50%' : '50%', minHeight: '100vh' }}
      >
        <div
          className="relative"
          ref={orbitRef}
          style={{
            width: `${orbitRadius * 2 + 120}px`,
            height: `${orbitRadius * 2 + 120}px`,
          }}
        >
          {/* Central Sun/Core - Logo centered in orbit */}
          <motion.div
            className="absolute rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: isMobile ? '-40px' : '-55px',
              marginTop: isMobile ? '-40px' : '-55px',
              width: isMobile ? '80px' : '110px',
              height: isMobile ? '80px' : '110px',
              background: 'rgba(10, 15, 28, 0.9)',
              border: '2px solid rgba(74, 212, 255, 0.4)',
              boxShadow: '0 0 40px rgba(0, 169, 255, 0.4), 0 0 80px rgba(0, 169, 255, 0.2)',
              zIndex: 10,
            }}
            animate={{
              boxShadow: [
                '0 0 30px rgba(0, 169, 255, 0.4), 0 0 60px rgba(0, 169, 255, 0.2)',
                '0 0 50px rgba(0, 169, 255, 0.6), 0 0 100px rgba(0, 169, 255, 0.3)',
                '0 0 30px rgba(0, 169, 255, 0.4), 0 0 60px rgba(0, 169, 255, 0.2)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              setExpandedItems({});
              setActiveNodeId(null);
              setPulseEffect({});
              setAutoRotate(true);
              setUserInteracted(false);
            }}
          >
            {/* Logo image - fills entire space */}
            <img
              src="/src/components/figma/4_cropped_processed_by_imagy.png"
              alt="Launchpad Logo"
              className="object-cover rounded-full"
              style={{
                width: '100%',
                height: '100%',
                filter: 'drop-shadow(0 0 15px rgba(74, 212, 255, 0.5))',
              }}
            />
          </motion.div>

          {/* Orbit Path Ring */}
          <div
            className="absolute rounded-full border border-cyan-500/20"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: `${orbitRadius * 2}px`,
              height: `${orbitRadius * 2}px`,
              boxShadow: '0 0 20px rgba(0, 169, 255, 0.1)',
            }}
          />

          {/* Spotlight Beam - Elegant glow emanating from active node toward content */}
          {activeNodeId && (() => {
            const activeIndex = timelineData.findIndex(item => item.id === activeNodeId);
            const activePos = calculateNodePosition(activeIndex, timelineData.length);
            const statusColor = getStatusColor(timelineData[activeIndex]?.status || 'pending');

            return (
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: `calc(50% + ${activePos.x}px)`,
                  top: `calc(50% + ${activePos.y}px)`,
                  width: isMobile ? '300px' : '500px',
                  height: '80px',
                  transform: 'translate(-20px, -50%)',
                  background: `linear-gradient(90deg, ${statusColor.text}50 0%, ${statusColor.text}20 30%, transparent 70%)`,
                  filter: 'blur(20px)',
                  zIndex: 4,
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 0.6, scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            );
          })()}

          {/* Connection lines between related nodes */}
          {activeNodeId && (
            <svg
              className="absolute inset-0 pointer-events-none"
              style={{ width: '100%', height: '100%', zIndex: 5 }}
            >
              {/* Connect to NEXT and PREVIOUS nodes in sequence */}
              {(() => {
                const activeIndex = timelineData.findIndex(item => item.id === activeNodeId);
                const total = timelineData.length;
                const activePos = calculateNodePosition(activeIndex, total);
                const centerX = orbitRadius + 60;
                const centerY = orbitRadius + 60;

                // Get previous and next indices (wrap around)
                const prevIndex = activeIndex === 0 ? total - 1 : activeIndex - 1;
                const nextIndex = activeIndex === total - 1 ? 0 : activeIndex + 1;

                const adjacentIndices = [prevIndex, nextIndex];

                return adjacentIndices.map((adjIndex) => {
                  const adjPos = calculateNodePosition(adjIndex, total);
                  return (
                    <motion.line
                      key={`line-${activeIndex}-${adjIndex}`}
                      x1={centerX + activePos.x}
                      y1={centerY + activePos.y}
                      x2={centerX + adjPos.x}
                      y2={centerY + adjPos.y}
                      stroke="url(#gradient-line)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 0.6 }}
                    />
                  );
                });
              })()}
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00A9FF" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#4AD4FF" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          )}

          {/* Orbiting Nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const statusColor = getStatusColor(item.status);

            return (
              <motion.div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute cursor-pointer"
                style={{
                  left: '50%',
                  top: '50%',
                  zIndex: isExpanded ? 200 : position.zIndex,
                }}
                animate={{
                  x: position.x,
                  y: position.y,
                  scale: isExpanded ? 1.2 : position.scale,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id, true);
                }}
              >
                {/* Energy glow - only show when active */}
                {isExpanded && (
                  <div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: `${item.energy * 0.6 + 40}px`,
                      height: `${item.energy * 0.6 + 40}px`,
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: `radial-gradient(circle, ${statusColor.text}60 0%, transparent 70%)`,
                      opacity: 0.9,
                    }}
                  />
                )}

                {/* Node circle - transparent when inactive, filled when active */}
                <motion.div
                  className="rounded-full flex items-center justify-center border-2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: isMobile ? '36px' : '44px',
                    height: isMobile ? '36px' : '44px',
                    background: isExpanded
                      ? statusColor.bg
                      : 'rgba(10, 15, 28, 0.85)',
                    borderColor: isExpanded
                      ? '#FFFFFF'
                      : statusColor.text,
                    boxShadow: isExpanded
                      ? `0 0 35px ${statusColor.text}90, inset 0 0 20px ${statusColor.text}30`
                      : `0 0 12px ${statusColor.text}50`,
                  }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    size={isMobile ? 14 : 18}
                    style={{ color: isExpanded ? '#FFFFFF' : statusColor.text }}
                  />
                </motion.div>

                {/* Node label */}
                <div
                  className="absolute whitespace-nowrap font-medium text-center -translate-x-1/2"
                  style={{
                    top: isMobile ? '24px' : '30px',
                    left: '0',
                    fontSize: isMobile ? '9px' : '11px',
                    color: isExpanded ? '#4AD4FF' : '#8BA3C7',
                  }}
                >
                  {item.title}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Ambient matching glow between sections - subtle visual connection */}
      {activeNodeId && !isMobile && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: '45%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '200px',
            height: '300px',
            background: `radial-gradient(ellipse at center, ${getStatusColor(activeItem?.status || 'pending').text}15 0%, transparent 70%)`,
            filter: 'blur(40px)',
            zIndex: 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* ========== RIGHT SIDE: CONTENT PANEL ========== */}
      <div
        className="relative flex items-center justify-start px-4 lg:px-8"
        style={{ width: isMobile ? '50%' : '50%', minHeight: '100vh' }}
      >
        <AnimatePresence mode="wait">
          {activeItem ? (
            <motion.div
              key={activeItem.id}
              className="w-full max-w-md"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* ===== GLOWING BACKDROP FOR CONTENT CARD ===== */}
              {/* Large icon watermark - centered between card and right edge */}
              <motion.div
                className="absolute pointer-events-none flex items-center justify-center"
                style={{
                  right: isMobile ? '20px' : '40px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  opacity: 0.12,
                  zIndex: 0,
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.12 }}
                transition={{ duration: 0.6 }}
              >
                <activeItem.icon size={isMobile ? 120 : 160} style={{ color: getStatusColor(activeItem.status).text }} />
              </motion.div>

              {/* Animated glow rings */}
              <motion.div
                className="absolute pointer-events-none rounded-full"
                style={{
                  left: isMobile ? '-100px' : '-150px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: isMobile ? '250px' : '350px',
                  height: isMobile ? '250px' : '350px',
                  border: `2px solid ${getStatusColor(activeItem.status).text}`,
                  opacity: 0.15,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute pointer-events-none rounded-full"
                style={{
                  left: isMobile ? '-60px' : '-100px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: isMobile ? '170px' : '250px',
                  height: isMobile ? '170px' : '250px',
                  border: `1px solid ${getStatusColor(activeItem.status).text}`,
                  opacity: 0.2,
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />

              {/* Status color spotlight glow */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: '-80px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '200px',
                  height: '300px',
                  background: `radial-gradient(ellipse at center, ${getStatusColor(activeItem.status).text}30 0%, transparent 70%)`,
                  filter: 'blur(40px)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Header */}
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div
                  className="rounded-full flex items-center justify-center"
                  style={{
                    width: isMobile ? '44px' : '52px',
                    height: isMobile ? '44px' : '52px',
                    background: getStatusColor(activeItem.status).bg,
                    boxShadow: `0 0 20px ${getStatusColor(activeItem.status).text}50`,
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 15px ${getStatusColor(activeItem.status).text}40`,
                      `0 0 30px ${getStatusColor(activeItem.status).text}60`,
                      `0 0 15px ${getStatusColor(activeItem.status).text}40`,
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <activeItem.icon size={isMobile ? 18 : 22} className="text-white" />
                </motion.div>
                <h3 className="font-bold" style={{ fontSize: isMobile ? '18px' : '24px', color: getStatusColor(activeItem.status).text }}>
                  {activeItem.title}
                </h3>
              </div>

              {/* Content Card */}
              <motion.div
                className="rounded-2xl overflow-hidden relative z-10"
                style={{
                  background: 'rgba(10, 20, 40, 0.9)',
                  border: `1px solid ${getStatusColor(activeItem.status).text}30`,
                  backdropFilter: 'blur(16px)',
                  boxShadow: `0 0 50px ${getStatusColor(activeItem.status).text}15, 0 20px 60px rgba(0,0,0,0.4)`,
                }}
              >
                <div className="h-[3px]" style={{ background: `linear-gradient(90deg, transparent, ${getStatusColor(activeItem.status).text}, ${getStatusColor(activeItem.status).text}, transparent)` }} />

                <div className="p-5 lg:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: getStatusColor(activeItem.status).bg }}
                    >
                      {getStatusColor(activeItem.status).label}
                    </span>
                    <span className="text-xs font-mono" style={{ color: '#64748B' }}>
                      {activeItem.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3">{activeItem.title}</h4>
                  <p className="leading-relaxed mb-5" style={{ color: '#A8B8CC', fontSize: '14px' }}>
                    {activeItem.content}
                  </p>

                  {/* Impact Level */}
                  <div className="mb-5">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="flex items-center gap-1.5" style={{ color: '#FF5E63' }}>
                        <Zap size={12} /> Impact Level:
                      </span>
                      <span className="font-mono font-bold" style={{ color: '#4AD4FF' }}>{activeItem.energy}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(30, 41, 59, 0.8)' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #B1122C, #FF3A4A)' }}
                        initial={{ width: 0 }}
                        animate={{ width: `${activeItem.energy}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>

                  {/* Related Tracks */}
                  {activeItem.relatedIds.length > 0 && (
                    <div className="pt-4" style={{ borderTop: '1px solid rgba(0, 169, 255, 0.12)' }}>
                      <div className="flex items-center gap-2 mb-2">
                        <Link size={12} style={{ color: '#64748B' }} />
                        <span className="text-xs" style={{ color: '#64748B' }}>Related Tracks:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeItem.relatedIds.map((relatedId) => {
                          const relatedItem = timelineData.find(i => i.id === relatedId);
                          return relatedItem ? (
                            <Button
                              key={relatedId}
                              variant="outline"
                              size="sm"
                              className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border-cyan-500/30 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleItem(relatedId, true);
                              }}
                            >
                              {relatedItem.title}
                              <ArrowRight size={12} className="text-cyan-400" />
                            </Button>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
              style={{ color: '#64748B' }}
            >
              <p className="text-lg mb-2">Select a track to explore</p>
              <p className="text-sm">Click any node on the orbital</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
