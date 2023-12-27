import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type HomeProps = React.ComponentProps<'section'> & {
	user: Author;
};

const Hero: React.FC<HomeProps> = ({ user }) => {
	return (
		<section className=''>
			<h1 className='text-2xl'>
				{user?.name ? `Hi! I'm ${user.name}` : 'Minimal Portfolio'}
			</h1>
			<h2 className='text-lg mt-4'>
				{user?.about ??
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo nobis quam assumenda. Illum repellendus veritatis vero, blanditiis accusantium nesciunt?'}
			</h2>
			<Link
				href='/about'
				className='underline underline-offset-2 flex items-center gap-2'
			>
				<span>Learn more about me</span>
				<ArrowRight strokeWidth={1.5} size={20} />
			</Link>
		</section>
	);
};

export default Hero;
