interface Navdata {
	name: string;
	url: string;
	target: '_blank' | '_self';
}

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
