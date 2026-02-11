import { motion } from 'motion/react';
import { Briefcase, Rocket, CheckCircle2 } from 'lucide-react';

interface CardStackProps {
  type: 'entrepreneur' | 'career';
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  flipped: boolean;
  onFlip: () => void;
}

export function CardStack({ type, title, subtitle, description, features, flipped, onFlip }: CardStackProps) {
  const isEntrepreneur = type === 'entrepreneur';

  // Colors based on type
  const colors = isEntrepreneur
    ? {
        borderColor: '#FF3333',
        glowColor: 'rgba(255, 51, 51, 1)',
        titleColor: '#F43F5E',
        accentColor: 'rgba(225, 29, 72, 0.3)',
        accentBorder: 'rgba(225, 29, 72, 0.4)',
        badgeBg: 'linear-gradient(135deg, rgba(225, 29, 72, 0.2) 0%, rgba(225, 29, 72, 0.05) 100%)',
        badgeBorder: 'rgba(225, 29, 72, 0.3)',
        iconBg: 'linear-gradient(135deg, rgba(225, 29, 72, 0.3) 0%, rgba(225, 29, 72, 0.1) 100%)',
        iconBorder: 'rgba(225, 29, 72, 0.4)',
        iconShadow: 'rgba(225, 29, 72, 0.3)',
        checkColor: 'rgb(251, 113, 133)', // rose-400
        cardBg: 'linear-gradient(145deg, rgba(40, 15, 20, 1) 0%, rgba(25, 10, 15, 1) 50%, rgba(15, 8, 12, 1) 100%)',
        glowTop: 'bg-gradient-to-bl from-rose-500/20 via-rose-600/10 to-transparent',
        glowBottom: 'bg-rose-500/8',
        gridColor: '#FF3333',
      }
    : {
        borderColor: '#00D9FF',
        glowColor: 'rgba(0, 217, 255, 1)',
        titleColor: '#38BDF8',
        accentColor: 'rgba(14, 165, 233, 0.3)',
        accentBorder: 'rgba(14, 165, 233, 0.4)',
        badgeBg: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0.05) 100%)',
        badgeBorder: 'rgba(14, 165, 233, 0.3)',
        iconBg: 'linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(14, 165, 233, 0.1) 100%)',
        iconBorder: 'rgba(14, 165, 233, 0.4)',
        iconShadow: 'rgba(14, 165, 233, 0.3)',
        checkColor: 'rgb(56, 189, 248)', // sky-400
        cardBg: 'linear-gradient(145deg, rgba(15, 25, 40, 1) 0%, rgba(10, 18, 30, 1) 50%, rgba(5, 12, 22, 1) 100%)',
        glowTop: 'bg-gradient-to-bl from-sky-500/20 via-sky-600/10 to-transparent',
        glowBottom: 'bg-sky-500/8',
        gridColor: '#00D9FF',
      };

  // Stack card configurations for fan-out effect
  const stackCards = [
    // Left side cards - more visible in rest state
    { rest: { rotate: -6, x: -18, opacity: 0.5, scale: 0.98 }, hover: { rotate: -15, x: -80, opacity: 0.6, scale: 0.96 } },
    { rest: { rotate: -4, x: -12, opacity: 0.5, scale: 0.99 }, hover: { rotate: -10, x: -55, opacity: 0.6, scale: 0.97 } },
    { rest: { rotate: -2, x: -6, opacity: 0.5, scale: 0.995 }, hover: { rotate: -5, x: -30, opacity: 0.65, scale: 0.98 } },
    // Right side cards - more visible in rest state
    { rest: { rotate: 2, x: 6, opacity: 0.5, scale: 0.995 }, hover: { rotate: 5, x: 30, opacity: 0.65, scale: 0.98 } },
    { rest: { rotate: 4, x: 12, opacity: 0.5, scale: 0.99 }, hover: { rotate: 10, x: 55, opacity: 0.6, scale: 0.97 } },
    { rest: { rotate: 6, x: 18, opacity: 0.5, scale: 0.98 }, hover: { rotate: 15, x: 80, opacity: 0.6, scale: 0.96 } },
  ];

  return (
    <motion.div 
      className="relative w-full max-w-[480px] h-[540px] flex items-center justify-center mx-auto cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Background stacked cards */}
      {stackCards.map((cardConfig, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          style={{
            zIndex: index < 3 ? index : (5 - index),
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
          }}
          variants={{
            rest: cardConfig.rest,
            hover: cardConfig.hover,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div
            className="h-full min-h-[520px] rounded-[32px] relative overflow-hidden"
            style={{
              background: colors.cardBg,
              border: `2px solid ${colors.borderColor}`,
              boxShadow: `0 0 15px ${colors.glowColor}80`, // Simplified shadow for performance
            }}
          >
            {/* Simplified glow - single element */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background: `radial-gradient(circle at 70% 20%, ${colors.glowColor}15, transparent 60%)`,
              }}
            />
            
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(${colors.gridColor}50 1.5px, transparent 1.5px),
                  linear-gradient(90deg, ${colors.gridColor}50 1.5px, transparent 1.5px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Main card with 3D flip */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ 
          perspective: '1000px',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)', // Force GPU layer
        }}
        variants={{
          rest: { y: 0, scale: 1 },
          hover: { y: -12, scale: 1.02 }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // Smoother cubic-bezier easing
            type: 'tween',
          }}
        >
          {/* FRONT FACE */}
          <div
            className="absolute inset-0 h-full min-h-[520px] rounded-[32px] p-8 lg:p-10 flex flex-col cursor-pointer"
            style={{
              background: colors.cardBg,
              border: `2px solid ${colors.borderColor}`,
              boxShadow: `
                0 0 20px ${colors.glowColor},
                0 0 40px ${colors.glowColor}80,
                0 0 60px ${colors.glowColor}40,
                inset 0 0 20px ${colors.glowColor}20,
                inset 0 1px 0 rgba(255, 255, 255, 0.05)
              `,
              backfaceVisibility: 'hidden',
            }}
            onClick={onFlip}
          >
            {/* Glow Effects */}
            <div className={`absolute top-0 right-0 w-[300px] h-[300px] ${colors.glowTop} blur-[80px] rounded-full pointer-events-none`} />
            <div className={`absolute bottom-0 left-0 w-[200px] h-[200px] ${colors.glowBottom} blur-[60px] rounded-full pointer-events-none`} />
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background: `linear-gradient(to right, transparent, ${colors.accentBorder}, transparent)`,
              }}
            />

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="mb-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: colors.iconBg,
                      border: `1px solid ${colors.iconBorder}`,
                      boxShadow: `0 0 20px ${colors.iconShadow}`,
                      padding: '8px',
                    }}
                  >
                    {isEntrepreneur ? (
                      <Rocket className="w-6 h-6 text-white" />
                    ) : (
                      <Briefcase className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-full"
                    style={{
                      background: colors.badgeBg,
                      border: `1px solid ${colors.badgeBorder}`,
                    }}
                  >
                    <span className="text-xs font-semibold text-white tracking-wider uppercase">
                      {subtitle}
                    </span>
                  </div>
                </div>
                <h4
                  className="text-3xl lg:text-4xl font-black mb-4 tracking-tight"
                  style={{ color: colors.titleColor }}
                >
                  {title}
                </h4>
                <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-sm">
                  {description}
                </p>
              </div>
              <div className="space-y-3 mt-8">
                {features.map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-4 py-3 px-4 rounded-2xl transition-all duration-300 hover:translate-x-1"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: colors.checkColor }} />
                    <span className="text-white font-medium tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BACK FACE */}
          <div
            className="absolute inset-0 h-full min-h-[520px] rounded-[32px] p-8 lg:p-10 flex flex-col items-center justify-center"
            style={{
              background: colors.cardBg,
              border: `2px solid ${colors.borderColor}`,
              boxShadow: `
                0 0 20px ${colors.glowColor},
                0 0 40px ${colors.glowColor}80,
                0 0 60px ${colors.glowColor}40,
                inset 0 0 20px ${colors.glowColor}20,
                inset 0 1px 0 rgba(255, 255, 255, 0.05)
              `,
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {/* Glow Effects */}
            <div className={`absolute top-0 right-0 w-[300px] h-[300px] ${colors.glowTop} blur-[80px] rounded-full pointer-events-none`} />
            <div className={`absolute bottom-0 left-0 w-[200px] h-[200px] ${colors.glowBottom} blur-[60px] rounded-full pointer-events-none`} />
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background: `linear-gradient(to right, transparent, ${colors.accentBorder}, transparent)`,
              }}
            />

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(${colors.gridColor}50 1.5px, transparent 1.5px),
                  linear-gradient(90deg, ${colors.gridColor}50 1.5px, transparent 1.5px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8">
              <div>
                <h3 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: colors.titleColor }}>
                  Ready to Start?
                </h3>
                <p className="text-slate-400 text-lg">
                  Begin your journey to {isEntrepreneur ? 'entrepreneurship' : 'career success'}
                </p>
              </div>

              {/* Get Started Button */}
              <button
                className="px-10 py-5 rounded-2xl font-bold text-xl text-white transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: `linear-gradient(135deg, ${colors.borderColor} 0%, ${colors.titleColor} 100%)`,
                  boxShadow: `
                    0 0 30px ${colors.glowColor},
                    0 0 50px ${colors.glowColor}80,
                    0 10px 40px rgba(0, 0, 0, 0.5)
                  `,
                }}
              >
                Get Started
              </button>

              {/* Go Back Button */}
              <button
                onClick={() => onFlip()}
                className="text-slate-400 hover:text-white transition-colors duration-200 text-sm underline underline-offset-4"
              >
                Go Back
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
