import { motion } from 'motion/react';
import { Palette, Code, TrendingUp, BarChart3, Bot, Users, Handshake, Lightbulb, Clock, FileText, Settings } from 'lucide-react';

export function SkillsSection() {
    const tracks = [
        { name: "Creative & Branding", icon: Palette, color: "#FF3A4A" },
        { name: "Technology & AI", icon: Code, color: "#4AD4FF" },
        { name: "Marketing & Growth", icon: TrendingUp, color: "#FF3A4A" },
        { name: "Business & Operations", icon: BarChart3, color: "#4AD4FF" },
        { name: "AI Leadership & Automation", icon: Bot, color: "#FF3A4A" }
    ];

    const skills = [
        { text: "Lead teams", icon: Users },
        { text: "Handle clients", icon: Handshake },
        { text: "Take decisions", icon: Lightbulb },
        { text: "Manage timelines", icon: Clock },
        { text: "Present reports", icon: FileText },
        { text: "Improve systems and performance", icon: Settings }
    ];

    return (
        <section
            id="skills"
            className="py-16 md:py-24 relative overflow-hidden"
            style={{ backgroundColor: 'var(--lp-bg-solid)' }}
        >
            {/* Background Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px]"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(0, 169, 255, 0.05) 0%, transparent 60%)',
                        filter: 'blur(80px)',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                        What Students <span className="lp-text-gradient">Actually Learn</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
                        Students don't study random subjects. They master <span className="text-white font-medium">ONE department deeply</span> like a real Chief.
                    </p>
                </motion.div>

                {/* Track Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group rounded-xl p-4 text-center cursor-pointer transition-all duration-300 hover:scale-105"
                            style={{
                                background: `linear-gradient(135deg, ${track.color}15 0%, ${track.color}05 100%)`,
                                border: `1px solid ${track.color}30`,
                                boxShadow: `0 0 30px ${track.color}10`,
                            }}
                        >
                            <div
                                className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                style={{
                                    background: `${track.color}20`,
                                    border: `1px solid ${track.color}40`,
                                }}
                            >
                                <track.icon className="w-6 h-6" style={{ color: track.color }} />
                            </div>
                            <span className="text-sm font-medium text-white">{track.name}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="rounded-2xl p-6 md:p-8"
                    style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <h3 className="text-lg font-semibold text-white mb-6 text-center">
                        Students learn to:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                                className="flex items-center gap-3 p-3 rounded-lg"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                }}
                            >
                                <skill.icon className="w-4 h-4 flex-shrink-0" style={{ color: '#4AD4FF' }} />
                                <span className="text-slate-300 text-sm">{skill.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* End Line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-8 text-lg text-slate-300"
                >
                    This is <span className="text-white font-medium">real founder mastery</span>, not classroom theory.
                </motion.p>
            </div>
        </section>
    );
}
