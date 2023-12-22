import { mainPortfolioUserQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function Home() {
	const user = await sanityFetch<Author>({ query: mainPortfolioUserQuery });
	return <main>Home</main>;
}
