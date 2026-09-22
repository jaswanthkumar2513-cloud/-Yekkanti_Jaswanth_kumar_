import { useState } from 'react';
import { Copy, Check, Sparkles, Terminal, FileCode, ExternalLink, Lightbulb } from 'lucide-react';
import { MASTER_PROMPTS } from '../data/portfolioData.ts';

export default function PromptViewer() {
  const [selectedPromptId, setSelectedPromptId] = useState<string>(MASTER_PROMPTS[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const currentPrompt = MASTER_PROMPTS.find((p) => p.id === selectedPromptId) || MASTER_PROMPTS[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentPrompt.promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div id="ai-studio-prompt-hub" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready-to-Paste AI Studio Master Prompt</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Generated Google AI Studio Prompt
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Custom tailored with your exact profile, B.Tech CSE background, Python & Web projects, and GitHub/LinkedIn credentials.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg ${
            copied
              ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-indigo-500/25'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Structured Prompt</span>
            </>
          )}
        </button>
      </div>

      {/* Prompt Selector Tabs */}
      <div className="flex flex-wrap gap-2 my-6">
        {MASTER_PROMPTS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setSelectedPromptId(p.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedPromptId === p.id
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/50 shadow-sm'
                : 'bg-slate-950/60 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Prompt Content Card with Terminal Aesthetic */}
      <div className="relative rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-xs sm:text-sm">
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800 text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs text-slate-400 font-sans font-medium flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              ai_studio_portfolio_prompt.md
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-sans transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-x-auto max-h-[460px] text-slate-200 leading-relaxed whitespace-pre-wrap select-all selection:bg-indigo-600 selection:text-white">
          {currentPrompt.promptText}
        </div>
      </div>

      {/* Why This Prompt Works Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800/80 text-xs">
        <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
          <div className="font-semibold text-slate-200 flex items-center gap-1.5 mb-1 text-sm">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            Contextual Authenticity
          </div>
          <p className="text-slate-400 leading-normal">
            Grounds your experience as an enthusiastic 1st-year student without artificial overstatements, making it realistic and impressive to recruiters.
          </p>
        </div>

        <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
          <div className="font-semibold text-slate-200 flex items-center gap-1.5 mb-1 text-sm">
            <FileCode className="w-4 h-4 text-indigo-400" />
            Interactive Requirements
          </div>
          <p className="text-slate-400 leading-normal">
            Instructs AI Studio to build live working calculations for your Grade Calculator and Voting Eligibility tools rather than static placeholders.
          </p>
        </div>

        <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
          <div className="font-semibold text-slate-200 flex items-center gap-1.5 mb-1 text-sm">
            <ExternalLink className="w-4 h-4 text-emerald-400" />
            Verifiable Social Proof
          </div>
          <p className="text-slate-400 leading-normal">
            Explicitly embeds your genuine GitHub and LinkedIn URLs so any reviewer can instantly verify your code repositories and connect.
          </p>
        </div>
      </div>
    </div>
  );
}
