import React from 'react';
import { PortableText } from '@portabletext/react';
import SanityImage from '@/components/reusable/SanityImage';

type BodyProps = React.ComponentProps<'section'> & {
	user: Author;
};

const portableTextComponents = {
	types: {
		image: ({ value }: any) => {
			return <SanityImage {...value} />;
		},
	},
};

const Body: React.FC<BodyProps> = ({ user }) => {
	return (
		<section className='w-full max-w-4xl mx-auto mt-8 prose'>
			{user.bio && (
				<PortableText
					value={user.bio}
					components={portableTextComponents}
				/>
			)}
		</section>
	);
};

export default Body;
