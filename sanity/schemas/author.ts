import { defineField, defineType } from 'sanity';
import { client } from '../lib/client';

export default defineType({
	name: 'author',
	title: 'Author',
	type: 'document',
	groups: [
		{
			name: 'professional',
			title: 'Professional Details',
		},
		{
			name: 'social',
			title: 'Social Links',
		},
		{
			name: 'media',
			title: 'Media',
		},
	],
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description:
				'The full name of the author. This is how the author will be identified.',
			validation: (Rule) => Rule.required(),
			group: 'professional',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			group: 'professional',
			description:
				"A unique identifier used for generating user-friendly URLs. It's automatically derived from the name.",
			options: {
				source: 'name',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			description:
				'An image representing the author. This could be a profile picture or a photo.',
			validation: (Rule) => Rule.required(),
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
			group: 'media',
		}),
		defineField({
			name: 'isMain',
			title: 'Is main portfolio account?',
			type: 'boolean',
			group: 'professional',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'about',
			title: 'About',
			type: 'string',
			group: 'professional',
			description:
				'A block of text where you can provide a brief biography or description of the author.',
			validation: (Rule) => Rule.required().max(500),
		}),
		defineField({
			name: 'bio',
			title: 'Bio',
			type: 'blockContent',
			description:
				'A block of text where you can provide a detailed biography or description of the author. You can format your text using different styles.',
		}),
		defineField({
			name: 'qualifications',
			title: 'Qualifications',
			type: 'string',
			description: 'The qualifications or certifications of the author.',
			group: 'professional',
		}),
		defineField({
			name: 'github',
			title: 'GitHub Profile',
			type: 'url',
			group: 'social',
			description: "The author's GitHub profile URL.",
		}),
		defineField({
			name: 'instagram',
			title: 'Instagram Profile',
			type: 'url',
			group: 'social',
			description: "The author's Instagram profile URL.",
		}),
		defineField({
			name: 'twitter',
			title: 'Twitter Profile',
			type: 'url',
			group: 'social',
			description: "The author's Twitter profile URL.",
		}),
		defineField({
			name: 'linkedin',
			title: 'LinkedIn Profile',
			type: 'url',
			group: 'social',
			description: "The author's LinkedIn profile URL.",
		}),
		defineField({
			name: 'website',
			title: 'Website',
			type: 'url',
			group: 'social',
			description: "The author's personal or professional website URL.",
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			group: 'social',
			description: "The author's contact email address.",
		}),
		defineField({
			name: 'youtube',
			title: 'YouTube',
			type: 'url',
			group: 'social',
			description: "The author's YouTube channel URL.",
		}),
	],
});
