'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import MobileNav from '@/components/layouts/MobileNav';
import { validateAndReturnUserSocials } from '@/lib/portfolio';

type SheetNavProps = React.ComponentProps<'div'> & {
	user: Author;
};

const SheetNav: React.FC<SheetNavProps> = ({ user }) => {
	const [open, setOpen] = useState(false);

	const socials = validateAndReturnUserSocials(user);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className='block md:hidden'>
				<Button size={'icon'} variant={'ghost'}>
					<Menu strokeWidth={1.5} />
				</Button>
			</SheetTrigger>
			<SheetContent className='flex flex-col md:hidden w-full h-full [&>div]:h-full'>
				<SheetHeader>
					<SheetTitle>
						<Link href={'/'}>{user?.name ?? 'Portfolio'}</Link>
					</SheetTitle>
					<SheetDescription className='text-slate-500 text-sm font-normal'>
						{user?.about}
					</SheetDescription>
					<MobileNav close={handleClose} />
					<SheetFooter className='flex flex-row flex-wrap gap-2 mt-auto items-center justify-center w-full'>
						{socials.map((social, idx) => (
							<Button
								key={`sheet-social-${idx}`}
								asChild
								size={'icon'}
								variant={'outline'}
								title={social.title}
							>
								<Link href={social.url || '#'} target='_blank'>
									<social.Icon strokeWidth={1.5} />
								</Link>
							</Button>
						))}
					</SheetFooter>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default SheetNav;
