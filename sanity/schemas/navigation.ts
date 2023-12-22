import { defineField, defineType } from 'sanity';
import { CURRENT_AVAILABLE_NAVIGATION } from '@/constants/navigation';

export default defineType({
	name: 'navigation',
	title: 'Navigation Items',
	type: 'document',
	fields: [
		defineField({
			name: 'custom',
			title: 'Is a custom field?',
			type: 'boolean',
			description:
				'Use one of the existing Navigation URLs, or you can put in a custom URL as well.',
			initialValue: false,
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'The name of the navigation item.',
			hidden: ({ document }) => Boolean(document?.custom),
			options: {
				list: CURRENT_AVAILABLE_NAVIGATION.map((_) => _.name),
			},
		}),
		defineField({
			name: 'customName',
			title: 'Custom Name',
			type: 'string',
			description: 'The name of the navigation item for custom URLs.',
			hidden: ({ document }) => !Boolean(document?.custom),
		}),
		defineField({
			name: 'customUrl',
			title: 'Custom URL',
			type: 'url',
			description: 'The URL for custom navigation items.',
			hidden: ({ document }) => !Boolean(document?.custom),
		}),
		defineField({
			name: 'target',
			title: 'Target',
			type: 'string',
			description: 'The target attribute for the link (_self or _blank).',
			options: {
				list: ['_self', '_blank'],
			},
			initialValue: '_self',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'type',
			title: 'Type',
			type: 'string',
			description:
				'Type of navigation (Common Nav, Navbar Nav, Footer Nav).',
			options: {
				list: ['common', 'navbar', 'footer'],
			},
			initialValue: 'common',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'order',
			title: 'Order Priority',
			type: 'number',
			description: 'Priority for ordering navigation items.',
			validation: (Rule) => Rule.required().integer().min(1),
		}),
	],
	orderings: [
		{
			title: 'Type (Common, Navbar, Footer) & Order Priority, Asc',
			name: 'typeOrderAsc',
			by: [
				{ field: 'type', direction: 'asc' },
				{ field: 'order', direction: 'asc' },
			],
		},
		{
			title: 'Type (Common, Navbar, Footer) & Order Priority, Desc',
			name: 'typeOrderDesc',
			by: [
				{ field: 'type', direction: 'desc' },
				{ field: 'order', direction: 'desc' },
			],
		},
	],
	preview: {
		select: {
			name: 'name',
			type: 'type',
			order: 'order',
			custom: 'custom',
			customName: 'customName',
		},
		prepare(selection) {
			const { name, type, order, custom, customName } = selection;
			return {
				title: `${
					custom ? customName : name
				} (${type}) - Priority: ${order}`,
			};
		},
	},
});
