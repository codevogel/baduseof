import ai from '$lib/assets/content/ai.md?raw';

export type Topic = {
	slug: string;
	title: string;
	content: string;
};

export const topics: Topic[] = [
	{
		slug: 'ai',
		title: 'AI',
		content: ai
	}
];
