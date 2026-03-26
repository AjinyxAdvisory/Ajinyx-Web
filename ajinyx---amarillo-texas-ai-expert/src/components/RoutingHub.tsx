import { motion } from 'motion/react';
import { Building2, Rocket, Code2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const paths = [
  {
    title: "Enterprise Advisory",
    description: "Strategic AI implementation for established organizations looking to optimize complex operations and scale intelligence.",
    icon: Building2,
    link: "/enterprise",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Small Business Growth Systems",
    description: "Turn generic AI into a high-performance digital strategist that handles your leads, bookings, and customer follow-ups.",
    icon: Rocket,
    link: "/small-business",
    color: "from-cyan-500/20 to-emerald-500/20"
  },
  {
    title: "Custom AI Solutions and App Development",
    description: "Bespoke software builds that solve your specific bottlenecks. We handle the complexity while you experience total operational control.",
    icon: Code2,
    link: "/custom-solutions",
    color: "from-purple-500/20 to-cyan-500/20"
  }
];

export default function RoutingHub() {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Link 
                to={path.link}
                className="group relative block h-full p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform duration-500">
                    <path.icon size={28} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {path.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {path.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-cyan-500 font-bold pt-4">
                    <span>Explore Path</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
