import type { PageLoad } from './$types';

import topics from '$lib/assets/content/pages/topics.md?raw';

export const load: PageLoad = () => {
	return {
		mdContent: topics
	};
};
