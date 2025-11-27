export function DashboardPage() {
  return (
    <section className="bg-slate-950 text-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-2 items-start">
        <div>
          <h1 className="text-2xl font-bold mb-2">Your Progress Dashboard</h1>
          <p className="text-sm text-slate-300 mb-3">
            The Fit Community dashboard helps you stay accountable with streaks, progress
            bars and clear weekly summaries so you can see your effort, not just the end
            result.
          </p>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>✔ Weekly workout count and active minutes</li>
            <li>✔ Visual progress bars for your goals</li>
            <li>✔ Recommended classes based on your level</li>
            <li>✔ Challenge participation and streak tracking</li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <h2 className="text-sm font-semibold mb-3">This Week at a Glance</h2>

          {[
            { label: "Workouts Completed", value: "7 / 10", width: "70%" },
            { label: "Minutes Active", value: "150 / 300", width: "50%" },
            { label: "Community Challenges", value: "9 / 10", width: "90%" },
          ].map((item) => (
            <div key={item.label} className="mb-3 text-xs">
              <div className="flex items-center justify-between mb-1">
                <span>{item.label}</span>
                <span className="text-slate-300">{item.value}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-green-400 to-sky-400"
                  style={{ width: item.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
