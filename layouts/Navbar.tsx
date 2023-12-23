import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';

type NavbarProps = React.ComponentProps<'nav'> & {
	user: Author;
};

const Navbar: React.FC<NavbarProps> = ({ user }) => {
	return (
		<nav className='p-4 w-full text-black'>
			<div className='w-full max-w-4xl mx-auto flex items-center justify-between gap-8'>
				<Link href={'/'} className='text-slate-500'>
					{user?.name ?? 'Portfolio'}
				</Link>
				<ul className='flex gap-8'>
					{NAVBAR_NAVIGATION.map((item) => (
						<li key={`navbar-item-${item.url}`}>
							<Link href={item.url} target={item.target}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
				<Button size={'icon'} variant={'ghost'} asChild>
					<Link href={'/contact'}>
						<Mail strokeWidth={1.5} />
					</Link>
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
