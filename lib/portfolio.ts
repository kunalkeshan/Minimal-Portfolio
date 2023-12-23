import z from 'zod';
import {
	Github,
	Globe,
	Instagram,
	Linkedin,
	LucideIcon,
	Mail,
	Twitter,
	Youtube,
} from 'lucide-react';

const userSocials = z
	.array(
		z.object({
			Icon: z.custom<LucideIcon>(),
			url: z.string().or(z.null()).optional(),
			title: z.string(),
		})
	)
	.transform((val) =>
		val.filter(
			(social) =>
				typeof social.url !== 'undefined' &&
				social.url !== null &&
				social.url?.length !== 0
		)
	);

type UserSocials = z.infer<typeof userSocials>;

export function validateAndReturnUserSocials(user: Author) {
	const data: UserSocials = userSocials.parse([
		{
			Icon: Github,
			url: user.github,
			title: 'GitHub',
		},
		{
			Icon: Instagram,
			url: user.instagram,
			title: 'Instagram',
		},
		{
			Icon: Linkedin,
			url: user.linkedin,
			title: 'LinkedIn',
		},
		{
			Icon: Globe,
			url: user.website,
			title: 'Website',
		},
		{
			Icon: Youtube,
			url: user.youtube,
			title: 'YouTube',
		},
		{
			Icon: Twitter,
			url: user.twitter,
			title: 'Twitter',
		},
		{
			Icon: Mail,
			url: user.email ? `mailto:${user.email}` : null,
			title: 'Mail',
		},
	]);
	return data;
}
