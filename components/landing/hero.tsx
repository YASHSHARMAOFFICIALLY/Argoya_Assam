

export  default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 bg-linear-to-b dark:from-[#0a0f1d] dark:to-[#0a0f1d]">

        
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-neutral-900 space-y-8 animate-fade-in">
           

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight dark:text-white">
              Screening <span className="text-red-600">Endemic Diseases</span><br />
              Without Lab Tests
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-neutral-900 leading-relaxed max-w-2xl dark:text-white">
              Empowering ASHA workers in rural Assam with a <strong>smartphone-based screening tool</strong> that detects anemia risk in <strong>5 minutes</strong> — completely free, 100% offline.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 py-4 dark:text-white">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-300">58%</div>
                <div className="text-xs md:text-sm text-neutral-900 mt-1 dark:text-white">Women Anemic<br/>in Assam</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-300">₹0</div>
                <div className="text-xs md:text-sm text-neutral-900 mt-1 dark:text-white">Cost Per<br/>Screening</div>
              </div>
              <div className="text-center dark:text-white">
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">5 min</div>
                <div className="text-xs md:text-sm text-neutral-900 mt-1 dark:text-white">Assessment<br/>Time</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/screen"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-[0_18px_45px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.4)] transform hover:-translate-y-1 text-center"
              >
                Start Screening Now →
              </a>
              
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-neutral-900 dark:text-white">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-neutral-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>WHO Guidelines</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>NFHS-5 Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Assam-First</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-slide-up hidden lg:block">
            {/* Mockup Container */}
            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-80 h-150 bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-8 ring-white/10">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* App Screenshot Placeholder */}
                  <div className="bg-linear-to-br from-gray-50 to-gray-100 h-full p-6 flex flex-col">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-3xl">🩺</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Anemia Screening</h3>
                      <p className="text-sm text-gray-600">Patient Assessment</p>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="bg-gray-200 rounded-full h-2 mb-8">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    
                    {/* Question Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
                      <p className="text-sm text-gray-600 mb-2">Question 8 of 15</p>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        How many days did you eat green vegetables last week?
                      </h4>
                      <div className="grid grid-cols-4 gap-2">
                        {[0,1,2,3,4,5,6,7].map(num => (
                          <button 
                            key={num}
                            className={`py-3 px-4 rounded-lg font-semibold ${
                              num === 10
                                ? 'bg-primary-600 text-white' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Risk Indicator */}
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 mt-auto">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-2xl">⚠️</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-yellow-900">Medium Risk</p>
                          <p className="text-xs text-yellow-700">Score: 58/100</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-16 top-20 bg-white rounded-xl shadow-xl p-4 w-48 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">✅</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Screenings Today</p>
                    <p className="text-xl font-bold text-gray-900">47</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-16 bottom-32 bg-white rounded-xl shadow-xl p-4 w-48 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏥</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Nearest PHC</p>
                    <p className="text-sm font-bold text-gray-900">8.2 km</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}

