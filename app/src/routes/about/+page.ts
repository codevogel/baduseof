import type { PageLoad } from './$types';

import about from '$lib/assets/content/pages/about.md?raw';

export const load: PageLoad = () => {
	return {
		mdContent: about
	};
};
