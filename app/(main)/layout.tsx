import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import { mainPortfolioUserQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = await sanityFetch<Author>({ query: mainPortfolioUserQuery });
	return (
		<>
			<Navbar user={user} />
			{children}
			<Footer user={user} />
		</>
	);
}
