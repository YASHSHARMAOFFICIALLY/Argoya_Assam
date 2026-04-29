"use client";

import StatCounter from "./stat-counter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 bg-linear-to-b dark:from-[#0a0f1d] dark:to-[#0a0f1d]">

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-300 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left Column ── */}
          <div className="text-neutral-900 space-y-8">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm font-semibold animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live in Assam · Free · Offline-Ready
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight dark:text-white animate-fade-in"
              style={{ animationDelay: "0.25s" }}
            >
              Screening{" "}
              <span className="text-red-500 relative inline-block">
                Endemic Diseases
                {/* underline shimmer */}
                <span className="absolute bottom-0 left-0 w-full h-[3px] rounded-full bg-red-400 animate-shimmer" />
              </span>
              <br />
              Without Lab Tests
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl text-neutral-900 leading-relaxed max-w-2xl dark:text-white animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Empowering ASHA workers in rural Assam with a{" "}
              <strong>smartphone-based screening tool</strong> that detects anemia risk in{" "}
              <strong>5 minutes</strong> — completely free, 100% offline.
            </p>

            {/* Stats Bar */}
            <div
              className="grid grid-cols-3 gap-4 py-4 dark:text-white animate-fade-in"
              style={{ animationDelay: "0.55s" }}
            >
              <StatCounter value="58%" label={"Women Anemic\nin Assam"} color="text-red-400" delay={0.6} />
              <StatCounter value="₹0"  label={"Cost Per\nScreening"}  color="text-green-400" delay={0.72} />
              <StatCounter value="5 min" label={"Assessment\nTime"}   color="text-blue-300" delay={0.84} />
            </div>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="/screen"
                className="relative overflow-hidden bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-[0_18px_45px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.4)] transform hover:-translate-y-1 text-center group"
              >
                <span className="relative z-10">Start Screening Now →</span>
                {/* ripple shimmer on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex flex-wrap items-center gap-6 pt-4 text-sm text-neutral-900 dark:text-white animate-fade-in"
              style={{ animationDelay: "0.95s" }}
            >
              {["WHO Guidelines", "NFHS-5 Data", "Assam-First"].map((label, i) => (
                <div key={i} className="flex items-center space-x-2 group">
                  <svg
                    className="w-5 h-5 text-green-400 transition-transform duration-200 group-hover:scale-125"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column — Phone Mockup ── */}
          <div className="relative hidden lg:flex justify-center items-center animate-slide-up" style={{ animationDelay: "0.3s" }}>

            {/* Glow ring behind phone */}
            <div className="absolute w-72 h-72 rounded-full bg-red-500/20 dark:bg-cyan-400/30 blur-3xl animate-pulse-ring" />
            <div className="absolute w-72 h-72 rounded-full border border-red-400/20 dark:border-cyan-400/40 animate-pulse-ring" style={{ animationDelay: "0.9s" }} />

            {/* Outer wrapper — wide enough to hold phone + side cards with gap */}
            <div className="relative w-[680px] flex justify-center">

              {/* Phone frame — standard size w-64 = 256px, aspect ~19.5:9 ≈ 554px tall */}
              <div className="relative w-64 bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl ring-4 ring-white/10 animate-phone-glow z-10">

                {/* Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-full z-20 flex items-center justify-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                </div>

                {/* Screen — fixed height matching standard phone ratio */}
                <div className="w-full bg-white rounded-[2rem] overflow-hidden" style={{ height: "520px" }}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex flex-col h-full">

                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-3 px-1 animate-fade-in" style={{ animationDelay: "0.55s" }}>
                      <span className="text-[9px] text-gray-400 font-semibold">9:41 AM</span>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-0.5 items-end">
                          {[2,3,4,5].map(h => <div key={h} className="w-0.5 bg-gray-400 rounded-sm" style={{ height: `${h*1.5}px` }} />)}
                        </div>
                        <span className="text-[9px] text-gray-400">🔋</span>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="text-center mb-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                      <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-1.5 shadow-sm animate-float-slow">
                        <span className="text-xl">🩺</span>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900">Anemia Screening</h3>
                      <p className="text-[10px] text-gray-500">Patient Assessment</p>
                    </div>

                    {/* Progress bar */}
                    <div className="bg-gray-200 rounded-full h-1.5 mb-3 overflow-hidden">
                      <div className="bg-red-500 h-1.5 rounded-full animate-progress" />
                    </div>

                    {/* Question card */}
                    <div className="bg-white rounded-xl shadow-md p-3 mb-2 animate-card-pop" style={{ animationDelay: "0.8s" }}>
                      <p className="text-[9px] text-gray-400 mb-1 font-medium">Question 8 of 15</p>
                      <h4 className="text-[11px] font-semibold text-gray-900 mb-2 leading-snug">
                        How many days did you eat green vegetables last week?
                      </h4>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((num) => (
                          <button
                            key={num}
                            onClick={(e) => {
                              const el = e.currentTarget;
                              el.classList.add('animate-pulse');
                              setTimeout(() => el.classList.remove('animate-pulse'), 600);
                            }}
                            className={`py-1.5 rounded-lg font-semibold text-[11px] transition-all duration-200 hover:scale-110 active:scale-95 ${
                              num === 3
                                ? "bg-red-500 text-white shadow-sm"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Back / Next buttons */}
                    <div className="flex gap-2 mb-2 animate-card-pop" style={{ animationDelay: "1.05s" }}>
                      <button
                        onClick={(e) => {
                          const el = e.currentTarget;
                          el.classList.add('bg-blue-500', 'text-white');
                          setTimeout(() => el.classList.remove('bg-blue-500', 'text-white'), 400);
                        }}
                        className="flex-1 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-[10px] font-semibold hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 active:scale-95"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={(e) => {
                          const el = e.currentTarget;
                          el.classList.add('bg-green-500');
                          setTimeout(() => el.classList.remove('bg-green-500'), 400);
                        }}
                        className="flex-1 py-1.5 bg-red-500 text-white rounded-lg text-[10px] font-semibold hover:bg-red-600 transition-all duration-200 active:scale-95 shadow-sm"
                      >
                        Next →
                      </button>
                    </div>

                    {/* Risk indicator */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mt-auto animate-card-pop" style={{ animationDelay: "1s" }}>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm animate-float" style={{ animationDelay: "0.5s" }}>
                          <span className="text-base">⚠️</span>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-yellow-900">Medium Risk</p>
                          <p className="text-[9px] text-yellow-600">Score: 58/100</p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          const el = e.currentTarget;
                          el.textContent = '📍 Locating...';
                          setTimeout(() => {
                            window.location.href = '/hospitals';
                          }, 800);
                        }}
                        className="w-full py-1.5 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-lg text-[10px] font-bold transition-all duration-200 hover:scale-105 active:scale-95"
                      >
                        🏥 Find Nearest Hospital
                      </button>
                    </div>

                  </div>
                </div>
              </div>

              {/* Floating card — Screenings Today — left side, clear of phone */}
              <div
                className="absolute left-0 top-20 bg-white rounded-xl shadow-2xl p-4 w-44 animate-card-pop animate-float z-20"
                style={{ animationDelay: "1.1s" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">✅</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Screenings Today</p>
                    <p className="text-xl font-bold text-gray-900">47</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] text-green-500 font-semibold">LIVE</span>
                </div>
              </div>

              {/* Floating card — Nearest PHC — right side, clear of phone */}
              <div
                className="absolute right-0 bottom-36 bg-white rounded-xl shadow-2xl p-4 w-44 animate-card-pop animate-float z-20"
                style={{ animationDelay: "1.3s" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏥</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Nearest PHC</p>
                    <p className="text-sm font-bold text-gray-900">8.2 km</p>
                  </div>
                </div>
              </div>

              {/* Floating badge — Offline — right side top */}
              <div
                className="absolute top-10 bg-gray-900 text-white rounded-full px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 shadow-lg animate-card-pop animate-float z-20"
                style={{ animationDelay: "1.5s", right: "60px" }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                100% Offline
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
