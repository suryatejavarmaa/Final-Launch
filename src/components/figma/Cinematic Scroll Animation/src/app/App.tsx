import { CardStack } from './components/CardStack';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function App() {
  // Track which card is currently flipped: 'entrepreneur', 'career', or null
  const [flippedCard, setFlippedCard] = useState<'entrepreneur' | 'career' | null>(null);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      {/* Cosmic background with nebula effect */}
      <div className="fixed inset-0 z-0">
        {/* Pure black base */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Red nebula (left side) - more intense and rich */}
        <div
          className="absolute top-0 left-0 w-[60%] h-full"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(180, 30, 30, 0.6) 0%, rgba(255, 40, 40, 0.4) 20%, rgba(200, 30, 50, 0.25) 40%, rgba(150, 20, 40, 0.15) 60%, transparent 80%)',
            filter: 'blur(120px)',
          }}
        />
        
        {/* Blue nebula (right side) - more intense and rich */}
        <div
          className="absolute top-0 right-0 w-[60%] h-full"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, rgba(30, 120, 200, 0.6) 0%, rgba(40, 160, 255, 0.4) 20%, rgba(30, 140, 220, 0.25) 40%, rgba(20, 100, 180, 0.15) 60%, transparent 80%)',
            filter: 'blur(120px)',
          }}
        />

        {/* Additional rich nebula layers for depth */}
        <div
          className="absolute bottom-0 left-0 w-[50%] h-[60%]"
          style={{
            background: 'radial-gradient(ellipse at 10% 80%, rgba(255, 20, 40, 0.3) 0%, rgba(180, 20, 30, 0.15) 40%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[50%] h-[60%]"
          style={{
            background: 'radial-gradient(ellipse at 90% 80%, rgba(40, 140, 255, 0.3) 0%, rgba(30, 100, 200, 0.15) 40%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Additional glow underneath cards area - more intense */}
        <div
          className="absolute top-1/2 left-1/4 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(255, 40, 60, 0.5) 0%, rgba(255, 58, 74, 0.2) 50%, transparent 80%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-[300px] h-[300px] translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(40, 160, 255, 0.5) 0%, rgba(0, 217, 255, 0.2) 50%, transparent 80%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Enhanced starfield effect - more particles */}
        <div className="absolute inset-0 opacity-50">
          {/* Left side stars (red zone) */}
          <div className="absolute top-[15%] left-[8%] w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute top-[25%] left-[12%] w-0.5 h-0.5 bg-white rounded-full" />
          <div className="absolute top-[45%] left-[5%] w-1 h-1 bg-white rounded-full" />
          <div className="absolute top-[60%] left-[15%] w-0.5 h-0.5 bg-red-200 rounded-full animate-pulse" />
          <div className="absolute top-[75%] left-[10%] w-1 h-1 bg-white rounded-full" />
          <div className="absolute top-[35%] left-[20%] w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
          <div className="absolute top-[55%] left-[18%] w-1.5 h-1.5 bg-red-100 rounded-full" />
          <div className="absolute top-[85%] left-[8%] w-0.5 h-0.5 bg-white rounded-full" />
          <div className="absolute top-[12%] left-[25%] w-1 h-1 bg-white rounded-full animate-pulse" />
          
          {/* Right side stars (blue zone) */}
          <div className="absolute top-[20%] right-[10%] w-0.5 h-0.5 bg-white rounded-full" />
          <div className="absolute top-[30%] right-[15%] w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute top-[50%] right-[8%] w-0.5 h-0.5 bg-cyan-200 rounded-full" />
          <div className="absolute top-[65%] right-[12%] w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute top-[80%] right-[18%] w-0.5 h-0.5 bg-white rounded-full" />
          <div className="absolute top-[40%] right-[20%] w-1 h-1 bg-white rounded-full" />
          <div className="absolute top-[58%] right-[16%] w-1.5 h-1.5 bg-cyan-100 rounded-full" />
          <div className="absolute top-[88%] right-[10%] w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
          <div className="absolute top-[15%] right-[22%] w-1 h-1 bg-white rounded-full" />
          
          {/* Center stars */}
          <div className="absolute top-[18%] left-[48%] w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
          <div className="absolute top-[70%] left-[52%] w-1 h-1 bg-white rounded-full" />
          <div className="absolute top-[85%] left-[45%] w-0.5 h-0.5 bg-white rounded-full" />
          <div className="absolute top-[28%] left-[55%] w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute top-[62%] left-[47%] w-0.5 h-0.5 bg-white rounded-full" />
          <div className="absolute top-[38%] left-[50%] w-1.5 h-1.5 bg-white rounded-full" />
        </div>

        {/* Decorative 4-point star in bottom right - brighter */}
        <div className="absolute bottom-16 right-16">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 0L31.5 28.5L60 30L31.5 31.5L30 60L28.5 31.5L0 30L28.5 28.5L30 0Z"
              fill="white"
              opacity="0.9"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 1)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))',
              }}
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
        {/* Header */}
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              <span className="text-red-500" style={{ textShadow: '0 0 25px rgba(239, 68, 68, 0.6)' }}>Fear Nothing.</span>{' '}
              <span className="text-blue-500" style={{ textShadow: '0 0 25px rgba(59, 130, 246, 0.6)' }}>Build Everything.</span>
            </h1>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              Choose your path and transform your future with world-class mentorship and resources
            </p>
          </motion.div>

          {/* Cards Layout */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-12">
            <CardStack
              type="entrepreneur"
              title="Create Your Empire"
              subtitle="Entrepreneur Path"
              description="Launch and scale your own startup with expert guidance and proven frameworks."
              features={[
                "Startup toolkit & resources",
                "Mentor network access",
                "Funding & pitch guidance"
              ]}
              flipped={flippedCard === 'entrepreneur'}
              onFlip={() => setFlippedCard(flippedCard === 'entrepreneur' ? null : 'entrepreneur')}
            />

            <CardStack
              type="career"
              title="Build Your Future"
              subtitle="Career Path"
              description="Master skills and land your dream job in tech with industry-ready training."
              features={[
                "Industry-grade projects",
                "Technical interview prep",
                "Job placement support"
              ]}
              flipped={flippedCard === 'career'}
              onFlip={() => setFlippedCard(flippedCard === 'career' ? null : 'career')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}