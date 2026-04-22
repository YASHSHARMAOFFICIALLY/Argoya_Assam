export default function HowItWorksPage() {
  const steps = [
    {
      icon: '📸',
      step: '01',
      title: 'Capture a Photo',
      description:
        'The user opens the app and takes a clear image of the inner eyelid using a smartphone camera.',
      accent: 'from-rose-500 to-pink-500'
    },
    {
      icon: '☁️',
      step: '02',
      title: 'Upload Securely',
      description:
        'The image is securely uploaded to the platform for processing and analysis.',
      accent: 'from-violet-500 to-purple-500'
    },
    {
      icon: '🤖',
      step: '03',
      title: 'AI Detects Signs',
      description:
        'Our trained AI model analyzes color patterns and visible symptoms linked to anemia.',
      accent: 'from-sky-500 to-cyan-500'
    },
    {
      icon: '📊',
      step: '04',
      title: 'Instant Results',
      description:
        'The platform generates an estimated hemoglobin level and anemia risk in seconds.',
      accent: 'from-amber-500 to-orange-500'
    }
  ]

  const benefits = [
    'No expensive lab equipment required',
    'Works with any smartphone camera',
    'Quick results within seconds',
    'Useful for rural and low-resource areas',
    'Encourages early medical attention',
    'Affordable and accessible for everyone'
  ]

  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"></div>

        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary-200/40 dark:bg-primary-900/20 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-cyan-200/30 dark:bg-cyan-900/20 blur-[100px] rounded-full -z-10"></div>

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary-200 dark:border-primary-800 bg-primary-100 dark:bg-primary-900/30 mb-6">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">
                How It Works
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Detect Anemia Using Only a <span className="text-primary-600">Smartphone</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Our platform makes anemia screening faster, more affordable, and easier to access for women in rural communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-5 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`min-w-[64px] h-16 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>

                  <div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500">
                      Step {item.step}
                    </span>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-200/40 dark:bg-primary-900/20 blur-3xl rounded-full"></div>

              <div className="relative">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center text-4xl shadow-xl mb-6">
                  📱
                </div>

                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Why This Matters
                </h2>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Traditional anemia testing can be expensive, slow, and difficult to access in rural areas. Our solution removes those barriers and helps people take action sooner.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 text-sm font-bold mt-0.5">
                        ✓
                      </div>

                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

