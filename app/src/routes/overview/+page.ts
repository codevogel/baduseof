import type { PageLoad } from './$types';

import overview from '$lib/assets/content/overview.md?raw';

export const load: PageLoad = () => {
	return {
		mdContent: overview
	};
};
