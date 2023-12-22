import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'testimonial',
	title: 'Testimonial',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'The name of the person providing the testimonial.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'position',
			title: 'Position',
			type: 'string',
			description:
				'The position or role of the person providing the testimonial (e.g., Colleague, Client).',
		}),
		defineField({
			name: 'content',
			title: 'Testimonial Content',
			type: 'text',
			description: 'The content of the testimonial.',
			validation: (Rule) => Rule.required().min(10),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			description:
				'An optional image of the person providing the testimonial.',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
					description:
						'A descriptive alternative text for the image.',
					validation: (Rule) => Rule.required(),
				},
			],
		}),
		defineField({
			name: 'website',
			title: 'Website or Social Link',
			type: 'url',
			description:
				"An optional link to the person's website or social media profile.",
			validation: (Rule) =>
				Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
		}),
	],
});
