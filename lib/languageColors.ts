/** GitHub Linguist's official per-language colors, for the hover highlight. */
export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Dart: "#00B4AB",
  Python: "#3572A5",
  HTML: "#E34C26",
  CSS: "#563D7C",
  PLpgSQL: "#336790",
  SQL: "#E38C00",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  "Objective-C": "#438EFF",
  Java: "#B07219",
  "C#": "#178600",
  "C++": "#F34B7D",
  C: "#555555",
  Shell: "#89E051",
  Ruby: "#701516",
  Go: "#00ADD8",
  Rust: "#DEA584",
  PHP: "#4F5D95",
};

const FALLBACK_COLOR = "#a19c92";

export function languageColor(name: string): string {
  return LANGUAGE_COLORS[name] ?? FALLBACK_COLOR;
}
