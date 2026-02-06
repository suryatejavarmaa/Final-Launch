import SphereImageGrid, { ImageData } from './ui/img-sphere';

// 50 curated images
const SPHERE_IMAGES: ImageData[] = [
    { id: 'sphere-1', src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop', alt: 'Team Collaboration', title: 'Collaboration', description: 'Working together to build the future' },
    { id: 'sphere-2', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop', alt: 'Innovation', title: 'Innovation', description: 'Pioneering new solutions' },
    { id: 'sphere-3', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop', alt: 'Strategy', title: 'Strategy', description: 'Planning your path' },
    { id: 'sphere-4', src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop', alt: 'Growth', title: 'Growth', description: 'Scaling your vision' },
    { id: 'sphere-5', src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=400&fit=crop', alt: 'Leadership', title: 'Leadership', description: 'Guiding teams' },
    { id: 'sphere-6', src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop', alt: 'Technology', title: 'Technology', description: 'Cutting-edge tools' },
    { id: 'sphere-7', src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop', alt: 'Startup', title: 'Startup Culture', description: 'Building with passion' },
    { id: 'sphere-8', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', alt: 'Teamwork', title: 'Teamwork', description: 'Achieving together' },
    { id: 'sphere-9', src: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=400&fit=crop', alt: 'Vision', title: 'Vision', description: 'Seeing possibilities' },
    { id: 'sphere-10', src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop', alt: 'Development', title: 'Development', description: 'Continuous learning' },
    { id: 'sphere-11', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop', alt: 'Career', title: 'Career Growth', description: 'Professional excellence' },
    { id: 'sphere-12', src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop', alt: 'Mentorship', title: 'Mentorship', description: 'Expert guidance' },
    { id: 'sphere-13', src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop', alt: 'Professional', title: 'Professional', description: 'Industry experts' },
    { id: 'sphere-14', src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=400&fit=crop', alt: 'Coding', title: 'Development', description: 'Building solutions' },
    { id: 'sphere-15', src: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=400&fit=crop', alt: 'Planning', title: 'Planning', description: 'Strategic thinking' },
    { id: 'sphere-16', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop', alt: 'Meeting', title: 'Collaboration', description: 'Team synergy' },
    { id: 'sphere-17', src: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=400&fit=crop', alt: 'Focus', title: 'Focus', description: 'Dedicated work' },
    { id: 'sphere-18', src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop', alt: 'Leader', title: 'Leadership', description: 'Inspiring others' },
    { id: 'sphere-19', src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop', alt: 'Workspace', title: 'Modern Workspace', description: 'Creative environment' },
    { id: 'sphere-20', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop', alt: 'Brainstorm', title: 'Brainstorming', description: 'Ideas flowing' },
    { id: 'sphere-21', src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop', alt: 'Creator', title: 'Creator', description: 'Building the future' },
    { id: 'sphere-22', src: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=400&fit=crop', alt: 'Design', title: 'Design Thinking', description: 'User-focused solutions' },
    { id: 'sphere-23', src: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=400&fit=crop', alt: 'Office', title: 'Office Culture', description: 'Dynamic workplace' },
    { id: 'sphere-24', src: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=400&h=400&fit=crop', alt: 'Launcher', title: 'Launch', description: 'Going live' },
    { id: 'sphere-25', src: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=400&fit=crop', alt: 'Worker', title: 'Hard Work', description: 'Dedication pays off' },
    { id: 'sphere-26', src: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400&h=400&fit=crop', alt: 'Creative', title: 'Creativity', description: 'Innovative solutions' },
    { id: 'sphere-27', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop', alt: 'Laptop', title: 'Digital Work', description: 'Remote possibilities' },
    { id: 'sphere-28', src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop', alt: 'Team', title: 'Team Spirit', description: 'United goals' },
    { id: 'sphere-29', src: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=400&h=400&fit=crop', alt: 'Product', title: 'Product Design', description: 'User experience' },
    { id: 'sphere-30', src: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=400&fit=crop', alt: 'Business', title: 'Business', description: 'Entrepreneurship' },
    { id: 'sphere-31', src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop', alt: 'Data', title: 'Data Analysis', description: 'Informed decisions' },
    { id: 'sphere-32', src: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop', alt: 'Mobile', title: 'Mobile First', description: 'App development' },
    { id: 'sphere-33', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop', alt: 'Code', title: 'Coding', description: 'Building software' },
    { id: 'sphere-34', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop', alt: 'Analytics', title: 'Analytics', description: 'Growth metrics' },
    { id: 'sphere-35', src: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=400&h=400&fit=crop', alt: 'Server', title: 'Infrastructure', description: 'Scalable systems' },
    { id: 'sphere-36', src: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=400&fit=crop', alt: 'Cloud', title: 'Cloud Tech', description: 'Modern solutions' },
    { id: 'sphere-37', src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop', alt: 'AI', title: 'Artificial Intelligence', description: 'Future tech' },
    { id: 'sphere-38', src: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=400&fit=crop', alt: 'Network', title: 'Networking', description: 'Building connections' },
    { id: 'sphere-39', src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop', alt: 'Security', title: 'Cybersecurity', description: 'Protected systems' },
    { id: 'sphere-40', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop', alt: 'Charts', title: 'Performance', description: 'Tracking success' },
    { id: 'sphere-41', src: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400&h=400&fit=crop', alt: 'Innovation', title: 'Innovation Hub', description: 'Creative space' },
    { id: 'sphere-42', src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop', alt: 'Notes', title: 'Documentation', description: 'Knowledge sharing' },
    { id: 'sphere-43', src: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=400&fit=crop', alt: 'Discussion', title: 'Team Discussion', description: 'Collaborative ideas' },
    { id: 'sphere-44', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=400&fit=crop', alt: 'Workshop', title: 'Workshop', description: 'Learning together' },
    { id: 'sphere-45', src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop', alt: 'Presentation', title: 'Presentation', description: 'Sharing vision' },
    { id: 'sphere-46', src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=400&fit=crop', alt: 'Remote', title: 'Remote Work', description: 'Global team' },
    { id: 'sphere-47', src: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=400&fit=crop', alt: 'Success', title: 'Success', description: 'Achieving goals' },
    { id: 'sphere-48', src: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=400&h=400&fit=crop', alt: 'Expert', title: 'Expertise', description: 'Mastering skills' },
    { id: 'sphere-49', src: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=400&fit=crop', alt: 'Future', title: 'Future Ready', description: 'Tomorrow\'s tech' },
    { id: 'sphere-50', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop', alt: 'Breakthrough', title: 'Breakthrough', description: 'Game changing' },
    { id: 'sphere-51', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', alt: 'Collaboration', title: 'Synergy', description: 'Working together' },
    { id: 'sphere-52', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop', alt: 'Innovation', title: 'New Ideas', description: 'Creative solutions' },
    { id: 'sphere-53', src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop', alt: 'Workspace', title: 'Modern Office', description: 'Productive environment' },
    { id: 'sphere-54', src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=400&fit=crop', alt: 'Leadership', title: 'Leading', description: 'Guiding the way' },
    { id: 'sphere-55', src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop', alt: 'Tech', title: 'Technology', description: 'Advanced tools' },
    { id: 'sphere-56', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=400&fit=crop', alt: 'Workshop', title: 'Learning', description: 'Skill building' },
    { id: 'sphere-57', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop', alt: 'Analytics', title: 'Data', description: 'Insights and metrics' },
    { id: 'sphere-58', src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop', alt: 'Team', title: 'Community', description: 'Stronger together' },
    { id: 'sphere-59', src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop', alt: 'Expert', title: 'Professional', description: 'Industry leaders' },
    { id: 'sphere-60', src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop', alt: 'Growth', title: 'Development', description: 'Continuous improvement' }
];

const SPHERE_CONFIG = {
    containerSize: 450,          // Reduced from 600 to 450
    sphereRadius: 210,           // Reduced from 280 to 210
    dragSensitivity: 0.8,        // Mouse drag sensitivity (0.1 - 2.0)
    momentumDecay: 0.96,         // How fast momentum fades (0.8 - 0.99)
    maxRotationSpeed: 6,         // Maximum rotation speed (1 - 10)
    baseImageScale: 0.15,        // Base image size (reduced to minimize overlap)
    hoverScale: 1.3,             // Hover scale multiplier (1.0 - 2.0)
    perspective: 1000,           // CSS perspective value (500 - 2000)
    autoRotate: true,            // Enable/disable auto rotation
    autoRotateSpeed: 0.2         // Auto rotation speed (0.1 - 2.0, higher = faster)
};

export function DiscoverySphereSection() {
    return (
        <section
            id="discover"
            className="relative h-screen flex items-center py-12 md:py-16 overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #020617 0%, #0a0e1f 50%, #020617 100%)'
            }}
        >
            {/* Enhanced Atmospheric Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Ambient glow orbs */}
                <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/15 via-blue-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-indigo-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

                {/* Subtle grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-40 xl:gap-56 items-center">

                    {/* LEFT SIDE - Premium Content Section */}
                    <div className="space-y-5 md:space-y-6 order-2 lg:order-1">

                        {/* Animated Badge with Glassmorphism */}
                        <div
                            className="inline-flex items-center gap-3 pl-2 pr-6 py-2.5 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300"
                            style={{
                                background: 'rgba(59, 130, 246, 0.08)',
                                borderColor: 'rgba(96, 165, 250, 0.3)',
                                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <span className="relative flex h-8 w-8 items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-tr from-cyan-400 to-blue-400 shadow-lg shadow-cyan-400/50"></span>
                            </span>
                            <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-300 bg-clip-text text-transparent uppercase tracking-[0.15em]" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Discover
                            </span>
                        </div>

                        {/* Hero Title - Ultra Bold & Visible */}
                        <div className="space-y-2 md:space-y-3">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black leading-[0.85] tracking-tighter" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                <span className="block text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                    Possibilities
                                </span>
                                <span
                                    className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(34,211,238,0.4)]"
                                    style={{
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        filter: 'drop-shadow(0 0 60px rgba(34, 211, 238, 0.4))'
                                    }}
                                >
                                    Unlimited
                                </span>
                            </h1>
                        </div>

                        {/* Description - Crystal Clear Visibility */}
                        <p className="text-base md:text-lg lg:text-lg leading-relaxed font-light max-w-2xl" style={{ color: 'rgba(241, 245, 249, 0.95)' }}>
                            Interact with the <span className="font-semibold text-white">3D sphere</span>. Explore{' '}
                            <span
                                className="font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
                                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                            >
                                50+ career paths
                            </span>
                            , live projects, and premium mentorship in the Launchpad ecosystem.
                        </p>

                        {/* Stats Grid - High Contrast */}
                        <div className="grid grid-cols-3 gap-3 md:gap-4 pt-2 md:pt-3">
                            {[
                                { num: '50+', label: 'Career Paths', color: 'from-cyan-300 to-blue-400' },
                                { num: '1K+', label: 'Students', color: 'from-blue-300 to-indigo-400' },
                                { num: '100%', label: 'Support', color: 'from-indigo-300 to-purple-400' }
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="relative p-3 md:p-4 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(99, 102, 241, 0.05))',
                                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                                    }}
                                >
                                    <div className="space-y-1">
                                        <div
                                            className={`text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent drop-shadow-lg`}
                                            style={{
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                filter: 'drop-shadow(0 4px 12px rgba(34, 211, 238, 0.3))'
                                            }}
                                        >
                                            {stat.num}
                                        </div>
                                        <div className="text-xs md:text-sm text-slate-300 uppercase tracking-wider font-semibold">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Premium CTA Button */}
                        <div className="pt-4 md:pt-5">
                            <button
                                className="relative px-8 md:px-10 py-4 md:py-4 rounded-2xl font-bold text-sm md:text-base text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{
                                    background: 'linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)',
                                    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                                }}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start Exploring
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            </button>

                            <p className="text-sm md:text-base text-slate-300 mt-4 font-medium flex items-center gap-2">
                                <span className="text-cyan-400 text-lg">🖱️</span>
                                Drag • Spin • Click • Discover
                            </p>
                        </div>

                    </div>

                    {/* RIGHT SIDE - Enhanced 3D Sphere */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div
                            className="relative transition-all duration-700"
                            style={{
                                padding: '4px',
                                borderRadius: '50%',
                                boxShadow: `
                                    0 0 60px rgba(34, 211, 238, 0.3),
                                    0 0 100px rgba(59, 130, 246, 0.2),
                                    inset 0 0 40px rgba(96, 165, 250, 0.08)
                                `,
                                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08), rgba(99, 102, 241, 0.04) 60%, transparent 100%)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            {/* Additional outer glow ring */}
                            <div className="absolute -inset-8 rounded-full bg-gradient-radial from-cyan-500/20 via-blue-500/10 to-transparent blur-2xl opacity-50" />

                            <SphereImageGrid
                                images={SPHERE_IMAGES}
                                {...SPHERE_CONFIG}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default DiscoverySphereSection;
