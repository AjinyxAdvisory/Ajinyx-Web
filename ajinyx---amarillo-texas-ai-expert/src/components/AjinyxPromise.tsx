import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AjinyxPromise() {
  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white">The Ajinyx Promise</h2>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            We measure our success by the amount of stress we remove from your daily operations. We promise to act as your dedicated digital strategists, deploying the exact level of AI integration you need to scale effortlessly. We handle the immense complexity of the technology in the background, so you can experience the relief of a business that runs smoothly, day or night.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-8"
        >
          <p className="text-lg text-zinc-300 italic">
            "Book a day and time that works for you, and I will buy you lunch so we can discuss your vision for the future of your business."
          </p>
          <Link 
            to="/book/meeting"
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black font-black rounded-xl hover:bg-cyan-400 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Schedule Your Meeting <ExternalLink size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
