export function BlogPage() {
  return (
    <section className="bg-slate-950 text-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-2">Blog & Insights</h1>
        <p className="text-sm text-slate-300 mb-6">
          Articles that support motivation, mindset and realistic fitness habits for people
          balancing work, study and life.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-[11px] mb-1 px-2 py-1 inline-block rounded-full bg-blue-500/10 text-blue-300">
              Mindset
            </p>
            <h2 className="text-sm font-semibold mb-1">
              Staying Motivated on Low-Energy Days
            </h2>
            <p className="text-xs text-slate-300">
              Small, realistic strategies to move your body even when motivation feels low.
            </p>
          </article>

          <article className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-[11px] mb-1 px-2 py-1 inline-block rounded-full bg-green-500/10 text-green-300">
              Beginner Tips
            </p>
            <h2 className="text-sm font-semibold mb-1">
              Starting Fitness with Zero Confidence
            </h2>
            <p className="text-xs text-slate-300">
              Real stories from members who began from scratch and slowly built new habits.
            </p>
          </article>

          <article className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-[11px] mb-1 px-2 py-1 inline-block rounded-full bg-purple-500/10 text-purple-300">
              Community
            </p>
            <h2 className="text-sm font-semibold mb-1">
              Why Working Out Together Feels Easier
            </h2>
            <p className="text-xs text-slate-300">
              How social accountability and online community challenges support long-term change.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
