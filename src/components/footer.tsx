import { useEffect, useState } from "react";
import { Shell, GapBand } from "@/components/Layout";
import { site } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { text } from "framer-motion/client";

const QUOTES = [
  {
    text: "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
  },
  {
    text: "The biggest risk is not taking any risk.",
    author: "Mark Zuckerberg",
  },
  {
    text: "The people who are crazy enough to think they can change the world are the ones who do.",
    author: "Steve Jobs",
  },
  {
    text: "Keep pushing the limits!",
    author: "Max Verstappen",
  },
  {
    text: "It's not a question of IF, but a question of WHEN.",
    author: "Personal",
  },
  {
    text: "To fulfill your destiny, you must let go the illusion of control.",
    author: "Master Oogaway"
  },
  {
    text: "Outside the will of God, there is nothing I want. Inside the will of God, there is nothing I fear",
    author: "A. W. Tozer"
  }
];

export function Footer() {
  const [localTime, setLocalTime] = useState<string>("");
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full">
      <GapBand h="h-12" />

      {/* Quote Band */}
      <GapBand className="border-t border-[var(--line)]" />
      <div className="w-full border-y border-[var(--line)]">
        <Shell className="px-8 py-12 text-center min-h-[160px] flex flex-col items-center justify-center bg-[var(--bg)] select-none">
          <div className="w-full max-w-[580px] min-h-[140px] flex flex-col items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <span className="font-serif text-4xl text-[var(--soft)] leading-none">&ldquo;</span>
                <p className="font-serif mx-auto -mt-2 max-w-md text-[20px] sm:text-[22px] italic leading-snug text-[var(--fg)]">
                  {QUOTES[quoteIndex].text}
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--soft)] font-bold">
                  — {QUOTES[quoteIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Shell>
      </div>

      {/* Footer Bottom */}
      <GapBand h="h-5" />
      <div className="w-full border-t border-[var(--line)]">
        <Shell className="border-b-0 px-6 py-8 text-center sm:px-8">
          {/* <p className="text-[14.5px] text-[var(--muted)]">
            Designed &amp; Developed by <span className="font-semibold text-[var(--fg)]">{site.name}</span>
          </p> */}
          <p className="mt-1.5 font-mono text-[12px] text-[var(--soft)]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="mt-2.5 flex items-center justify-center gap-2 font-mono text-[12px] text-[var(--soft)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {site.location} · {localTime || "IST"}
          </p>
        </Shell>
      </div>
    </footer>
  );
}
