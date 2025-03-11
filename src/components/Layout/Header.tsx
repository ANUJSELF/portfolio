import React from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Monitor className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Anuj Tiwari
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Sun className="w-6 h-6 text-yellow-400" />
          </button>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
    >
      {children}
    </a>
  );
}