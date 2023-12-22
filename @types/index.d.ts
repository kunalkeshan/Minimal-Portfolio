type CurrentAvailableNavigation = [
	{ name: 'Home'; url: '/' },
	{ name: 'About'; url: '/about' },
	{ name: 'Experience'; url: '/experience' },
	{ name: 'Posts'; url: '/posts' },
	{ name: 'Projects'; url: '/projects' },
	{ name: 'Terms & Conditions'; url: '/terms' },
	{ name: 'Privacy Policy'; url: '/privacy' }
];

type NavigationItem = Readonly<{
	_id: string;
	custom: boolean;
	name?: string;
	customName?: string;
	customUrl?: string;
	target: '_self' | '_blank';
	type: 'custom' | 'navbar' | 'footer';
	order: number;
}>;

type Author = Readonly<{
	_id: string;
	name: string;
	slug: string;
	image: string;
	alt: string;
	isMain: boolean;
	about: string;
	qualifications?: string;
	bio?: string;
	skills?: Array<string>;
	github?: string;
	instagram?: string;
	twitter?: string;
	linkedin?: string;
	website?: string;
	email?: string;
	youtube?: string;
}>;
