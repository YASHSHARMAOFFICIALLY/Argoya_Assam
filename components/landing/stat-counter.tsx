"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: string;   // e.g. "58%", "₹0", "5 min"
  label: string;
  color: string;
  delay?: number;
}

function parseValue(raw: string): { prefix: string; number: number; suffix: string } {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw };
  return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] };
}

export default function StatCounter({ value, label, color, delay = 0 }: StatCounterProps) {
  const { prefix, number, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1600;
          const steps = 60;
          let current = 0;
          let step = 0;

          timeoutId = setTimeout(() => {
            intervalId = setInterval(() => {
              step++;
              // ease-out cubic: slow down near the end
              const progress = step / steps;
              const eased = 1 - Math.pow(1 - progress, 3);
              current = number * eased;
              setCount(Math.round(current * 10) / 10);
              if (step >= steps) {
                setCount(number);
                if (intervalId) clearInterval(intervalId);
              }
            }, duration / steps);
          }, delay * 1000);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [number, delay]);

  const display = number === 0 ? "0" : Number.isInteger(number) ? count.toFixed(0) : count.toFixed(1);

  return (
    <div ref={ref} className="text-center group animate-count-up" style={{ animationDelay: `${delay}s` }}>
      <div className={`text-3xl md:text-4xl font-bold ${color} transition-transform duration-300 group-hover:scale-110 tabular-nums`}>
        {prefix}{display}{suffix}
      </div>
      <div className="text-xs md:text-sm mt-1 whitespace-pre-line">
        {label}
      </div>
    </div>
  );
}
