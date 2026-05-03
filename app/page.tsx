export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase border border-[#30363d]">
          YouTube Growth Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automated A/B Testing for<br />
          <span className="text-[#58a6ff]">YouTube Thumbnails</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Rotate thumbnails automatically, track real CTR data, and let statistics pick your winner — no guesswork, no manual swapping.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Testing for $16/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No contracts.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔄</div>
            <h3 className="font-semibold text-white mb-1">Auto Rotation</h3>
            <p className="text-sm text-[#8b949e]">Cron jobs swap thumbnails on a schedule so every variant gets equal exposure.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">CTR Dashboard</h3>
            <p className="text-sm text-[#8b949e]">Live charts show impressions, clicks, and CTR per thumbnail variant in real time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🏆</div>
            <h3 className="font-semibold text-white mb-1">Statistical Winner</h3>
            <p className="text-sm text-[#8b949e]">Automatically declares a winner once results reach 95% statistical significance.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$16</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited A/B tests</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> YouTube Data API integration</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Automated thumbnail rotation</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Statistical significance engine</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> CTR performance dashboard</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does thumbnail rotation work?</h3>
            <p className="text-sm text-[#8b949e]">Our backend cron jobs use the YouTube Data API to swap your video thumbnail on a set schedule, giving each variant equal airtime to collect unbiased CTR data.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">When is a winner declared?</h3>
            <p className="text-sm text-[#8b949e]">A winner is automatically selected when one variant reaches 95% statistical significance over the others, ensuring your decision is backed by real data.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need a YouTube API key?</h3>
            <p className="text-sm text-[#8b949e]">Yes. You connect your YouTube channel via OAuth during onboarding. We guide you through the setup — it takes under two minutes.</p>
          </div>
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} ThumbnailTest. All rights reserved.
      </footer>
    </main>
  );
}
