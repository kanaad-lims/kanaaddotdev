import { motion } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { Trophy } from "lucide-react";

export function Achievements() {
  if (!site.achievements || site.achievements.length === 0) return null;

  return (
    <div id="achievements">
      <SectionHeader
        title="Achievements"
        aside={
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--soft)]">
            <Trophy className="size-3.5" />
            <span className="hidden sm:inline">{site.achievements.length} Highlights</span>
          </span>
        }
      />
      <Shell>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-6 sm:px-8">
          {site.achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
              className="group flex flex-col rounded-xl border border-[var(--line)] bg-[var(--card)] p-5 transition-all duration-200 hover:border-[var(--soft)] shadow-xs"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[15.5px] font-semibold text-[var(--fg)] tracking-wide leading-snug">
                  {item.title}
                </h3>
                <span className="font-mono text-[11px] text-[var(--soft)] shrink-0 mt-0.5">
                  {item.year}
                </span>
              </div>

              <span className="mt-2 inline-flex self-start items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                {item.category}
              </span>

              <ul className="mt-3.5 space-y-1.5">
                {item.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-[13px] leading-relaxed text-[var(--muted)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-none mt-[7px]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Shell>
    </div>
  );
}

export default Achievements;
