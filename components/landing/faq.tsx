"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is anemia?",
        answer:
            "Anemia means the blood is weak because hemoglobin is low, so the body does not get enough oxygen and you feel weak and tired.",
    },
    {
        question: "Why does anemia happen?",
        answer:
            "Common causes are not eating enough iron-rich food, blood loss (heavy periods, worms, injuries), poor nutrient absorption, or frequent illness.",
    },
    {
        question: "Who can get anemia?",
        answer: "Anyone, but it is more common in girls and women, pregnant women, children, and people who skip meals or eat less nutritious food.",
    },
    {
        question: "What are the common signs of anemia?",
        answer:
            "Tiredness, dizziness, shortness of breath while walking, headache, fast heartbeat, and pale lips, nails, or inner eyelids.",
    },
    {
        question: "Can someone have anemia without feeling sick?",
        answer: "Yes. Many people have anemia without clear symptoms early on, so screening is important even if you feel okay.",
    },
    {
        question: "How can I know if I have anemia?",
        answer: "A blood test at a health center confirms anemia. This app only checks risk, not diagnosis.",
    },
    {
        question: "Why are girls and women more affected?",
        answer:
            "Teenage growth, blood loss during periods, increased iron need in pregnancy, and often eating last or eating less increase risk.",
    },
    {
        question: "Can heavy periods cause anemia?",
        answer: "Yes. Heavy or prolonged bleeding causes iron loss; without replacement, anemia can occur.",
    },
    {
        question: "Can anemia affect daily life?",
        answer: "Yes. It reduces energy, makes studying and working difficult, increases illness, and slows growth in children.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
           className="relative isolate overflow-hidden px-4 py-16 text-slate-900 sm:px-6 lg:px-8 scroll-mt-24 
 
    bg-linear-to-b from-white via-slate-50 to-slate-100 
    /* Dark Mode - notice we 'transparentize' the via stop */
    dark:from-[#0a0f1d] dark:via-[#0a0f1d] dark:to-[#0a0f1d] 
    transition-colors duration-300"
>
            {/* Background Accents - adjusted for dark mode */}
            <div className="absolute inset-0 opacity-60 pointer-events-none">
                <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl" />
                <div className="absolute -bottom-32 right-12 h-72 w-72 rounded-full bg-primary-100 dark:bg-primary-900/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-5xl space-y-8">
                <div className="text-center space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">FAQs</p>
                    <h2 className="text-3xl font-semibold sm:text-4xl dark:text-white">Frequently Asked Questions</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Screening-focused answers for quick field guidance.</p>
                </div>

                <div className="space-y-3">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={item.question}
                                // Card styling for dark mode
                                className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-[0_18px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-300"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:px-6"
                                >
                                    <span className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.question}</span>
                                    <ChevronDown
                                        className={`h-5 w-5 text-primary-600 dark:text-primary-400 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                                        aria-hidden="true"
                                    />
                                </button>
                                {isOpen && (
                                    <div className="border-t border-slate-200 dark:border-slate-800 px-5 pb-5 pt-3 text-sm text-slate-700 dark:text-slate-300 sm:px-6">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}