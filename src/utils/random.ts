/**
 * Generates a string of block characters of a random length between two given limits for use in skeleton/loading/placeholder states
 *
 * @param lengthMin - Minimum number of characters
 * @param lengthMax  - Maximum number of characters
 * @returns A string of a random number of █ characters between the defined limits
 */
export function blockText(lengthMin: number, lengthMax: number): string {
	return '█'.repeat(randomInt(lengthMin, lengthMax))
}

/**
 * Generates a random integer between the specified limits
 *
 * @param min - Minimum value
 * @param max  - Maximum value
 */
export function randomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min
}
