import { motion, useMotionValue, useSpring } from 'motion/react';
import { MouseEvent } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 50);
    mouseY.set((clientY / innerHeight - 0.5) * 50);
  };

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black py-20"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Background */}
      <motion.div 
        style={{ x, y }}
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </motion.div>

      {/* Geometric Web Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-bold tracking-wider uppercase">
            Ajinyx Advisory Group · Amarillo, Texas Panhandle
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
            AI Automation Built for Amarillo <span className="text-cyan-500">Businesses That Want Their Time Back.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-zinc-400 leading-relaxed">
            Ajinyx Advisory Group designs voice AI, chat assistants, and custom business systems for Amarillo and the Texas Panhandle. We capture leads, book appointments, and quietly reduce the manual work that slows your operation down.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link 
              to="/book/meeting"
              className="group relative px-8 py-4 bg-cyan-500 text-black font-black rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                Book Your Lunch Meeting <ChevronRight size={20} />
              </span>
            </Link>
            <p className="text-zinc-500 text-sm max-w-[280px] text-left">
              Book a day and time that works for you, and I will buy you lunch so we can discuss your vision for the future of your business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
