export function ContactPage() {
  return (
    <section className="bg-slate-950 text-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold mb-2">Contact & Support</h1>
          <p className="text-sm text-slate-300 mb-3">
            Have questions about accessibility, pricing or getting started with Fit Community?
            Send us a message and we’ll get back as soon as we can.
          </p>
          <ul className="text-sm text-slate-300 space-y-1 mb-4">
            <li>Email: support@fitcommunity.co.uk</li>
            <li>Instagram: @fitcommunity_online</li>
            <li>Based in the UK · Online only</li>
          </ul>
          <div className="text-xs text-slate-400">
            <h2 className="font-semibold mb-1">Privacy & Data</h2>
            <p>
              We only collect the information needed to reply to you and improve our services.
              Data is stored securely and never sold to third parties.
            </p>
          </div>
        </div>

        <form className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 text-xs">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 text-xs"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 text-xs"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 text-xs"
              placeholder="How can we help?"
              required
            />
          </div>
          <label className="flex items-center gap-2 text-[11px] text-slate-300">
            <input type="checkbox" required />
            I agree to the Fit Community privacy policy.
          </label>
          <button
            type="submit"
            className="w-full px-3 py-2 rounded-full bg-gradient-to-r from-green-400 to-sky-400 text-slate-950 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
