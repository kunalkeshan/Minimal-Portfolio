import React from 'react';
import Body from '@/components/about/Body';
import Hero from '@/components/about/Hero';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { mainPortfolioUserQuery } from '@/sanity/lib/queries';

const AboutPage = async () => {
	const user = await sanityFetch<Author>({ query: mainPortfolioUserQuery });
	return (
		<main className='p-4 w-full max-w-4xl mx-auto'>
			<Hero user={user} />
			<Body />
		</main>
	);
};

export default AboutPage;
