import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { businessInfo } from '../lib/businessInfo';

const navItems = [
  { label: 'Enterprise', to: '/enterprise' },
  { label: 'Small Business', to: '/small-business' },
  { label: 'Marketing', to: '/marketing' },
  { label: 'Custom Solutions', to: '/custom-solutions' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
      isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-2xl border px-4 py-3 text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
      isActive
        ? 'border-cyan-500/40 bg-cyan-500/10 text-white'
        : 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-cyan-500/40 hover:text-white'
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-2xl font-black tracking-tighter text-white">
              AJI<span className="text-cyan-500">NYX</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={desktopLinkClass}>
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400" aria-hidden="true" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${businessInfo.telephone}`}
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-4 sm:px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Phone size={18} aria-hidden="true" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-white transition-colors hover:border-cyan-500/50 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:hidden"
              aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-3 border-t border-zinc-900 py-4">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
