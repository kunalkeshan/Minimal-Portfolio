import React from 'react';
import Link from 'next/link';

type NavbarProps = React.ComponentProps<'nav'> & {
	user: Author;
};

const Navbar: React.FC<NavbarProps> = ({ user }) => {
	return (
		<nav className='p-4 w-full text-black'>
			<div className='w-full max-w-7xl xl:max-w-screen-2xl mx-auto flex items-center justify-center gap-8'>
				<Link href={'/'} className='text-slate-500'>
					{user?.name ?? 'Portfolio'}
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
