import { motion } from 'motion/react';
import { Trophy, Gamepad2, BarChart3, Award } from 'lucide-react';

export function GamificationSection() {
    const features = [
        {
            icon: Trophy,
            title: "Leaderboards",
            description: "See where you rank among peers in real-time",
            color: "#FFD700"
        },
        {
            icon: Gamepad2,
            title: "Games & Challenges",
            description: "Level up through engaging weekly challenges",
            color: "#FF3A4A"
        },
        {
            icon: BarChart3,
            title: "Performance Tracking",
            description: "Data-driven insights on your progress",
            color: "#4AD4FF"
        },
        {
            icon: Award,
            title: "Rewards & Recognition",
            description: "Earn badges and unlock achievements",
            color: "#A855F7"
        }
    ];

    return (
        <section
            id="gamification"
            className="py-14 md:py-20 relative overflow-hidden"
            style={{ backgroundColor: 'var(--lp-bg-solid)' }}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px]"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
                        filter: 'blur(100px)',
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[400px]"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(255, 215, 0, 0.08) 0%, transparent 70%)',
                        filter: 'blur(80px)',
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
                        <span className="lp-text-gradient">Gamification</span> & Competition
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-300">
                        Because growth should feel rewarding
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group rounded-xl p-5 text-center transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <div
                                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                style={{
                                    background: `${feature.color}15`,
                                    border: `1px solid ${feature.color}30`,
                                    boxShadow: `0 0 20px ${feature.color}20`,
                                }}
                            >
                                <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                            </div>
                            <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                            <p className="text-slate-400 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center rounded-2xl p-6 md:p-8"
                    style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <p className="text-lg md:text-xl text-slate-300">
                        Launchpad is a <span className="text-white font-semibold">real startup environment</span>.
                    </p>
                    <p className="text-lg md:text-xl mt-2 text-slate-300">
                        Performance is <span className="text-white font-medium">visible, tracked, and rewarded</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
