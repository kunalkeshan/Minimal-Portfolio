import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import {
	mainPortfolioUserQuery,
	navigationItemsQuery,
} from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = await sanityFetch<Author>({ query: mainPortfolioUserQuery });
	const navItems = await sanityFetch<NavigationItem[]>({
		query: navigationItemsQuery,
		params: { type: 'navbar' },
	});
	const footerItems = await sanityFetch<NavigationItem[]>({
		query: navigationItemsQuery,
		params: { type: 'footer' },
	});
	return (
		<>
			<Navbar user={user} navItems={navItems} />
			{children}
			<Footer />
		</>
	);
}
