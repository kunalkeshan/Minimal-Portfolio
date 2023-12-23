interface Navdata {
	name: string;
	url: string;
	target: '_blank' | '_self';
}


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
