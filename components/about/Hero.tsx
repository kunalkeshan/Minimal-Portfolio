import React from 'react';
import Image from 'next/image';

type HeroProps = React.ComponentProps<'section'> & {
	user: Author;
};

const Hero: React.FC<HeroProps> = ({ user }) => {
	return (
		<section className='w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
			<div>
				<h1 className='text-2xl'>
					{user?.name ? `I'm ${user.name}` : 'Minimal Portfolio'}
				</h1>
				<h2 className='text-lg mt-4'>
					{user?.about ??
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo nobis quam assumenda. Illum repellendus veritatis vero, blanditiis accusantium nesciunt?'}
				</h2>
			</div>
			<div className='flex items-center justify-center'>
				<div className='max-w-xs'>
					<Image
						src='/svgs/about.svg'
						width={100}
						height={100}
						className='w-full h-auto object-cover'
						alt=''
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
