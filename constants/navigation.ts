// Navigation Data

type NavdataCollection = ReadonlyArray<Navdata>;

const COMMON_NAVIGATION: NavdataCollection = [
	{
		name: 'Home',
		url: '/',
		target: '_self',
	},
	{
		name: 'About',
		url: '/about',
		target: '_self',
	},
	{
		name: 'Experience',
		url: '/experience',
		target: '_self',
	},
	{
		name: 'Projects',
		url: '/projects',
		target: '_self',
	},
	{
		name: 'Posts',
		url: '/posts',
		target: '_self',
	},
];

export const NAVBAR_NAVIGATION: NavdataCollection = [...COMMON_NAVIGATION];

export const FOOTER_NAVIGATION: NavdataCollection = [
	...COMMON_NAVIGATION,
	{
		name: 'Contact',
		url: '/contact',
		target: '_self',
	},
	{
		name: 'FAQs',
		url: '/contact#faqs',
		target: '_self',
	},
	{
		name: 'Terms & Conditions',
		url: '/terms',
		target: '_self',
	},
	{
		name: 'Privacy Policy',
		url: '/privacy',
		target: '_self',
	},
];
