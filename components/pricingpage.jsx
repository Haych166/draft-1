export function PricingPage() {
  return (
    <section className="bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-2">Pricing Plans</h1>
        <p className="text-sm text-slate-300 mb-6">
          Simple, transparent pricing designed to remove financial barriers and keep Fit
          Community accessible.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col">
            <h2 className="font-semibold text-sm mb-1">Free</h2>
            <p className="text-lg font-bold mb-2">
              £0 <span className="text-xs text-slate-400">/ month</span>
            </p>
            <ul className="text-xs text-slate-300 space-y-1 mb-4 flex-1">
              <li>• Community forum access</li>
              <li>• Limited on-demand classes</li>
              <li>• Access to some live events</li>
            </ul>
            <button className="w-full text-xs px-3 py-2 rounded-full border border-slate-600">
              Start for Free
            </button>
          </div>

          <div className="bg-slate-900 border border-sky-500 rounded-xl p-4 shadow-xl relative flex flex-col">
            <span className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-sky-400 text-slate-950">
              Most Popular
            </span>
            <h2 className="font-semibold text-sm mb-1">Premium</h2>
            <p className="text-lg font-bold mb-2">
              £5.99 <span className="text-xs text-slate-400">/ month</span>
            </p>
            <ul className="text-xs text-slate-300 space-y-1 mb-4 flex-1">
              <li>• Unlimited on-demand classes</li>
              <li>• Full access to live sessions</li>
              <li>• Progress tracking dashboard</li>
              <li>• Basic nutrition guidance</li>
            </ul>
            <button className="w-full text-xs px-3 py-2 rounded-full bg-gradient-to-r from-green-400 to-sky-400 text-slate-950 font-semibold">
              Join Premium
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col">
            <h2 className="font-semibold text-sm mb-1">Pro</h2>
            <p className="text-lg font-bold mb-2">
              £8.99 <span className="text-xs text-slate-400">/ month</span>
            </p>
            <ul className="text-xs text-slate-300 space-y-1 mb-4 flex-1">
              <li>• All Premium features</li>
              <li>• Exclusive workshops & events</li>
              <li>• Priority trainer Q&A</li>
              <li>• Advanced analytics and reports</li>
            </ul>
            <button className="w-full text-xs px-3 py-2 rounded-full border border-slate-600">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
