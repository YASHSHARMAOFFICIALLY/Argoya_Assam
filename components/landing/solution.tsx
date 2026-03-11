export default function Solution() {
  return (
    /* Changed to match your Hero/Problem dark theme: dark:bg-[#0a0f1d] */
    <section id="solution" className="py-20 md:py-16 bg-gradient-to-b from-white to-gray-50/50 dark:from-[#0a0f1d] dark:to-[#0a0f1d] overflow-hidden transition-colors duration-300" >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── LEFT: Visual Mockup ─────────────────────────────────────── */}
          <div className="relative order-2 lg:order-1">

            {/* Subtle background accents - dimmed for dark mode */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-100/40 dark:bg-primary-900/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute -bottom-16 -right-12 w-72 h-72 bg-accent-100/30 dark:bg-accent-900/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="relative z-10 max-w-md mx-auto lg:mx-0 lg:max-w-none">
              {/* Main Phone-like Card - Dark variant added */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-100/80 dark:border-slate-800 shadow-xl shadow-gray-200/40 dark:shadow-none overflow-hidden transition-all duration-500 hover:shadow-2xl">

                {/* Notch simulation */}
                <div className="h-7 bg-gray-900/5 dark:bg-black/20 flex items-center justify-center">
                  <div className="w-24 h-1 bg-gray-400/40 rounded-full" />
                </div>

                {/* App Content */}
                <div className="p-6 sm:p-7">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-700/30 text-white text-2xl">
                        🩺
                      </div>
                      <div>
                        <h4 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                          AnemiaScreen
                        </h4>
                        <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mt-0.5">
                          Assam Edition
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      LIVE
                    </span>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1 mb-7">
                    {[
                      { icon: "📝", title: "10 Smart Questions", desc: "WHO-aligned clinical flow" },
                      { icon: "🧠", title: "Instant AI Risk Score", desc: "0–100 probability estimate" },
                      { icon: "📶", title: "Printable Result ", desc: "Store Result for Further Assignment" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/70 dark:bg-slate-800/50 hover:bg-primary-50/60 dark:hover:bg-primary-900/30 transition-colors duration-200 border border-gray-100/50 dark:border-slate-700/50"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center text-xl flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-slate-200">{item.title}</p>
                          <p className="text-xs text-gray-600 dark:text-slate-400 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Risk Assessment */}
                  <div className="space-y-5 pt-5 border-t border-gray-100 dark:border-slate-800">
                    <div>
                      <div className="flex justify-between items-baseline mb-2.5">
                        <p className="text-base font-bold text-gray-900 dark:text-white">Current Risk</p>
                        <span className="text-2xl font-black text-amber-600">58%</span>
                      </div>
                      <div className="h-3.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                        <div className="bg-emerald-500 w-[30%]" />
                        <div className="bg-amber-400 w-[28%]" />
                        <div className="bg-rose-500 w-[42%]" />
                      </div>
                    </div>

                    {/* Recommendation Card */}
                    <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/50 dark:from-amber-900/20 dark:via-slate-900 dark:to-amber-900/10 p-5 rounded-2xl border border-amber-100/80 dark:border-amber-900/30">
                      <p className="text-xs font-bold uppercase text-amber-800 dark:text-amber-500 tracking-wide mb-2">
                        Immediate Suggestion
                      </p>
                      <p className="text-sm text-gray-800 dark:text-slate-300 leading-relaxed">
                        Increase intake of iron-rich local greens like{" "}
                        <span className="font-semibold text-primary-700 dark:text-primary-400">Kolmou</span>, palak...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Text Content ─────────────────────────────────────── */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-primary-100/60 dark:bg-primary-900/30 border border-neutral-200 dark:border-primary-800 text-xl font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-4 lg:-ml-12">
              Our Solution 
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-3xl font-black text-gray-900 dark:text-white leading-tight mb-6">
              Zero-cost, high-impact anemia
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 bg-clip-text text-transparent">
                screening in your pocket
              </span>
            </h2>

            <p className="text-lg text-gray-700 dark:text-slate-400 leading-relaxed mb-5 max-w-2xl mx-auto lg:mx-0 font-medium">
              Replace expensive diagnostics with a clinically-validated tool designed for ASHA workers.
            </p>

            {/* Value Highlights - Dark Mode compatible cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12 lg:mb-20">
              {[
                { title: "Evidence-based logic", desc: "WHO-aligned symptom scoring → reliable 0–100 risk." },
                { title: "Assamese-first experience", desc: "Voice prompts & guidance in local dialect." },
                { title: "Village-level insights", desc: "Anonymous heatmaps & trends without compromising privacy." }
              ].map((val, idx) => (
                <div key={idx} className={`p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800 shadow-sm transition-shadow ${idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{val.title}</h4>
                  <p className="text-gray-600 dark:text-slate-400">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}