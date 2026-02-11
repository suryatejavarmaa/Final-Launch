import { useRef, useState } from 'react';
import { CardStack } from './ui/CardStack';
import VariableProximity from './ui/variable-proximity';

export function CareerOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flippedCard, setFlippedCard] = useState<'entrepreneur' | 'career' | null>(null);

  return (
    <section
      id="overview"
      className="py-12 md:py-16 lp-bg relative"
      style={{
        backgroundColor: 'var(--lp-bg-solid)',
        overflow: 'hidden',
        paddingBottom: '120px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold text-white">
              Your Path <span className="text-glow-blue">Forward</span>
            </h2>
            <p className="text-lg sm:text-xl px-2 text-slate-400">
              Two paths. One beginning. Choose your direction with Launchpad.
            </p>
          </div>
        </div>

        <div className="mb-16 text-center cursor-default min-h-[100px] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <VariableProximity
            label="Fear Nothing."
            className="text-4xl md:text-6xl font-black tracking-tight"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef as React.RefObject<HTMLElement>}
            radius={100}
            falloff="gaussian"
            style={{ color: 'var(--lp-red)' }}
          />
          <VariableProximity
            label="Build Everything."
            className="text-4xl md:text-6xl font-black tracking-tight"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef as React.RefObject<HTMLElement>}
            radius={100}
            falloff="gaussian"
            style={{ color: 'var(--lp-blue)' }}
          />
        </div>

        {/* Cards - side by side */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '48px',
          }}
        >
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
    </section>
  );
}
