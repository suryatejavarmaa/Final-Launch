import { useRef, useLayoutEffect } from 'react';
import { motion } from 'motion/react';
import { X, Check, ArrowDown, Zap, Rocket, ShieldAlert, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function WhyDifferent() {
    const componentRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const notThisList = [
        "Not theory-based exams",
        "Not just motivational talks",
        "Not generic placement training"
    ];

    const insteadList = [
        { text: "Real Product Execution", sub: "Build & ship to real users", icon: Rocket },
        { text: "Daily Founder Pressure", sub: "Accountability like a startup", icon: Zap },
        { text: "Investor-Ready Portfolio", sub: "Proof of work, not grades", icon: Award },
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");

            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: sliderRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + sliderRef.current!.offsetWidth // scroll duration matches width
                }
            });
        }, componentRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={componentRef} className="bg-slate-950 font-sans text-white overflow-hidden">

            <div ref={sliderRef} className="flex flex-nowrap h-screen w-[400vw]">

                {/* ════════════════════════════════════════════════════
                    PANEL 1: THE HOOK (Dual Theme - Red to Blue)
                ════════════════════════════════════════════════════ */}
                <div className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                    style={{ background: 'var(--lp-gradient-dual)' }}>

                    {/* Glass Pattern Overlay */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:64px_64px]" />

                    <div className="text-center max-w-5xl mx-auto relative z-10 px-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border mb-8 shadow-lg backdrop-blur-md"
                                style={{
                                    background: 'var(--lp-bg-glass)',
                                    borderColor: 'rgba(255,255,255,0.2)'
                                }}>
                                <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
                                <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">The Reality Check</span>
                            </div>

                            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter drop-shadow-xl">
                                Why Launchpad<br />
                                is Different?
                            </h2>

                            <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed font-light drop-shadow-md">
                                Traditional colleges sell you a <span className="font-bold border-b-2 border-white/50">safety net</span>.<br />
                                We train you for the <span className="font-bold border-b-2 border-white">war zone</span>.
                            </p>

                            <motion.div
                                className="flex flex-col items-center gap-3"
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/80">Scroll Right</span>
                                <ArrowDown className="w-6 h-6 text-white -rotate-90" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════
                    PANEL 2: NOT THIS (Fire Theme - Deep Red)
                ════════════════════════════════════════════════════ */}
                <div className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                    style={{
                        background: 'var(--lp-bg-fire-card)',
                        boxShadow: 'inset 0 0 80px rgba(225, 29, 72, 0.05)'
                    }}>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10">
                        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white blur-3xl" />
                    </div>

                    <div className="w-full max-w-7xl grid md:grid-cols-2 gap-16 items-center relative z-10 px-4 md:px-20">
                        <div className="order-2 md:order-1">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-black/40 rounded-xl backdrop-blur-md border border-red-500/30 shadow-lg shadow-black/20">
                                    <ShieldAlert className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                                    NOT This
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {notThisList.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-6 p-5 rounded-2xl border transition-all duration-300 shadow-xl group hover:scale-[1.02]"
                                        style={{
                                            background: 'rgba(0,0,0,0.3)',
                                            borderColor: 'rgba(255,58,74,0.3)'
                                        }}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-red-950/50 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                                            <X className="w-6 h-6 text-red-400" />
                                        </div>
                                        <span className="text-2xl md:text-3xl text-white font-medium line-through decoration-red-500/80 decoration-4 opacity-90 drop-shadow-md">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Element */}
                        <div className="order-1 md:order-2 aspect-square max-h-[500px] flex items-center justify-center p-12">
                            <div className="relative w-full h-full rounded-[3rem] flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm border border-white/10"
                                style={{ background: 'rgba(0,0,0,0.4)' }}>
                                <div className="text-[8rem] leading-none mb-6 drop-shadow-2xl grayscale-[0.5]">🏫</div>
                                <h4 className="text-4xl font-black text-white uppercase tracking-wider mb-2 drop-shadow-lg">The Old Way</h4>
                                <p className="text-red-200 font-mono text-lg tracking-widest bg-red-950/80 px-4 py-1 rounded-full border border-red-500/30 shadow-lg">WARNING: OBSOLETE</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════
                    PANEL 3: INSTEAD THIS (Ice Theme - Electric Blue)
                ════════════════════════════════════════════════════ */}
                <div className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                    style={{
                        background: 'var(--lp-bg-ice-card)',
                        boxShadow: 'inset 0 0 80px rgba(14, 165, 233, 0.05)'
                    }}>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 left-0 w-full h-full opacity-10">
                        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
                    </div>

                    <div className="w-full max-w-7xl grid md:grid-cols-2 gap-16 items-center relative z-10 px-4 md:px-20">
                        {/* Visual Element */}
                        <div className="relative aspect-square max-h-[500px] flex items-center justify-center p-6">
                            <div className="w-full h-full rounded-[3rem] flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20 relative overflow-hidden"
                                style={{ background: 'rgba(255,255,255,0.1)' }}>
                                <div className="relative z-10 text-center">
                                    <div className="text-[8rem] leading-none mb-6 drop-shadow-2xl">🚀</div>
                                    <h4 className="text-4xl font-black text-white uppercase tracking-wider mb-2 drop-shadow-md">The New Way</h4>
                                    <p className="text-white/90 font-mono text-lg tracking-widest bg-white/20 px-4 py-1 rounded-full border border-white/30">SYSTEM: OPTIMIZED</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md border border-white/30 shadow-lg">
                                    <Check className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-xl">
                                    Instead, THIS
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {insteadList.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group relative p-6 rounded-2xl border hover:scale-[1.02] transition-all duration-300 shadow-xl"
                                        style={{
                                            background: 'rgba(255,255,255,0.15)',
                                            borderColor: 'rgba(255,255,255,0.3)'
                                        }}
                                    >
                                        <div className="flex items-start gap-5 relative z-10">
                                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg text-blue-500">
                                                <item.icon className="w-6 h-6" style={{ color: '#00A9FF' }} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-sm">{item.text}</h4>
                                                <p className="text-white/90 text-sm md:text-base font-medium">{item.sub}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════
                    PANEL 4: THE IMPACT (Neutral - Focus on Content)
                ════════════════════════════════════════════════════ */}
                <div className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center relative overflow-hidden bg-slate-950">
                    {/* Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_100%)]" />

                    <div className="text-center max-w-6xl mx-auto relative z-10 px-4">
                        <div
                            className="relative p-8 md:p-16 border rounded-[3rem] backdrop-blur-md shadow-2xl"
                            style={{
                                background: 'var(--lp-bg-glass-dark)',
                                borderColor: 'rgba(255,255,255,0.1)'
                            }}
                        >
                            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl">
                                REAL <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--lp-gradient-fire)' }}>PRESSURE.</span><br />
                                REAL <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--lp-gradient-ice)' }}>OUTCOMES.</span>
                            </h2>

                            <div className="h-1 w-32 bg-white/20 mx-auto mb-10 rounded-full" />

                            <p className="text-2xl md:text-3xl text-slate-300 max-w-3xl mx-auto mb-0 leading-relaxed font-light">
                                Students enter as <span className="text-slate-500">learners</span>. <br />
                                They leave as <span className="font-black tracking-wide border-b-2 pb-1 text-transparent bg-clip-text" style={{ backgroundImage: 'var(--lp-gradient-branding)' }}>Leaders & Founders.</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
