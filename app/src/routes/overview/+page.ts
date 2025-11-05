import type { PageLoad } from './$types';

import overview from '$lib/assets/content/pages/overview.md?raw';

export const load: PageLoad = () => {
	return {
		mdContent: overview
	};
};
