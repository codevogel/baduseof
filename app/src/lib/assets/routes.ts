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
	}
];

const baseTitle = 'Bad Use Of';

export function getTitleByPathname(pathname: string): string | undefined {
	if (pathname === '/') return baseTitle;
	const route = routes.find((r) => r.path === pathname);
	return route ? `${baseTitle} ${route.title}` : baseTitle;
}
