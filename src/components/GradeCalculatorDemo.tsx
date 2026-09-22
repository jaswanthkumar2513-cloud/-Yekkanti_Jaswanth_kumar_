import { useState } from 'react';
import { Plus, Trash2, Calculator, RotateCcw, Award, CheckCircle2 } from 'lucide-react';

interface SubjectEntry {
  id: string;
  name: string;
  marks: number;
  credits: number;
}

const INITIAL_SUBJECTS: SubjectEntry[] = [
  { id: '1', name: 'Python Programming', marks: 88, credits: 4 },
  { id: '2', name: 'Calculus & Linear Algebra', marks: 82, credits: 4 },
  { id: '3', name: 'Basic Web Development', marks: 90, credits: 3 },
  { id: '4', name: 'Digital Logic & Computer Org', marks: 85, credits: 3 },
];

export default function GradeCalculatorDemo() {
  const [subjects, setSubjects] = useState<SubjectEntry[]>(INITIAL_SUBJECTS);
  const [newSubName, setNewSubName] = useState('');
  const [newSubMarks, setNewSubMarks] = useState<string>('80');
  const [newSubCredits, setNewSubCredits] = useState<string>('3');

  const addSubject = () => {
    if (!newSubName.trim()) return;
    const marksNum = Math.min(100, Math.max(0, Number(newSubMarks) || 0));
    const creditsNum = Math.min(6, Math.max(1, Number(newSubCredits) || 1));
    const newEntry: SubjectEntry = {
      id: Date.now().toString(),
      name: newSubName.trim(),
      marks: marksNum,
      credits: creditsNum,
    };
    setSubjects([...subjects, newEntry]);
    setNewSubName('');
    setNewSubMarks('80');
  };

  const removeSubject = (id: string) => {
    if (subjects.length <= 1) return;
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const updateSubjectMarks = (id: string, newMarks: number) => {
    const valid = Math.min(100, Math.max(0, newMarks));
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, marks: valid } : s)));
  };

  const resetToDefault = () => {
    setSubjects(INITIAL_SUBJECTS);
  };

  // Grade point calculation helper (10-point scale)
  const getGradePoint = (marks: number): { point: number; grade: string; remark: string } => {
    if (marks >= 90) return { point: 10, grade: 'O (Outstanding)', remark: 'Exceptional' };
    if (marks >= 80) return { point: 9, grade: 'A+ (Excellent)', remark: 'High Distinction' };
    if (marks >= 70) return { point: 8, grade: 'A (Very Good)', remark: 'Distinction' };
    if (marks >= 60) return { point: 7, grade: 'B+ (Good)', remark: 'First Class' };
    if (marks >= 50) return { point: 6, grade: 'B (Above Average)', remark: 'Second Class' };
    if (marks >= 40) return { point: 5, grade: 'C (Pass)', remark: 'Satisfactory' };
    return { point: 0, grade: 'F (Fail)', remark: 'Re-appear required' };
  };

  const totalCredits = subjects.reduce((acc, curr) => acc + curr.credits, 0);
  const totalMarks = subjects.reduce((acc, curr) => acc + curr.marks, 0);
  const averagePercentage = subjects.length > 0 ? (totalMarks / subjects.length).toFixed(1) : '0';

  const totalWeightedPoints = subjects.reduce((acc, curr) => {
    const { point } = getGradePoint(curr.marks);
    return acc + point * curr.credits;
  }, 0);

  const cgpa = totalCredits > 0 ? (totalWeightedPoints / totalCredits).toFixed(2) : '0.00';
  const overallGrade = getGradePoint(Number(averagePercentage));

  return (
    <div id="grade-calc-tool" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Calculator className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-semibold text-white tracking-tight">Interactive Grade & CGPA Calculator</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Live simulation of Jaswanth's Student Grade Calculator project logic in action.
          </p>
        </div>

        <button
          type="button"
          onClick={resetToDefault}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Demo
        </button>
      </div>

      {/* Result Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div className="bg-slate-950/70 border border-indigo-900/40 rounded-xl p-4 flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Estimated CGPA</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl sm:text-4xl font-bold text-indigo-400">{cgpa}</span>
            <span className="text-xs text-slate-500">/ 10.0 scale</span>
          </div>
          <span className="text-xs text-indigo-300/80 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Weighted by credit hours
          </span>
        </div>

        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Average Score</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl sm:text-4xl font-bold text-slate-100">{averagePercentage}%</span>
            <span className="text-xs text-slate-500">across {subjects.length} subjects</span>
          </div>
          <span className="text-xs text-slate-400 mt-1">Total Marks: {totalMarks} / {subjects.length * 100}</span>
        </div>

        <div className="bg-slate-950/70 border border-emerald-900/40 rounded-xl p-4 flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Performance Grade</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-emerald-400">{overallGrade.grade.split(' ')[0]}</span>
            <span className="text-xs text-emerald-300 font-medium">{overallGrade.remark}</span>
          </div>
          <span className="text-xs text-slate-400 mt-1 flex items-center gap-1">
            <Award className="w-3 h-3 text-emerald-400" /> Academic Standing
          </span>
        </div>
      </div>

      {/* Subject rows */}
      <div className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Subject Course List</div>
        <div className="max-h-64 overflow-y-auto pr-1 space-y-2.5">
          {subjects.map((sub) => {
            const { grade, point } = getGradePoint(sub.marks);
            return (
              <div
                key={sub.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950/50 border border-slate-800/80 rounded-xl px-4 py-3 hover:border-slate-700 transition"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-200 truncate">{sub.name}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                    <span>{sub.credits} Credits</span>
                    <span>•</span>
                    <span className="text-indigo-400 font-medium">{grade}</span>
                    <span>•</span>
                    <span>Grade Point: {point}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <label htmlFor={`marks-${sub.id}`} className="text-xs text-slate-400">
                      Marks:
                    </label>
                    <input
                      id={`marks-${sub.id}`}
                      type="number"
                      min={0}
                      max={100}
                      value={sub.marks}
                      onChange={(e) => updateSubjectMarks(sub.id, Number(e.target.value))}
                      className="w-16 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-sm text-center text-white focus:outline-none focus:border-indigo-500 font-mono"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => removeSubject(sub.id)}
                    disabled={subjects.length <= 1}
                    className="p-1.5 text-slate-500 hover:text-rose-400 disabled:opacity-30 disabled:hover:text-slate-500 transition rounded-lg hover:bg-slate-800"
                    title="Remove subject"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add new subject controls */}
      <div className="mt-5 pt-5 border-t border-slate-800">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Add Custom Subject</div>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <input
            type="text"
            placeholder="e.g. Data Structures, Engineering Graphics"
            value={newSubName}
            onChange={(e) => setNewSubName(e.target.value)}
            className="sm:col-span-6 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <div className="sm:col-span-3 flex items-center gap-2">
            <span className="text-xs text-slate-400 whitespace-nowrap">Marks:</span>
            <input
              type="number"
              min={0}
              max={100}
              value={newSubMarks}
              onChange={(e) => setNewSubMarks(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 font-mono"
            />
          </div>
          <div className="sm:col-span-3 flex items-center gap-2">
            <span className="text-xs text-slate-400 whitespace-nowrap">Credits:</span>
            <select
              value={newSubCredits}
              onChange={(e) => setNewSubCredits(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="1">1 Credit</option>
              <option value="2">2 Credits</option>
              <option value="3">3 Credits</option>
              <option value="4">4 Credits</option>
              <option value="5">5 Credits</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={addSubject}
          disabled={!newSubName.trim()}
          className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-semibold transition shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Subject to Calculator
        </button>
      </div>
    </div>
  );
}
