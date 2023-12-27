import React from 'react';
import { mainPortfolioUserQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { TERMS_AND_CONDITIONS } from '@/constants/legal';

const TermsAndConditionsPage = async () => {
	const user = await sanityFetch<Author>({ query: mainPortfolioUserQuery });
	return (
		<main className='w-full p-4'>
			<section className='w-full max-w-4xl mx-auto'>
				<h1 className='text-2xl'>Terms & Conditions</h1>
				<p className='text-slate-500 text-lg mt-2'>
					Effective Date: 28th Dec. 2023
				</p>
				<h2 className='text-slate-500 text-lg'>
					Welcome to {user?.name ?? 'Minimal Portfolio'}&apos;s
					website. By accessing and using this website, you agree to
					comply with and be bound by these Terms and Conditions.
					Please read the following terms carefully.
				</h2>
			</section>
			<section className='w-full max-w-4xl mx-auto mt-8'>
				<ul className='list-disc ml-4'>
					{TERMS_AND_CONDITIONS.map((toc, index) => (
						<li key={`toc-${index} block`}>
							<h3 className='font-medium'>{toc.title}</h3>
							<ul className='ml-4'>
								{toc.descriptions.map((desc, index2) => (
									<li key={`toc-${index}-${index2}`}>
										{desc}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
				<p className='mt-4'>
					By using this website, you acknowledge that you have read,
					understood, and agreed to these Terms and Conditions. If you
					do not agree to these terms, please do not use this website.
				</p>
			</section>
		</main>
	);
};

export default TermsAndConditionsPage;
