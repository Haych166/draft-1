export function HomePage({ onNavigate }) {
  return (
    <section className="bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Get Active Together.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mb-4">
            Fit Community is a digital fitness platform that connects people
            through affordable online workouts, shared goals and a supportive
            community – especially for those who feel unmotivated or can’t
            afford expensive gyms.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => onNavigate("pricing")}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-sky-400 text-slate-950 text-sm font-semibold"
            >
              Start Free Today
            </button>
            <button
              onClick={() => onNavigate("courses")}
              className="px-4 py-2 rounded-full border border-slate-600 text-sm"
            >
              View Courses
            </button>
          </div>
          <p className="text-xs text-slate-400">
            5,000+ workouts completed by users just like you.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-4 shadow-xl">
          <h2 className="text-sm font-semibold mb-1">Next Live Class</h2>
          <p className="text-sm font-semibold">Beginner Bodyweight Session</p>
          <p className="text-xs text-slate-400 mb-3">Today · 6:30 PM · Online</p>
          <ul className="text-xs text-slate-300 space-y-1 mb-4">
            <li>✔ No equipment needed</li>
            <li>✔ 30 minutes, low impact</li>
            <li>✔ Trainer guidance + live chat</li>
          </ul>
          <button
            onClick={() => onNavigate("courses")}
            className="w-full px-3 py-2 rounded-full bg-sky-400 text-slate-950 text-sm font-semibold"
          >
            Reserve Your Spot
          </button>
        </div>
      </div>
    </section>
  );
}
