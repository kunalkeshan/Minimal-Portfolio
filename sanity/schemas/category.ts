import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'category',
	title: 'Category',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			description:
				'This is where you specify the title or name of the category. It helps identify and categorize the content or items within this category.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description:
				"The slug is a user-friendly part of the URL. It's automatically generated based on the title but can be customized if needed. The slug simplifies web addresses and makes them easier to remember.",
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			description:
				'Use this field to provide a brief description or explanation of the category. Describe what this category encompasses or any additional information that helps clients understand its purpose or content.',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
	],
});
