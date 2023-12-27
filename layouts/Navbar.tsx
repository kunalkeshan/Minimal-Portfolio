import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import SheetNav from './Sheet';
import DesktopNav from '@/components/layouts/DesktopNav';

type NavbarProps = React.ComponentProps<'nav'> & {
	user: Author;
};

const Navbar: React.FC<NavbarProps> = ({ user }) => {
	return (
		<nav className='p-4 w-full text-black'>
			<div className='w-full max-w-4xl mx-auto flex items-center justify-between gap-8'>
				<DesktopNav />
				<div className='w-full md:w-fit flex items-center justify-between md:justify-normal flex-row-reverse md:flex-row gap-2'>
					<Button size={'sm'} variant={'outline'} asChild>
						<Link href={'/contact'}>
							<Mail
								strokeWidth={1.5}
								size={16}
								className='shrink-0 mr-2'
							/>
							<span>Contact</span>
						</Link>
					</Button>
					<SheetNav user={user} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
