/** Splits text and wraps numeric metrics (90%, 2,000+, 6.12×, 54.6ms, 500+) in bold. */
export function BoldMetrics({ text }: { text: string }) {
  const re = /(?<![A-Za-z0-9])\d+(?:,\d+)*(?:\.\d+)*(?:%|×|ms|s)?\+?/g;
  const parts = text.split(re);
  const matches = text.match(re) ?? [];
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {matches[i] && (
            <strong className="font-semibold text-[var(--fg)]">{matches[i]}</strong>
          )}
        </span>
      ))}
    </>
  );
}

/** Splits a newline-separated string into dash bullets with bolded metrics. */
export function BulletLines({ text }: { text: string }) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  return (
    <ul className="space-y-1.5">
      {lines.map((line, i) => (
        <li key={i} className="flex gap-2.5">
          <span className="font-mono text-[var(--soft)] flex-none">–</span>
          <span><BoldMetrics text={line} /></span>
        </li>
      ))}
    </ul>
  );
}
