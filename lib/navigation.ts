import { CURRENT_AVAILABLE_NAVIGATION } from '@/constants/navigation';

export function extractURLFromName(
	name: CurrentAvailableNavigation[number]['name']
) {
	const item = CURRENT_AVAILABLE_NAVIGATION.find((_) => _.name === name);
	if (item) {
		return item.url;
	} else {
		return null;
	}
}
