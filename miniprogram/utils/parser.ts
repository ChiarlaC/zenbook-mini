export interface ParsedInput {
    amount: number; // In cents
    category: string;
    raw: string;
}

/**
 * Parses user input string into transaction details.
 * Supports "Category Amount" or "Amount Category" formats.
 * Example: "Taxi 35" -> { amount: 3500, category: "Taxi" }
 * Example: "35 Taxi" -> { amount: 3500, category: "Taxi" }
 */
export function parseInput(input: string): ParsedInput | null {
    if (!input || !input.trim()) return null;

    const cleanInput = input.trim();

    // Regex to capture the first valid number (integer or float with up to 2 decimal places)
    const amountRegex = /[-+]?\d*\.?\d+/;
    const match = cleanInput.match(amountRegex);

    if (!match) {
        return null; // No valid amount found
    }

    const amountStr = match[0];
    const amountVal = parseFloat(amountStr);

    // Convert to cents (integer)
    const amountInCents = Math.round(Math.abs(amountVal) * 100);

    // Extract category by removing the amount from the input string
    let category = cleanInput.replace(amountStr, '').trim();

    // Clean up extra spaces or punctuation if necessary (optional)
    // For now, just trimming is sufficient.

    if (!category) {
        category = "Uncategorized";
    }

    return {
        amount: amountInCents,
        category: category,
        raw: cleanInput
    };
}
