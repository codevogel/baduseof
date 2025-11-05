import type { PageLoad } from './$types';

import home from '$lib/assets/content/pages/home.md?raw';

export const load: PageLoad = () => {
	return {
		mdContent: home
	};
};
