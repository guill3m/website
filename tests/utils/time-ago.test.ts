import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import timeAgo from '../../src/utils/time-ago'

const mockDate = 1756280432000

describe('Time Ago utility', () => {
	beforeEach(() => {
		vi.useFakeTimers()
		const date = new Date(mockDate)
		vi.setSystemTime(date)
	})

	afterEach(() => {
		vi.useRealTimers()
	})

	it('just now', () => {
		expect(timeAgo(mockDate)).toEqual('just now')
		expect(timeAgo(mockDate - 2_500)).toEqual('just now')
		expect(timeAgo(mockDate - 4_999)).toEqual('just now')
	})

	it('N seconds ago', () => {
		expect(timeAgo(mockDate - 5_000)).toEqual('5 seconds ago')
		expect(timeAgo(mockDate - 30_000)).toEqual('30 seconds ago')
		expect(timeAgo(mockDate - 59_999)).toEqual('59 seconds ago')
	})

	it('N minutes ago', () => {
		expect(timeAgo(mockDate - 60_000)).toEqual('1 minute ago')
		expect(timeAgo(mockDate - 1_600_000)).toEqual('26 minutes ago')
		expect(timeAgo(mockDate - 3_599_999)).toEqual('59 minutes ago')
	})

	it('N hours ago', () => {
		expect(timeAgo(mockDate - 3_600_000)).toEqual('1 hour ago')
		expect(timeAgo(mockDate - 43_200_000)).toEqual('12 hours ago')
		expect(timeAgo(mockDate - 86_399_999)).toEqual('23 hours ago')
	})

	it('N days ago', () => {
		expect(timeAgo(mockDate - 86_400_000)).toEqual('1 day ago')
		expect(timeAgo(mockDate - 1_300_000_000)).toEqual('15 days ago')
		expect(timeAgo(mockDate - 2_591_999_999)).toEqual('29 days ago')
	})

	it('N months ago', () => {
		expect(timeAgo(mockDate - 2_592_000_000)).toEqual('1 month ago')
		expect(timeAgo(mockDate - 15_250_000_000)).toEqual('5 months ago')
		expect(timeAgo(mockDate - 31_535_999_999)).toEqual('12 months ago')
	})

	it('N years ago', () => {
		expect(timeAgo(mockDate - 31_536_000_000)).toEqual('1 year ago')
		expect(timeAgo(mockDate - 45_000_000_000)).toEqual('1 year ago')
		expect(timeAgo(mockDate - 63_072_000_000)).toEqual('2 years ago')
		expect(timeAgo(mockDate - 72_000_000_000)).toEqual('2 years ago')
		expect(timeAgo(mockDate - 94_608_000_000)).toEqual('3 years ago')
	})
})
