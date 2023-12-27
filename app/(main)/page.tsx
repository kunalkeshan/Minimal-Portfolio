import Hero from '@/components/home/Hero';
import { mainPortfolioUserQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function Home() {
	const user = await sanityFetch<Author>({ query: mainPortfolioUserQuery });
	return (
		<main className='p-4 w-full max-w-4xl mx-auto'>
			<Hero user={user} />
		</main>
	);
}
