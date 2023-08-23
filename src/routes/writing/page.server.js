import { posts } from '../../lib/writing.js'

export async function load() {
	return {
		summaries: posts.map((post) => ({
			title: post.title,
			subtitle: post.subtitle,
			link: post.link,
			thumbnail: post.thumbnail,
		})),
	}
}
