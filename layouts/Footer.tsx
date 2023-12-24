import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import { validateAndReturnUserSocials } from '@/lib/portfolio';
import { FOOTER_NAVIGATION } from '@/constants/navigation';

type FooterProps = React.ComponentProps<'footer'> & {
	user: Author;
};

const Footer: React.FC<FooterProps> = ({ user }) => {
	const socials = validateAndReturnUserSocials(user);
	return (
		<footer className='p-4'>
			<section className='w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				<div>
					<Link
						href='/'
						className='text-slate-500 hover:text-black transition-all duration-300 uppercase text-sm'
					>
						{user?.name ?? 'Portfolio'}
					</Link>
					<p className='text-sm'>{user?.about}</p>
					{socials && socials.length > 0 ? (
						<div className='flex flex-wrap gap-2 mt-4 items-center w-full'>
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
				</div>
				<div className='lg:col-span-2'>
					<p>Pages</p>
					<ul className='grid grid-cols-2 mt-4'>
						{FOOTER_NAVIGATION.map((item) => (
							<li key={`footer-nav-item-${item.url}`}>
								<Button asChild variant={'link'}>
									<Link
										href={item.url}
										target={item.target}
										className='text-sm'
									>
										{item.name}
									</Link>
								</Button>
							</li>
						))}
					</ul>
				</div>
				<div>
					<p>Contact Me</p>
					<div className='mt-4'>
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
			<section className='w-full max-w-4xl mx-auto'></section>
		</footer>
	);
};

export default Footer;
