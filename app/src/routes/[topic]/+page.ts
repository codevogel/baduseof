import { topics } from '$lib/assets/topics';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const topicSlug = params.topic;
	const topic = topics.find((t) => t.slug === topicSlug);
	if (!topic) {
		return error(404, 'Topic content not found');
	}
	return {
		mdContent: topic.content
	};
};
