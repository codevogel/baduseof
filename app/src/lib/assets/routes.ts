export type Route = {
	path: string;
	title: string;
	name: string;
};

export const routes: Route[] = [
	{
		path: '/',
		title: 'Home',
		name: 'home'
	},
	{
		path: '/overview',
		title: 'Overview',
		name: 'overview'
	},
	{
		path: '/about',
		title: 'About',
		name: 'about'
	}
];

export type Topic = {
	slug: string;
	title: string;
};

export const topics: Topic[] = [
	{
		slug: 'ai',
		title: 'AI'
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
