export default function Problem() {
  const problems = [
    {
      icon: '💰',
      title: 'Expensive Testing',
      stat: '₹50-150',
      description: 'Lab-based Hb tests are unaffordable for many rural families',
      accent: 'text-amber-500'
    },
    {
      icon: '🏥',
      title: 'Limited Access',
      stat: '80%+',
      description: 'Villages lack nearby health facilities with testing equipment',
      accent: 'text-rose-500'
    },
    {
      icon: '⏰',
      title: 'Delayed Detection',
      stat: '2-3 weeks',
      description: 'Wait time for results leads to severe complications',
      accent: 'text-sky-500'
    },
    {
      icon: '📊',
      title: 'High Prevalence',
      stat: '58%',
      description: 'Women in Assam suffer from anemia (NFHS-5 data)',
      accent: 'text-emerald-500'
    }
  ]

  return (
    // Added dark:bg-slate-900
    <section id="problem" className="py-24 bg-slate-50 bg-linear-to-b dark:from-[#0a0f1d] dark:to-[#0a0f1d] relative overflow-hidden transition-colors duration-300">
      
      {/* Adjusted Opacity for Dark Mode decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/50 dark:bg-primary-900/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100/40 dark:bg-accent-900/10 blur-[100px] rounded-full -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Badge styling for dark mode */}
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest">The Problem</span>
          </div>
          
          {/* Heading - Added dark:text-white */}
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
            Anemia is a <span className="text-red-600">Silent Epidemic</span>
          </h2>
          
          {/* Subtext - Added dark:text-slate-400 */}
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-6 leading-relaxed">
            Despite being preventable, millions of women in rural Assam suffer due to systemic barriers that our smartphone technology eliminates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <div 
              key={index} 
              // Changed bg-white to dark:bg-slate-800 and border to dark:border-slate-700
              className="group relative bg-white dark:bg-slate-800/50 dark:backdrop-blur border border-slate-200 dark:border-slate-700 p-8 rounded-3xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-2"
            >
              {/* Icon container dark mode */}
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              {/* Title & Description dark mode */}
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">{item.title}</h3>
              <div className={`text-4xl font-black mb-4 ${item.accent}`}>{item.stat}</div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
              
              {/* Decorative Line dark mode */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-700 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

