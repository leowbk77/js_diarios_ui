const WINDOW_SIZE = 120; // caracteres de cada lado do termo

interface ExcerptResult {
  excerpt: string;
  clippedStart: boolean;
  clippedEnd: boolean;
}

export function extractWindow(
  text: string,
  term: string,
  windowSize = WINDOW_SIZE
): ExcerptResult {
  const MAX_TOTAL = windowSize * 2 + term.length + 20;
  const MAX_TOTAL_SEM_TERMO = 540;

  if (!term || text.length <= MAX_TOTAL)
    return { excerpt: text.slice(0, MAX_TOTAL_SEM_TERMO), clippedStart: false, clippedEnd: true };

  const idx = text.toLowerCase().indexOf(term.toLowerCase());

  if (idx === -1) {
    // termo não encontrado — exibe início do texto
    return {
      excerpt: text.slice(0, MAX_TOTAL),
      clippedStart: false,
      clippedEnd: text.length > MAX_TOTAL,
    };
  }

  const start = Math.max(0, idx - windowSize);
  const end = Math.min(text.length, idx + term.length + windowSize);

  return {
    excerpt: text.slice(start, end),
    clippedStart: start > 0,
    clippedEnd: end < text.length,
  };
}