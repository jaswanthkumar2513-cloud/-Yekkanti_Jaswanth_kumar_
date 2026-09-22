import { useState } from 'react';
import { ExternalLink, Github, Sparkles, Play, Code2, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData.ts';
import GradeCalculatorDemo from './GradeCalculatorDemo.tsx';
import VotingEligibilityDemo from './VotingEligibilityDemo.tsx';

export default function ProjectsSection() {
  const [activeDemo, setActiveDemo] = useState<'grade-calculator' | 'voting-calculator' | null>('grade-calculator');

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-3">
              Hands-On Implementations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Student Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Practical logic-driven applications built using Python algorithms, structured calculation functions, and clean interactive web UI.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition"
          >
            <span>View All Repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Project Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {PROJECTS_DATA.map((proj) => {
            const isDemoActive = activeDemo === proj.interactiveDemoType;

            return (
              <div
                key={proj.id}
                className={`bg-slate-900/60 border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  isDemoActive
                    ? 'border-indigo-500/50 shadow-xl shadow-indigo-950/20'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-950 text-indigo-400 border border-slate-800">
                      {proj.category}
                    </span>

                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">{proj.title}</h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">{proj.description}</p>

                  {/* Highlights */}
                  <div className="my-5 space-y-2">
                    {proj.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800/80">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Demo Toggle */}
                <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveDemo(proj.interactiveDemoType || null)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition ${
                      isDemoActive
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isDemoActive ? 'Active Interactive Demo Below' : 'Launch Interactive Demo'}</span>
                  </button>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1 transition"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Workspace */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
              <h3 className="text-base font-semibold text-slate-200 tracking-tight">
                Live Interactive Workspace
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveDemo('grade-calculator')}
                className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                  activeDemo === 'grade-calculator'
                    ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 font-semibold'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                1. Grade Calculator
              </button>

              <button
                type="button"
                onClick={() => setActiveDemo('voting-calculator')}
                className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                  activeDemo === 'voting-calculator'
                    ? 'bg-teal-600/20 border-teal-500 text-teal-300 font-semibold'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                2. Voting System Eligibility
              </button>
            </div>
          </div>

          {activeDemo === 'grade-calculator' && <GradeCalculatorDemo />}
          {activeDemo === 'voting-calculator' && <VotingEligibilityDemo />}
        </div>
      </div>
    </section>
  );
}
