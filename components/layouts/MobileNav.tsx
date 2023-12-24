'use client';

import React from 'react';
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuIndicator,
} from '@/components/ui/navigation-menu';
import MenuItem from './MenuItem';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';

type MobileNavProps = React.ComponentProps<'nav'> & {
	close: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ close }) => {
	return (
		<NavigationMenu
			className='min-w-full mt-4 [&>div]:w-full items-start'
			onClick={close}
		>
			<NavigationMenuList
				className='min-w-full flex flex-col gap-2'
				data-orientation='vertical'
			>
				{NAVBAR_NAVIGATION.map((item) => (
					<MenuItem
						navItem={item}
						key={`navbar-item-${item.url}`}
						className='w-full'
						linkClassName='min-w-full'
					/>
				))}
				<NavigationMenuIndicator />
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default MobileNav;
