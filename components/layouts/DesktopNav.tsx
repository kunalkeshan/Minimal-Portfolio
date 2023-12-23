'use client';

import React from 'react';
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuIndicator,
} from '@/components/ui/navigation-menu';
import MenuItem from './MenuItem';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';

const DesktopNav = () => {
	return (
		<NavigationMenu className='hidden md:flex gap-8'>
			<NavigationMenuList>
				{NAVBAR_NAVIGATION.map((item) => (
					<MenuItem navItem={item} key={`navbar-item-${item.url}`} />
				))}
				<NavigationMenuIndicator />
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default DesktopNav;
