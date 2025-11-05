import { topics } from '$lib/assets/topics';

export type Route = {
	path: string;
	title: string;
};

export const routes: Route[] = [
	{
		path: '/',
		title: 'Home'
	},
	{
		path: '/topics',
		title: 'Topics'
	},
	{
		path: '/about',
		title: 'About'
	}
];

const baseTitle = 'Bad Use Of';

export function getTitleByPathname(pathname: string): string {
	const paths = routes.map((r) => r.path);
	if (paths.includes(pathname)) return baseTitle;

	const slug = pathname.split('/')[1];
	const topic = topics.find((t) => t.slug === slug);

	if (!topic) return baseTitle;
	return `${baseTitle}: ${topic.title}`;
}
