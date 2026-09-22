import { Code, Globe, Cpu, CheckCircle2, TrendingUp } from 'lucide-react';
import { SKILLS_DATA, PERSONAL_INFO } from '../data/portfolioData.ts';

export default function SkillsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-teal-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      default:
        return <Code className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies & Foundations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Solidifying core programming fundamentals in Python, building accessible web tools, and mastering early generative AI principles.
          </p>
        </div>

        {/* 3 Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_DATA.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {getIcon(category.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
                    {category.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                <p className="text-xs text-slate-400 mb-6">{category.subtitle}</p>

                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-slate-200">{item.name}</span>
                        <span className="text-slate-500 font-mono text-[11px]">{item.levelPercentage}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full transition-all duration-500"
                          style={{ width: `${item.levelPercentage}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Roadmap / First-Year Goals */}
        <div className="mt-12 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>1st Year B.Tech Milestones</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-1">Continuous Learning & AI Roadmap</h3>
            </div>
            <span className="text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
              Department: {PERSONAL_INFO.department}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {PERSONAL_INFO.goals.map((goal, index) => (
              <div
                key={goal}
                className="bg-slate-950/60 border border-slate-800/60 rounded-xl p-4 flex items-start gap-3 hover:border-slate-700 transition"
              >
                <span className="w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  0{index + 1}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
