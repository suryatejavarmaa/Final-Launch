import { motion } from 'motion/react';
import { GraduationCap, FileText, Search, Hammer, Brain, Crown, Lightbulb, Rocket } from 'lucide-react';

export function BeliefSection() {
    const notBelong = [
        { icon: GraduationCap, text: "Degree holders" },
        { icon: FileText, text: "Certificate collectors" },
        { icon: Search, text: "Job seekers" }
    ];

    const belong = [
        { icon: Hammer, text: "Builders" },
        { icon: Brain, text: "Decision makers" },
        { icon: Crown, text: "Leaders" },
        { icon: Lightbulb, text: "Problem solvers" }
    ];

    return (
        <section
            id="belief"
            className="py-16 md:py-24 relative overflow-hidden"
            style={{ backgroundColor: 'var(--lp-bg-solid)' }}
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(255, 58, 74, 0.08) 0%, rgba(0, 169, 255, 0.05) 50%, transparent 70%)',
                        filter: 'blur(100px)',
                    }}
                />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                        Why This <span className="lp-text-gradient">Matters</span> for Your Future
                    </h2>
                </motion.div>

                {/* Comparison */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* NOT Belong */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center md:text-right"
                    >
                        <p className="text-lg text-slate-300 mb-6">The future does <span className="text-white font-medium">NOT</span> belong to:</p>
                        <div className="space-y-4">
                            {notBelong.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                                    className="flex items-center gap-3 justify-center md:justify-end"
                                >
                                    <span className="text-slate-500 line-through">{item.text}</span>
                                    <item.icon className="w-4 h-4 text-slate-600" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* BELONG */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center md:text-left"
                    >
                        <p className="text-lg text-slate-300 mb-6">The future <span className="text-white font-medium">BELONGS</span> to:</p>
                        <div className="space-y-4">
                            {belong.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-3 justify-center md:justify-start"
                                >
                                    <item.icon className="w-4 h-4 text-white" />
                                    <span className="text-white font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bristletech Statement */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="rounded-2xl p-8 md:p-10 text-center mb-10"
                    style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <p className="text-lg md:text-xl text-slate-300 mb-4">
                        <span className="lp-text-gradient font-bold">Bristletech</span> does not create followers.
                    </p>
                    <p className="text-xl md:text-2xl font-semibold text-white">
                        We create <span className="text-white font-bold">AI leaders, innovators, and founders</span>.
                    </p>
                </motion.div>

                {/* Power Line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Rocket className="w-8 h-8" style={{ color: '#FF3A4A' }} />
                    </div>
                    <p className="text-lg md:text-xl text-slate-300 mb-2">
                        When <span className="text-white">talent, vision, and execution</span> meet the rocket...
                    </p>
                    <p className="text-2xl md:text-3xl font-bold lp-text-gradient">
                        It ignites.
                    </p>
                    <p className="text-lg text-slate-300 mt-4">
                        And that rocket is <span className="text-white font-semibold">your future</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
