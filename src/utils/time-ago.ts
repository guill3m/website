function timeAgo(date: number): string {
	const secondsElapsed = Math.floor((Date.now() - date) / 1000)

	const years = Math.floor(secondsElapsed / 31536000) // 1 year = 365 days
	if (years > 1) {
		return `${years} years ago`
	} else if (years === 1) {
		return '1 year ago'
	}

	const months = Math.floor(secondsElapsed / 2592000) // 1 month = 30 days
	if (months > 1) {
		return `${months} months ago`
	} else if (months === 1) {
		return '1 month ago'
	}

	const days = Math.floor(secondsElapsed / 86400)
	if (days > 1) {
		return `${days} days ago`
	} else if (days === 1) {
		return '1 day ago'
	}

	const hours = Math.floor(secondsElapsed / 3600)
	if (hours > 1) {
		return `${hours} hours ago`
	} else if (hours === 1) {
		return '1 hour ago'
	}

	const minutes = Math.floor(secondsElapsed / 60)
	if (minutes > 1) {
		return `${minutes} minutes ago`
	} else if (minutes === 1) {
		return '1 minute ago'
	}

	if (secondsElapsed < 5) {
		return 'just now'
	}

	return `${Math.floor(secondsElapsed)} seconds ago`
}

export default timeAgo
