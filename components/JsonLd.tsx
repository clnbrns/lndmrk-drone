export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Escape characters that could prematurely close the <script> tag and inject HTML.
  // JSON.stringify alone does not escape </script>, so we unicode-escape < > &.
  const safe = JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
}
