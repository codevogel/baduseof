import type { PageLoad } from './$types';

import topicMd from '$lib/assets/content/pages/topics.md?raw';
import { topics, type Topic } from '$lib/assets/topics';

export const load: PageLoad = () => {
	const mdContent = appendTopicList(topicMd, topics);
	return {
		mdContent
	};
};

function appendTopicList(md: string, topics: Topic[]) {
	const sortedTopics = topics.slice().sort((a, b) => a.title.localeCompare(b.title));
	sortedTopics.forEach((topic) => {
		md += `- [${topic.title}](/topics/${topic.slug})\n`;
	});
	return md;
}
