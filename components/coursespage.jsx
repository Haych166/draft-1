export function CoursesPage({ onNavigate }) {
  return (
    <section className="bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-2">Courses & Programmes</h1>
        <p className="text-sm text-slate-300 mb-6">
          Structured programmes for different fitness levels: beginner, intermediate and
          advanced – all designed to fit around real-life schedules and low motivation days.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-xs inline-block mb-1 px-2 py-1 rounded-full bg-green-500/10 text-green-400">
              Beginner
            </p>
            <h2 className="font-semibold mb-1 text-sm">Start Strong</h2>
            <p className="text-xs text-slate-300 mb-2">
              Low-impact workouts for people starting from scratch or returning to exercise.
            </p>
            <ul className="text-xs text-slate-300 space-y-1 mb-3">
              <li>• 3 x 20-minute classes per week</li>
              <li>• Focus on technique and confidence</li>
              <li>• Perfect for busy or anxious beginners</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-xs inline-block mb-1 px-2 py-1 rounded-full bg-sky-500/10 text-sky-400">
              Intermediate
            </p>
            <h2 className="font-semibold mb-1 text-sm">Build Resilience</h2>
            <p className="text-xs text-slate-300 mb-2">
              For users ready to push a bit harder with structured strength and cardio.
            </p>
            <ul className="text-xs text-slate-300 space-y-1 mb-3">
              <li>• 4 x 30-minute classes per week</li>
              <li>• Mix of HIIT, strength and core</li>
              <li>• Progress linked to your dashboard</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-xs inline-block mb-1 px-2 py-1 rounded-full bg-purple-500/10 text-purple-300">
              Advanced
            </p>
            <h2 className="font-semibold mb-1 text-sm">Push Your Limits</h2>
            <p className="text-xs text-slate-300 mb-2">
              Higher-intensity classes for experienced users who want performance gains.
            </p>
            <ul className="text-xs text-slate-300 space-y-1 mb-3">
              <li>• 5 x 40-minute classes per week</li>
              <li>• Trainer-led live sessions</li>
              <li>• Advanced stats and analytics</li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => onNavigate("pricing")}
          className="mt-6 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-sky-400 text-slate-950 text-sm font-semibold"
        >
          See Pricing Options
        </button>
      </div>
    </section>
  );
}
