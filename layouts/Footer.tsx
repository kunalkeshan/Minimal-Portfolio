import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import { validateAndReturnUserSocials } from '@/lib/portfolio';
import { FOOTER_NAVIGATION } from '@/constants/navigation';
import { GITHUB_URL } from '@/constants/portfolio';

type FooterProps = React.ComponentProps<'footer'> & {
	user: Author;
};

const INCLUDE_POWERED_BY = true;

const Footer: React.FC<FooterProps> = ({ user }) => {
	const socials = validateAndReturnUserSocials(user);
	return (
		<footer className='p-4'>
			<section className='w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div>
					<Link
						href='/'
						className='text-slate-500 hover:text-black transition-all duration-300 uppercase text-sm'
					>
						{user?.name ?? 'Portfolio'}
					</Link>
					<p className='text-sm'>{user?.about}</p>
				</div>
				<div>
					<p>Contact Me</p>
					<div className='mt-2 text-sm flex flex-col gap-2'>
						{user?.phone ? (
							<Link
								href={`tel:${user.phone}`}
								className='flex items-center gap-2'
							>
								<Phone
									strokeWidth={1.5}
									size={20}
									className='shrink-0'
								/>
								<span>{user.phone}</span>
							</Link>
						) : null}
						{user?.email ? (
							<Link
								href={`mailto:${user.email}`}
								className='flex items-center gap-2'
							>
								<Mail
									strokeWidth={1.5}
									size={20}
									className='shrink-0'
								/>
								<span>{user.email}</span>
							</Link>
						) : null}
					</div>
				</div>
			</section>
			<section className='w-full max-w-4xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div>
					<p>Pages</p>
					<ul className='grid grid-cols-2 md:grid-cols-3 mt-2'>
						{FOOTER_NAVIGATION.map((item) => (
							<li key={`footer-nav-item-${item.url}`}>
								<Link
									href={item.url}
									target={item.target}
									className='text-xs underline underline-offset-2 hover:text-opacity-80 transition-all duration-300'
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					{socials && socials.length > 0 ? (
						<div className='flex flex-wrap gap-2 items-center w-full'>
							{socials.map((social, idx) => (
								<Button
									key={`sheet-social-${idx}`}
									asChild
									size={'icon'}
									variant={'outline'}
									title={social.title}
								>
									<Link
										href={social.url || '#'}
										target='_blank'
									>
										<social.Icon
											strokeWidth={1.5}
											size={20}
										/>
									</Link>
								</Button>
							))}
						</div>
					) : null}
					<p className='text-xs mt-4'>
						<span>
							Copyright &copy; {user?.name ?? 'Minimal Portfolio'}{' '}
							- 2023.
						</span>{' '}
						{GITHUB_URL ? (
							<span>
								Open source on{' '}
								<Link
									href={GITHUB_URL}
									target='_blank'
									className='underline underline-offset-2'
								>
									GitHub
								</Link>
							</span>
						) : null}{' '}
						{INCLUDE_POWERED_BY ? (
							<span>
								Powered by{' '}
								<Link
									href={''}
									target='_blank'
									className='underline underline-offset-2'
								>
									Next.js
								</Link>{' '}
								+{' '}
								<Link
									href={''}
									target='_blank'
									className='underline underline-offset-2 hover:text-blue-500 transition-all duration-300'
								>
									Tailwind CSS
								</Link>{' '}
								+{' '}
								<Link
									href={''}
									target='_blank'
									className='underline underline-offset-2'
								>
									Shadcn-ui
								</Link>{' '}
								+
								<Link
									href={''}
									target='_blank'
									className='underline underline-offset-2 hover:text-orange-500 transition-all duration-300'
								>
									Sanity
								</Link>
								.
							</span>
						) : null}
					</p>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
