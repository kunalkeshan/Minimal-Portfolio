import React from 'react';
import Link from 'next/link';
import { extractURLFromName } from '@/lib/navigation';

type NavbarProps = React.ComponentProps<'nav'> & {
	user: Author;
	navItems: NavigationItem[];
};

const Navbar: React.FC<NavbarProps> = ({ user, navItems }) => {
	return (
		<nav className='p-4 w-full text-black'>
			<div className='w-full max-w-7xl xl:max-w-screen-2xl mx-auto flex items-center justify-center gap-8'>
				<Link href={'/'} className='text-slate-500'>
					{user?.name ?? 'Portfolio'}
				</Link>
				{navItems && navItems.length > 0
					? navItems.map((item) => (
							<Link
								key={item._id}
								href={
									item.custom
										? item.customUrl ?? '#'
										: item.name
										? extractURLFromName(
												item.name as CurrentAvailableNavigation[number]['name']
										  ) ?? '#'
										: '#'
								}
							>
								{item.custom ? item.customName : item.name}
							</Link>
					  ))
					: null}
			</div>
		</nav>
	);
};

export default Navbar;
