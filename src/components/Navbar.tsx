import { Code2, Github, Linkedin, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface NavbarProps {
  onScrollToPrompt: () => void;
}

export default function Navbar({ onScrollToPrompt }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-sm sm:text-base text-slate-100 tracking-tight flex items-center gap-1.5">
              <span>Y. Jaswanthkumar</span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                1st Year
              </span>
            </div>
            <div className="text-[11px] text-slate-400 font-medium">Aspiring AI Engineer</div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-indigo-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-indigo-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">
            Projects & Demos
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Action Buttons & Socials */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl text-slate-400 hover:text-indigo-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <button
            type="button"
            onClick={onScrollToPrompt}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600/15 hover:bg-indigo-600/25 border border-indigo-500/30 text-indigo-300 text-xs font-semibold transition"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">AI Studio Prompt</span>
            <span className="sm:hidden">Prompt</span>
          </button>
        </div>
      </div>
    </header>
  );
}
