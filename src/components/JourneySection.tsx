import { motion } from 'motion/react';
import { Layers, Rocket, Crown } from 'lucide-react';

export function JourneySection() {
    const phases = [
        {
            number: "01",
            title: "Foundation",
            icon: Layers,
            color: "#4AD4FF",
            items: [
                "Strong core skills",
                "AI tool mastery",
                "Professional mindset",
                "Department basics"
            ]
        },
        {
            number: "02",
            title: "Execution",
            icon: Rocket,
            color: "#A855F7",
            items: [
                "Work on real projects",
                "Handle real responsibility",
                "Collaborate in teams",
                "Deliver real outcomes"
            ]
        },
        {
            number: "03",
            title: "Leadership",
            icon: Crown,
            color: "#FF3A4A",
            items: [
                "Build systems",
                "Create SOPs",
                "Pitch ideas",
                "Lead operations"
            ]
        }
    ];

    return (
        <section
            id="journey"
            className="py-16 md:py-24 relative overflow-hidden"
            style={{ backgroundColor: 'var(--lp-bg-solid)' }}
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-[600px] h-[600px]"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(168, 85, 247, 0.08) 0%, transparent 60%)',
                        filter: 'blur(100px)',
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                        The <span className="lp-text-gradient">90-Day</span> Transformation
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-300">
                        Three phases. One complete transformation.
                    </p>
                </motion.div>

                {/* Phases Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="rounded-2xl p-6 relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${phase.color}10 0%, ${phase.color}05 100%)`,
                                border: `1px solid ${phase.color}25`,
                            }}
                        >
                            {/* Phase Number */}
                            <div
                                className="absolute -top-2 -right-2 text-7xl font-black opacity-10"
                                style={{ color: phase.color }}
                            >
                                {phase.number}
                            </div>

                            {/* Icon & Title */}
                            <div className="flex items-center gap-3 mb-5 relative z-10">
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{
                                        background: `${phase.color}20`,
                                        border: `1px solid ${phase.color}40`,
                                        boxShadow: `0 0 15px ${phase.color}30`,
                                    }}
                                >
                                    <phase.icon className="w-5 h-5" style={{ color: phase.color }} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider">Phase {phase.number}</p>
                                    <h3 className="text-lg font-bold" style={{ color: phase.color }}>
                                        {phase.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Items */}
                            <div className="space-y-3 relative z-10">
                                {phase.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 text-sm text-slate-300"
                                    >
                                        <div
                                            className="w-1.5 h-1.5 rounded-full"
                                            style={{ background: phase.color }}
                                        />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline connector for desktop */}
                <div className="hidden md:flex justify-center items-center gap-4 mb-8">
                    <div className="h-1 w-16 rounded-full" style={{ background: '#4AD4FF' }} />
                    <span className="text-slate-500">→</span>
                    <div className="h-1 w-16 rounded-full" style={{ background: '#A855F7' }} />
                    <span className="text-slate-500">→</span>
                    <div className="h-1 w-16 rounded-full" style={{ background: '#FF3A4A' }} />
                </div>

                {/* End Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center space-y-3"
                >
                    <p className="text-lg md:text-xl text-slate-300">
                        By Day 90, students are no longer learners.
                    </p>
                    <p className="text-xl md:text-2xl font-semibold text-white">
                        They are <span className="lp-text-gradient">leaders</span> in training.
                    </p>
                    <p className="text-slate-300 text-sm mt-4">
                        No confusion. No half-learning. <span className="text-white font-medium">One clear outcome.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
