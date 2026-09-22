import { Code2, Github, Linkedin, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Yekkanti Jaswanthkumar</div>
              <div className="text-slate-500 text-[11px]">1st Year B.Tech CSE • Aspiring AI Engineer</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-800">•</span>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="text-slate-500 text-[11px] flex items-center gap-1">
            <span>Built with precision for Google AI Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
