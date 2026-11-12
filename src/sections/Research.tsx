import { motion } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { FileText, ExternalLink, Download, ArrowUpRight } from "lucide-react";

const verdictStyles: Record<string, string> = {
  Published:
    "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Accepted:
    "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export function Research() {
  if (!site.papers || site.papers.length === 0) return null;

  return (
    <div id="research">
      <SectionHeader
        title="Research"
        aside={
          <a
            href="https://scholar.google.com/citations?user=kanaad-limaye"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--soft)] hover:text-[var(--fg)] transition-colors group/header"
          >
            <FileText className="size-3.5" />
            <span className="hidden sm:inline">Google Scholar</span>
            <ArrowUpRight className="size-3 text-[var(--soft)] group-hover/header:translate-x-0.5 group-hover/header:-translate-y-0.5 transition-transform" />
          </a>
        }
      />
      <Shell>
        <div className="divide-y divide-[var(--line)]">
          {site.papers.map((paper, i) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-6 py-6 sm:px-8"
            >
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium border ${verdictStyles[paper.verdict] ?? "bg-[var(--chip)] text-[var(--muted)] border-[var(--line)]"}`}
                >
                  {paper.verdict}
                </span>
                <span className="text-[var(--soft)]">{paper.venue}</span>
              </div>

              <h3 className="mt-3 font-serif text-[18px] sm:text-[20px] text-[var(--fg)] tracking-wide font-normal leading-snug">
                {paper.title}
              </h3>

              <p className="mt-1.5 text-[12.5px] text-[var(--soft)] leading-relaxed">
                {paper.authors}
              </p>

              <ul className="mt-4 space-y-1.5">
                {paper.summary.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-[13.5px] leading-relaxed text-[var(--muted)]"
                  >
                    <span className="text-[var(--soft)] font-mono">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-[var(--chip)] px-2 py-0.5 font-mono text-[10.5px] text-[var(--muted)] border border-[var(--line)]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(paper.publicationUrl || paper.pdfUrl) && (
                <div className="mt-4 flex items-center gap-4">
                  {paper.publicationUrl && (
                    <a
                      href={paper.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-[var(--fg)] hover:text-[var(--soft)] transition-colors"
                    >
                      Publication
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                  {paper.pdfUrl && (
                    <a
                      href={paper.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-[var(--muted)] hover:text-[var(--fg)] transition-colors group/pdf"
                    >
                      PDF
                      <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Shell>
    </div>
  );
}

export default Research;
