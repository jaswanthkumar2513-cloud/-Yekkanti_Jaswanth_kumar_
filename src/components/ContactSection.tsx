import { useState, FormEvent } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Connect & Collaborate
              </h2>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Whether you want to discuss Python programming, computer science coursework, generative AI experiments, or student projects, I'd love to connect!
              </p>
            </div>

            {/* Social links cards */}
            <div className="space-y-3 pt-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950 text-white border border-slate-800 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">GitHub Profile</div>
                    <div className="text-sm font-semibold text-white">jaswanthkumar2513-cloud</div>
                  </div>
                </div>
                <span className="text-xs text-indigo-400 font-medium group-hover:underline">Visit &rarr;</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950 text-indigo-400 border border-slate-800 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">LinkedIn Network</div>
                    <div className="text-sm font-semibold text-white">jaswanth-kumar-0a5769433</div>
                  </div>
                </div>
                <span className="text-xs text-indigo-400 font-medium group-hover:underline">Connect &rarr;</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950 text-sky-400 border border-slate-800 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <span className="text-xs text-indigo-400 font-medium group-hover:underline">Write &rarr;</span>
              </a>
            </div>

            {/* Academic badge info */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>{PERSONAL_INFO.academicYear} • {PERSONAL_INFO.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Open to virtual internships, hackathons & student tech communities</span>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">Leave a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Have feedback on my grade calculator or voting verification demo? Send me a quick note.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Thank you for your note!</div>
                    <p className="text-xs mt-0.5 text-emerald-300">
                      Your message has been captured. Jaswanth will get back to you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Alex Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Hi Jaswanth, love your portfolio projects..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition shadow-md shadow-indigo-600/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
