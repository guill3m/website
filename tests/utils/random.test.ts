import { describe, expect, test } from 'vitest'
import { blockText, randomInt } from '../../src/utils/random'

describe('Block Text utility', () => {
	test('fixed length', () => {
		expect(blockText(3, 3)).toHaveLength(3)
		expect(blockText(3, 3)).toBe('███')
		expect(blockText(12, 12)).toHaveLength(12)
		expect(blockText(12, 12)).toBe('████████████')
	})
})

describe('Random Int utility', () => {
	test('fixed number', () => {
		expect(randomInt(2, 2)).toBe(2)
		expect(randomInt(44, 44)).toBe(44)
		expect(randomInt(123, 123)).toBe(123)
	})
})
