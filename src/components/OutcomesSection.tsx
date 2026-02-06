import { motion } from 'motion/react';
import { Briefcase, Award, BadgeCheck, Presentation, Users, Target, Rocket, Crown } from 'lucide-react';

export function OutcomesSection() {
    const outcomes = [
        { icon: Briefcase, text: "Elite internships", color: "#4AD4FF" },
        { icon: Award, text: "Job offers from startups & partners", color: "#FF3A4A" },
        { icon: BadgeCheck, text: "Leadership badges & recognition", color: "#FFD700" },
        { icon: Presentation, text: "Direct investor pitching opportunities", color: "#A855F7" }
    ];

    const roles = [
        { icon: Users, text: "Department Heads" },
        { icon: Target, text: "Strategic Leaders" },
        { icon: Rocket, text: "Startup Founders" },
        { icon: Crown, text: "Early-stage Executives" }
    ];

    return (
        <section
            id="outcomes"
            className="py-16 md:py-24 relative overflow-hidden"
            style={{ backgroundColor: 'var(--lp-bg-solid)' }}
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute bottom-0 right-1/4 w-[500px] h-[500px]"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(255, 215, 0, 0.08) 0%, transparent 60%)',
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
                        Real <span className="lp-text-gradient">Outcomes</span> for Students
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-300">
                        What do you get after this program?
                    </p>
                </motion.div>

                {/* Outcomes Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {outcomes.map((outcome, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="rounded-xl p-5 text-center"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <div
                                className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center"
                                style={{
                                    background: `${outcome.color}15`,
                                    border: `1px solid ${outcome.color}30`,
                                }}
                            >
                                <outcome.icon className="w-6 h-6" style={{ color: outcome.color }} />
                            </div>
                            <p className="text-white text-sm font-medium">{outcome.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Performance Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mb-10"
                >
                    <p className="text-lg text-slate-300">
                        <span className="text-white font-medium">Top performers</span> move faster. But everyone rises.
                    </p>
                </motion.div>

                {/* Growth Roles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="rounded-2xl p-6 md:p-8"
                    style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <h3 className="text-lg font-semibold text-white mb-6 text-center">
                        Possible Growth Roles
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {roles.map((role, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-3 rounded-lg"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                }}
                            >
                                <role.icon className="w-4 h-4 flex-shrink-0" style={{ color: '#FFD700' }} />
                                <span className="text-slate-300 text-sm">{role.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Closing Line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-8 text-lg text-slate-300"
                >
                    Income grows with <span className="text-white font-medium">capability</span>, not <span className="text-slate-500 line-through">certificates</span>.
                </motion.p>
            </div>
        </section>
    );
}
