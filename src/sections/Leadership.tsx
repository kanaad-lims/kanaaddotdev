import { motion } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";

export function Leadership() {
  if (!site.leadership || site.leadership.length === 0) return null;

  return (
    <div id="leadership">
      <SectionHeader title="Leadership" />
      <Shell>
        <div className="divide-y divide-[var(--line)]">
          {site.leadership.map((item, i) => (
            <motion.div
              key={item.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex gap-4 px-6 py-6 transition-colors duration-200 hover:bg-[var(--hover)] sm:px-8"
            >
              {item.logo && (
                <div className="grid size-12 shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-white p-1.5">
                  <img
                    src={item.logo}
                    alt={item.org}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[15.5px] font-semibold text-[var(--fg)] flex items-baseline gap-2 flex-wrap">
                    {item.org}
                    <span className="text-[var(--soft)]">·</span>
                    <span className="text-[var(--muted)] font-normal">{item.role}</span>
                  </h3>
                  <span className="font-mono text-[11px] text-[var(--soft)]">{item.period}</span>
                </div>

                <ul className="mt-2.5 space-y-1">
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
              </div>
            </motion.div>
          ))}
        </div>
      </Shell>
    </div>
  );
}

export default Leadership;
