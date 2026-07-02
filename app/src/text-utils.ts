// Tiny text helpers shared across the WS3 tool-comparison exercise.

export function slugify(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(input: string, maxLength: number, suffix = "..."): string {
  if (input.length <= maxLength) {
    return input;
  }

  if (suffix.length >= maxLength) {
    return suffix.slice(0, maxLength);
  }

  return input.slice(0, maxLength - suffix.length) + suffix;
}

export function parseTags(input: string): string[] {
  const tags = input
    .split(/[,#]/)
    .map((tag) => tag.trim().toLowerCase())
    .filter((tag) => tag.length > 0);

  return Array.from(new Set(tags));
}

// Capitalize first letter of each non-whitespace word, lowercase the rest.
// Preserves all whitespace (including multiple spaces and leading/trailing spaces).
export function capitalizeWords(input: string): string {
  if (input.length === 0) return input;
  // Replace each sequence of non-whitespace characters with a title-cased version.
  return input.replace(/\S+/g, (word) => {
    if (word.length === 0) return word;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
}
