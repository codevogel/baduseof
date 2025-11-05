import ai from '$lib/assets/content/topics/ai.md?raw';

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
