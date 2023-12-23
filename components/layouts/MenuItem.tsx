import React from 'react';
import Link from 'next/link';
import {
	NavigationMenuItem,
	NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

type MenuItemProps = React.ComponentPropsWithRef<'li'> & {
	navItem: Navdata;
	linkClassName?: string | undefined;
};

const MenuItem: React.FC<MenuItemProps> = ({
	navItem,
	className,
	linkClassName,
}) => {
	return (
		<NavigationMenuItem className={cn(className)}>
			<Link
				href={navItem.url}
				target={navItem.target}
				legacyBehavior
				passHref
			>
				<NavigationMenuLink
					className={cn(linkClassName, navigationMenuTriggerStyle())}
				>
					{navItem.name}
				</NavigationMenuLink>
			</Link>
		</NavigationMenuItem>
	);
};

export default MenuItem;
