import ai from '$lib/assets/content/topics/ai.md?raw';
import qr from '$lib/assets/content/topics/qr.md?raw';

export type Topic = {
	slug: string;
	title: string;
	content: string;
};

export const topics: Topic[] = [
	{
		slug: 'ai',
		title: 'Artifical Intelligence',
		content: ai
	},
	{
		slug: 'qr',
		title: 'QR Codes',
		content: qr
	}
];
