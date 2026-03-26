import { motion } from 'motion/react';
import AjinyxPromise from '../components/AjinyxPromise';

const cards = [
  {
    eyebrow: "SOLVE YOUR EXACT BOTTLENECK",
    title: "BESPOKE INTERNAL APPS",
    text: "Off-the-shelf software rarely fits perfectly. We use advanced development tools to rapidly prototype and deploy custom internal applications. Whether you need an intelligent quoting engine or an automated inventory tracker, we build it to your exact specifications."
  },
  {
    eyebrow: "CONNECT DISCONNECTED TECH",
    title: "SEAMLESS API INTEGRATION",
    text: "Stop manually transferring data between incompatible systems. We engineer the intelligent connective tissue between your legacy software, your CRM, and modern AI models, ensuring your data flows securely and instantly where it needs to go."
  },
  {
    eyebrow: "EXPERIENCE TRUE RELIEF",
    title: "DEDICATED STRATEGY",
    text: "We handle the immense complexity of the technology in the background, so you can experience the relief of a business that runs smoothly, day or night. You scale effortlessly while we manage the engine."
  }
];

export default function CustomSolutions() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white"
          >
            Custom Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            Bespoke AI software and app development tailored to your unique business vision. We build the tools that give you total operational control.
          </motion.p>
        </div>
      </section>

      {/* 3-Column Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:border-cyan-500/30 transition-all duration-500 group"
              >
                <div className="space-y-6">
                  <span className="text-xs font-black tracking-widest text-cyan-500 uppercase">
                    {card.eyebrow}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AjinyxPromise />
    </main>
  );
}
