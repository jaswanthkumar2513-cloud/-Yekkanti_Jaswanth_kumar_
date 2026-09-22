import { useState } from 'react';
import { UserCheck, AlertCircle, CheckCircle, Info, ShieldCheck, HelpCircle } from 'lucide-react';

export default function VotingEligibilityDemo() {
  const [age, setAge] = useState<number>(19);
  const [isCitizen, setIsCitizen] = useState<boolean>(true);
  const [isRegistered, setIsRegistered] = useState<boolean>(true);
  const [hasVoterId, setHasVoterId] = useState<boolean>(true);

  // Voting criteria evaluation logic
  const isAgeValid = age >= 18;
  const isFullyEligible = isAgeValid && isCitizen && isRegistered;
  const yearsRemaining = 18 - age;

  return (
    <div id="voting-calc-tool" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
              <UserCheck className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-semibold text-white tracking-tight">Voting System Eligibility Calculator</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Live simulation of Jaswanth's voting verification algorithm & decision tree.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>Statutory 18+ Rule</span>
        </div>
      </div>

      {/* Primary Status Banner */}
      <div
        className={`my-6 p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
          isFullyEligible
            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
            : !isCitizen
            ? 'bg-rose-950/40 border-rose-500/40 text-rose-200'
            : !isAgeValid
            ? 'bg-amber-950/40 border-amber-500/40 text-amber-200'
            : 'bg-blue-950/40 border-blue-500/40 text-blue-200'
        }`}
      >
        <div className="flex items-start gap-3">
          {isFullyEligible ? (
            <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          )}
          <div>
            <div className="text-base font-semibold text-white">
              {isFullyEligible
                ? 'ELIGIBLE TO VOTE'
                : !isAgeValid
                ? 'UNDERAGE — NOT YET ELIGIBLE'
                : !isCitizen
                ? 'CITIZENSHIP REQUIREMENT UNMET'
                : 'AGE ELIGIBLE (REGISTRATION PENDING)'}
            </div>
            <p className="text-xs sm:text-sm mt-1 opacity-90">
              {isFullyEligible
                ? 'Congratulations! You meet all constitutional criteria to cast your ballot in upcoming elections.'
                : !isAgeValid
                ? `You must be at least 18 years old to vote. You will be eligible in approximately ${yearsRemaining} year${yearsRemaining > 1 ? 's' : ''}.`
                : !isCitizen
                ? 'Voting in national and regional democratic elections requires official recognized citizenship.'
                : 'You have reached the legal age of 18, but you must complete voter registration to receive your voting slip.'}
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <span
            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${
              isFullyEligible
                ? 'bg-emerald-500 text-slate-950'
                : !isAgeValid
                ? 'bg-amber-500 text-slate-950'
                : !isCitizen
                ? 'bg-rose-500 text-white'
                : 'bg-blue-500 text-white'
            }`}
          >
            {isFullyEligible ? 'Verified Voter' : !isAgeValid ? 'Junior / Future Voter' : 'Action Needed'}
          </span>
        </div>
      </div>

      {/* Input Form Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Left Column: Age & Citizen Status */}
        <div className="space-y-5 bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="voter-age" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                1. Candidate Age (Years)
              </label>
              <span className="font-mono text-base font-bold text-teal-400">{age} yrs</span>
            </div>
            <input
              id="voter-age"
              type="range"
              min={12}
              max={100}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full accent-teal-400 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>12 yrs</span>
              <span className="text-teal-400/90 font-medium">18 yrs (Legal Threshold)</span>
              <span>100 yrs</span>
            </div>

            {/* Quick Age Buttons */}
            <div className="flex items-center gap-2 mt-3">
              <span className="text-[11px] text-slate-400">Presets:</span>
              {[16, 17, 18, 19, 25, 45].map((presetAge) => (
                <button
                  key={presetAge}
                  type="button"
                  onClick={() => setAge(presetAge)}
                  className={`text-xs px-2.5 py-1 rounded-md border transition ${
                    age === presetAge
                      ? 'bg-teal-500/20 border-teal-500 text-teal-300 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {presetAge}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
              2. Citizenship Status
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsCitizen(true)}
                className={`py-2 px-3 text-xs rounded-lg border font-medium transition ${
                  isCitizen
                    ? 'bg-teal-600/20 border-teal-500 text-teal-200'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Yes, Citizen
              </button>
              <button
                type="button"
                onClick={() => setIsCitizen(false)}
                className={`py-2 px-3 text-xs rounded-lg border font-medium transition ${
                  !isCitizen
                    ? 'bg-rose-600/20 border-rose-500 text-rose-200'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Non-Citizen
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Registration & Electoral Prerequisites */}
        <div className="space-y-5 bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
              3. Electoral Roll Registration
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsRegistered(true)}
                className={`py-2 px-3 text-xs rounded-lg border font-medium transition ${
                  isRegistered
                    ? 'bg-teal-600/20 border-teal-500 text-teal-200'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Registered on Roll
              </button>
              <button
                type="button"
                onClick={() => setIsRegistered(false)}
                className={`py-2 px-3 text-xs rounded-lg border font-medium transition ${
                  !isRegistered
                    ? 'bg-amber-600/20 border-amber-500 text-amber-200'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Not Registered Yet
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
              4. Voter ID (EPIC) Card Possession
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setHasVoterId(true)}
                className={`py-2 px-3 text-xs rounded-lg border font-medium transition ${
                  hasVoterId
                    ? 'bg-teal-600/20 border-teal-500 text-teal-200'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Issued / Active ID
              </button>
              <button
                type="button"
                onClick={() => setHasVoterId(false)}
                className={`py-2 px-3 text-xs rounded-lg border font-medium transition ${
                  !hasVoterId
                    ? 'bg-slate-800 border-slate-700 text-slate-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Pending / None
              </button>
            </div>
          </div>

          <div className="bg-slate-900/90 rounded-lg p-3 text-xs text-slate-400 flex items-start gap-2 border border-slate-800">
            <Info className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <span>
              <strong>Algorithm Insight:</strong> Evaluates boolean predicates in order: <code className="text-teal-300 bg-slate-950 px-1 py-0.5 rounded">age &gt;= 18 and is_citizen and is_registered</code>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
