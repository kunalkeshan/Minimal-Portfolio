import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'faq',
	title: 'Frequently Asked Questions',
	type: 'document',
	fields: [
		defineField({
			name: 'question',
			title: 'Question',
			type: 'string',
			description: 'The frequently asked question itself.',
			validation: (Rule) => Rule.required().min(5).max(200),
		}),
		defineField({
			name: 'answer',
			title: 'Answer',
			type: 'text',
			description:
				'The detailed answer to the frequently asked question.',
			validation: (Rule) => Rule.required().min(5).max(1000),
		}),
		defineField({
			name: 'order',
			title: 'Priority Order',
			description:
				'A numerical value representing the priority or order of this Q/A. Lower values indicate higher priority. Use this field to customize the order in which Q/A are displayed or sorted.',
			type: 'number',
			validation: (Rule) => Rule.required().integer().min(1),
		}),
	],
	orderings: [
		{
			title: 'Priority Order, Asc',
			name: 'orderAsc',
			by: [{ field: 'order', direction: 'asc' }],
		},
		{
			title: 'Priority Order, Desc',
			name: 'orderDesc',
			by: [{ field: 'order', direction: 'desc' }],
		},
	],
	preview: {
		select: {
			question: 'question',
			order: 'order',
		},
		prepare(selection) {
			const { question, order } = selection;
			return {
				title: `${order ? `${order}.` : ''} ${
					question ? question : 'Question to be added'
				}`,
			};
		},
	},
});
