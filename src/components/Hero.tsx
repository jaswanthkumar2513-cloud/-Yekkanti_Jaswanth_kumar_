import { ArrowDown, Github, Linkedin, Sparkles, Terminal, Code, Cpu, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface HeroProps {
  onScrollToPrompt: () => void;
}

export default function Hero({ onScrollToPrompt }: HeroProps) {
  return (
    <section id="hero" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-500/10 via-slate-900/5 to-transparent pointer-events-none -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>1st Year B.Tech Computer Science & Engineering</span>
            <span className="text-slate-600">•</span>
            <span className="text-indigo-400 font-semibold">Aspiring AI Engineer</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Yekkanti <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-300">Jaswanthkumar</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
            Starting my engineering career with deep curiosity for artificial intelligence, building strong foundations in <strong className="text-white font-medium">Python</strong>, <strong className="text-white font-medium">Web Development</strong>, and <strong className="text-white font-medium">Generative AI</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8 sm:mt-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition"
            >
              <span>Explore My Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onScrollToPrompt}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 text-slate-200 font-semibold text-sm transition"
            >
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span>Copy AI Studio Prompt</span>
            </button>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium text-sm transition"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-indigo-400 font-medium text-sm transition"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          {/* Quick Metrics / Focus Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mt-12 sm:mt-16 text-left">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-indigo-400 mb-1">
                <Code className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Language</span>
              </div>
              <div className="text-base font-bold text-white">Python</div>
              <div className="text-xs text-slate-400 mt-0.5">Logic & Data Structures</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-sky-400 mb-1">
                <Cpu className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Specialization</span>
              </div>
              <div className="text-base font-bold text-white">Generative AI</div>
              <div className="text-xs text-slate-400 mt-0.5">LLMs & Prompt Design</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-teal-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Frontend</span>
              </div>
              <div className="text-base font-bold text-white">Web Dev</div>
              <div className="text-xs text-slate-400 mt-0.5">HTML, CSS, JavaScript</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Education</span>
              </div>
              <div className="text-base font-bold text-white">B.Tech CSE</div>
              <div className="text-xs text-slate-400 mt-0.5">1st Year Student</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
