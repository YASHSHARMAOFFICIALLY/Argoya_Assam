"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, HeartPulse, ShieldCheck, Users } from "lucide-react";

const faqs = [
  {
    question: "What is anemia?",
    answer:
      "Anemia happens when the body does not have enough healthy red blood cells or hemoglobin. This makes it harder for oxygen to reach the body's organs and muscles, causing weakness and tiredness.",
  },
  {
    question: "Why does anemia happen?",
    answer:
      "The most common causes are low iron intake, heavy periods, blood loss, poor nutrition, worms, pregnancy, or the body not absorbing nutrients properly.",
  },
  {
    question: "Who is most at risk of anemia?",
    answer:
      "Girls, women, pregnant women, children, and people with poor diets are more likely to develop anemia because their bodies need more iron and nutrients.",
  },
  {
    question: "What are the common symptoms of anemia?",
    answer:
      "Common symptoms include tiredness, pale skin, dizziness, weakness, headaches, shortness of breath, and a fast heartbeat.",
  },
  {
    question: "Can anemia be serious if ignored?",
    answer:
      "Yes. Untreated anemia can affect school, work, pregnancy, child growth, and overall health. Severe anemia may lead to dangerous complications.",
  },
  {
    question: "How can I know if I have anemia?",
    answer:
      "A proper blood test is the best way to confirm anemia. This app only helps detect possible risk and should not replace medical advice.",
  },
  {
    question: "Can anemia be prevented?",
    answer:
      "Yes. Eating iron-rich foods, taking supplements if advised, treating infections, and getting regular checkups can help prevent anemia.",
  },
  {
    question: "What foods help improve anemia?",
    answer:
      "Iron-rich foods like spinach, lentils, eggs, fish, meat, jaggery, beans, and green vegetables can help improve iron levels.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#0a0f1d] dark:via-[#0d1324] dark:to-[#0a0f1d] transition-colors duration-300"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-10 h-72 w-72 rounded-full bg-primary-100/70 dark:bg-primary-900/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100/60 dark:bg-cyan-900/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 dark:bg-rose-900/20">
              <HeartPulse className="h-6 w-6 text-rose-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Health Awareness
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Learn about symptoms, prevention, nutrition, and early warning signs of anemia.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/20">
              <ShieldCheck className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Trusted Guidance
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Understand when to seek medical help and why early screening matters.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 dark:bg-sky-900/20">
              <Users className="h-6 w-6 text-sky-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Built for Everyone
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Helpful for patients, ASHA workers, parents, teachers, and first-time users.
            </p>
          </div>
        </div>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="sticky top-24 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 dark:border-primary-800 bg-primary-100 dark:bg-primary-900/20 px-4 py-1.5">
              <HelpCircle className="h-4 w-4 text-primary-600 dark:text-primary-400" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary-700 dark:text-primary-300">
                FAQ
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
                Frequently Asked Questions
              </h2>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="rounded-full bg-primary-100 dark:bg-primary-900/30 px-3 py-1 text-xs font-semibold text-primary-700 dark:text-primary-300">
                  Symptoms
                </span>
                <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  Prevention
                </span>
                <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                  Nutrition
                </span>
              </div>

              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Quick answers to common questions about anemia, symptoms, prevention, and how the screening platform works.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-2xl">
                  ❤️
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Early screening saves lives
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Detecting anemia early can help prevent serious health problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}                  className={`group overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] ${
                    isOpen
                      ? "border-primary-300 dark:border-primary-700 bg-white dark:bg-slate-900 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                      : "border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/50 hover:border-primary-200 dark:hover:border-primary-800"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <span className="text-base font-semibold leading-relaxed text-slate-900 dark:text-slate-100">
                        {item.question}
                      </span>
                    </div>

                    <ChevronDown
                      className={`h-5 w-5 min-w-[20px] text-primary-600 dark:text-primary-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-200 dark:border-slate-800 px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

