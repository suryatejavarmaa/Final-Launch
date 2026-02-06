import { lazy, Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { NavigationBar } from './components/NavigationBar';
import { ChatAssistant } from './components/ChatAssistant';
import { PlatformShowcase } from './components/PlatformShowcase';
import { PartnerLogos } from './components/PartnerLogos';
import { ParticleTextSection } from './components/ParticleTextSection';
import { CareerOverview } from './components/CareerOverview';
import { ZoomParallaxSection } from './components/ZoomParallaxSection';
import { EventsSection } from './components/EventsSection';
import { SuccessStories } from './components/SuccessStories';
import { TeamSection } from './components/TeamSection';
import { ApplicationForm } from './components/ApplicationForm';
import { Footer } from './components/Footer';
import { DiscoverySphereSection } from './components/DiscoverySphereSection';
// New Sections per CEO's Content
import { WhatIsLaunchpad } from './components/WhatIsLaunchpad';
import { WhyDifferent } from './components/WhyDifferent';
import { SkillsSection } from './components/SkillsSection';
import { GamificationSection } from './components/GamificationSection';
import { JourneySection } from './components/JourneySection';
import { OutcomesSection } from './components/OutcomesSection';
import { BeliefSection } from './components/BeliefSection';

// Lazy load heavy components to prevent timeout issues
const HeroSection = lazy(() => import('./components/HeroSection'));
const OrbitalCareerTimeline = lazy(() => import('./components/OrbitalCareerTimeline').then(module => ({ default: module.OrbitalCareerTimeline })));

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen lp-bg" style={{ backgroundColor: 'var(--lp-bg-solid)' }}>
        <NavigationBar />
        <Suspense fallback={
          <div className="w-full h-screen lp-bg lp-dual-energy flex items-center justify-center" style={{ backgroundColor: 'var(--lp-bg-solid)' }}>
            <div className="lp-text-gradient text-xl font-medium">Loading Launchpad...</div>
          </div>
        }>
          <HeroSection />
        </Suspense>

        {/* ===== CEO's Content Structure ===== */}

        {/* 1. What Is Launchpad - Explanation */}
        <WhatIsLaunchpad />

        {/* 2. Two Clear Paths */}
        <CareerOverview />

        {/* 3. Why Launchpad Is Different */}
        <WhyDifferent />

        {/* 4. What Students Learn - Skills */}
        <SkillsSection />

        {/* 5. Gamification & Competition */}
        <GamificationSection />

        {/* 6. 90-Day Transformation Journey */}
        <JourneySection />

        {/* 7. Real Outcomes */}
        <OutcomesSection />

        {/* 8. Why This Matters - Belief */}
        <BeliefSection />

        {/* 9. Final CTA */}
        <ApplicationForm />

        {/* Footer */}
        <Footer />

        {/* Chat Assistant - Floating */}
        <ChatAssistant />

        {/* ===== Legacy Sections (Kept After Footer) ===== */}
        <PlatformShowcase />
        <PartnerLogos />
        <ParticleTextSection />
        <Suspense fallback={
          <div className="w-full h-screen lp-bg flex items-center justify-center" style={{ backgroundColor: 'var(--lp-bg-solid)' }}>
            <div className="lp-text-gradient text-xl font-medium">Loading Interactive Timeline...</div>
          </div>
        }>
          <OrbitalCareerTimeline />
        </Suspense>
        <DiscoverySphereSection />
        <ZoomParallaxSection />
        <EventsSection />
        <SuccessStories />
        <TeamSection />
      </div>
    </ErrorBoundary>
  );
}

