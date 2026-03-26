import { motion } from 'motion/react';
import Hero from '../components/Hero';
import RoutingHub from '../components/RoutingHub';
import FAQ from '../components/FAQ';
import { Shield, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Value Props Section */}
      <section className="py-24 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Dedicated Strategy</h3>
              <p className="text-zinc-500 text-sm">We act as your dedicated digital strategists, deploying the exact level of AI integration you need to scale effortlessly while we handle the complexity.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Predictable Costs</h3>
              <p className="text-zinc-500 text-sm">Custom builds involve a straightforward one time implementation fee, followed by a manageable monthly structure for hosting and API maintenance.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Operational Relief</h3>
              <p className="text-zinc-500 text-sm">Experience the feeling of relief, predictability, and operational control as AI handles the heavy lifting.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <RoutingHub />
      
      <FAQ />

      {/* Final CTA */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/5 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Ready to Reclaim Your Time?
            </h2>
            <p className="text-xl text-zinc-400">
              Book a day and time that works for you, and I will buy you lunch so we can discuss your vision for the future of your business.
            </p>
            <Link 
              to="/book/meeting"
              className="inline-block px-12 py-5 bg-cyan-500 text-black font-black text-lg rounded-2xl hover:bg-cyan-400 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              Schedule Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
