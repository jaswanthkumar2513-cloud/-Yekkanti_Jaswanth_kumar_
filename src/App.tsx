import { useRef } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import PromptViewer from './components/PromptViewer.tsx';
import SkillsSection from './components/SkillsSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import { Terminal, Sparkles } from 'lucide-react';

export default function App() {
  const promptRef = useRef<HTMLDivElement>(null);

  const scrollToPrompt = () => {
    if (promptRef.current) {
      promptRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Top Notice Bar informing the user that their prompt is ready AND their portfolio is live */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border-b border-indigo-900/40 text-xs py-2.5 px-4 text-center text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <span className="flex items-center gap-1.5 text-indigo-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            AI Studio Prompt Generated & Loaded Below!
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="text-slate-400">
            Interactive Portfolio for <strong>Yekkanti Jaswanthkumar</strong> (1st Year B.Tech CSE)
          </span>
          <button
            type="button"
            onClick={scrollToPrompt}
            className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-2 ml-1"
          >
            <span>Jump to Prompt & Copy</span>
            <Terminal className="w-3 h-3" />
          </button>
        </div>
      </div>

      <Navbar onScrollToPrompt={scrollToPrompt} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onScrollToPrompt={scrollToPrompt} />

        {/* Master AI Studio Prompt Section */}
        <section ref={promptRef} className="py-12 sm:py-16 border-t border-slate-900 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PromptViewer />
          </div>
        </section>

        {/* Skills & Technologies Section */}
        <SkillsSection />

        {/* Projects Section with Live Interactive Demos */}
        <ProjectsSection />

        {/* Contact & Social Links Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
