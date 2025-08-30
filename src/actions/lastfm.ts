import { defineAction } from 'astro:actions'
import { LASTFM_API_KEY } from 'astro:env/server'
import { z } from 'astro:content'

type LastfmUserGetRecentTracksResponse = Readonly<{
	recenttracks: {
		track: Array<
			{
				artist: {
					mbid: string
					'#text': string
				}
				streamable: '0' | '1'
				image: {
					'#text': string
					size: string
				}[]
				mbid: string
				album: {
					mbid: string
					'#text': string
				}
				name: string
				url: string
				loved: '0' | '1'
			} & (
				| { date: { uts: string; '#text': string }; '@attr': never }
				| { '@attr': { nowplaying: 'true' }; date: never }
			)
		>
		'@attr': {
			perPage: string
			totalPages: string
			page: string
			total: string
			user: string
		}
	}
}>

export type Track = {
	artist: string
	album: string
	albumArt: string
	trackName: string
	time: number
}

const lastfmApiBase = 'http://ws.audioscrobbler.com/2.0/'

export async function getRecentTracks({
	user,
	limit,
}: {
	user: string
	limit: number
}): Promise<Track[]> {
	const response = await fetch(
		`${lastfmApiBase}?method=user.getrecenttracks&user=${user}&api_key=${LASTFM_API_KEY}&limit=${limit}&format=json`,
	)
	const json: LastfmUserGetRecentTracksResponse = await response.json()

	const tracks = json.recenttracks.track
		.filter((track) => track.date !== undefined) // remove the "now playing" song
		.map((track) => ({
			artist: track.artist['#text'],
			album: track.album['#text'],
			albumArt: track.image[2]?.['#text'] || '',
			trackName: track.name,
			time: Number(track.date.uts) * 1000,
		}))

	return tracks
}

/* v8 ignore next 9 */
export const lastfm = {
	getRecentTracks: defineAction({
		input: z.object({
			user: z.string(),
			limit: z.number().default(5),
		}),
		handler: getRecentTracks,
	}),
}
