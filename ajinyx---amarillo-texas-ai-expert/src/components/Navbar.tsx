import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-white">
              AJI<span className="text-cyan-500">NYX</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/enterprise" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Enterprise</Link>
            <Link to="/small-business" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Small Business</Link>
            <Link to="/custom-solutions" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Custom Solutions</Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:806-331-9686"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
