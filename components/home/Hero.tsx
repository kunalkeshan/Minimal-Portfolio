import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type HomeProps = React.ComponentProps<'section'> & {
	user: Author;
};

const Hero: React.FC<HomeProps> = ({ user }) => {
	return (
		<section className='w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8'>
			<div>
				<h1 className='text-2xl'>
					{user?.name ?? 'Minimal Portfolio'}
				</h1>
				<h2 className='text-lg mt-2 text-slate-500 max-w-xl'>
					{user?.about ??
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo nobis quam assumenda. Illum repellendus veritatis vero, blanditiis accusantium nesciunt?'}
				</h2>
				<Link
					href='/about'
					className='underline underline-offset-2 flex items-center gap-2 mt-1 w-fit'
				>
					<span>Learn more about me</span>
					<ArrowRight strokeWidth={1.5} size={20} />
				</Link>
			</div>
			{user?.image ? (
				<div className='rounded overflow-hidden w-full max-w-xxs md:max-w-xxxs'>
					<Image
						src={user.image}
						alt={user?.name}
						width={100}
						height={100}
						priority
						unoptimized
						className='w-full h-auto object-cover'
					/>
				</div>
			) : null}
		</section>
	);
};

export default Hero;
