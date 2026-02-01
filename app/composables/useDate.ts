/**
 * Parse a date value safely across all browsers.
 * Handles Date objects, ISO strings, and SQLite-style "YYYY-MM-DD HH:MM:SS" strings
 * that Safari rejects when passed directly to `new Date()`.
 */
function parseDate(value: string | Date | undefined | null): Date {
    if (!value) return new Date(NaN);
    if (value instanceof Date) return value;
    // Replace space separator with 'T' for Safari compatibility
    return new Date(String(value).replace(" ", "T"));
}

export function formatDate(date: string | Date | undefined | null): string {
    const d = parseDate(date);
    if (isNaN(d.getTime())) return "";
    return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(d);
}

export function formatShortDate(date: string | Date | undefined | null): string {
    const d = parseDate(date);
    if (isNaN(d.getTime())) return "";
    return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short" }).format(d);
}

export function toISODateString(date: string | Date | undefined | null): string {
    const d = parseDate(date);
    if (isNaN(d.getTime())) return "";
    return d.toISOString();
}

export function getDateYear(date: string | Date): number {
    return parseDate(date).getFullYear();
}
