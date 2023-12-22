import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			description:
				'Enter the title of your post. This is the headline that captures the essence of your content.',
			validation: (Rule) => Rule.required().min(5).max(160),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description:
				"This is the user-friendly part of the URL for your post. It's derived from the title but can be customized. Slugs make it easier for users to access your post directly.",
			validation: (Rule) => Rule.required(),
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			description:
				'Enter the description of your post. This is used as an introduction text and will be used to place as the SEO content.',
			validation: (Rule) => Rule.required().max(500),
		}),
		defineField({
			name: 'author',
			title: 'Author',
			type: 'reference',
			description:
				'Select the author of the post from the provided options. This identifies the person responsible for creating the content.',
			validation: (Rule) => Rule.required(),
			to: { type: 'author' },
		}),
		defineField({
			name: 'mainImage',
			title: 'Main image',
			description:
				'Upload or select the main image for your post. It serves as the visual representation of your content. You can also provide an alternative text for the image. (Recommended 16:9 ratio for image)',
			type: 'image',
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
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			description:
				'Assign relevant categories to your post. This helps organize your content and makes it easier for users to find posts related to specific topics.',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			validation: (Rule) => Rule.required(),
			description:
				'Specify the date and time when your post was published. This information is displayed to users and helps them understand when the post was written.',
		}),
		defineField({
			name: 'featured',
			title: 'Featured?',
			description:
				'Featured posts will be shown at the top and in the landing page.',
			type: 'boolean',
			initialValue: false,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent',
			description:
				'This is where you add the main content of your post. Use it to write the article, blog post, or any other textual content. You can format your text using different styles.',
			validation: (Rule) => Rule.required(),
		}),
	],
	initialValue: () => ({
		publishedAt: new Date().toISOString(),
	}),
	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const { author } = selection;
			return { ...selection, subtitle: author && `by ${author}` };
		},
	},
});
