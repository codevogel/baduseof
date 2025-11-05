import ai from '$lib/assets/content/topics/ai.md?raw';
import qr from '$lib/assets/content/topics/qr.md?raw';

export type Topic = {
	slug: string;
	title: string;
	flavorText: string;
	content: string;
};

export const topics: Topic[] = [
	{
		slug: 'ai',
		title: 'Artifical Intelligence',
		flavorText: 'Misuse of LLMs and other AI tools.',
		content: ai
	},
	{
		slug: 'qr',
		title: 'QR Codes',
		flavorText: 'Malicious QR codes and how to avoid them.',
		content: qr
	}
];
