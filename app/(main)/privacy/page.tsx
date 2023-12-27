import React from 'react';
import { mainPortfolioUserQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { PRIVACY_POLICY } from '@/constants/legal';
import { GITHUB_URL } from '@/constants/portfolio';

const PrivacyPolicyPage = async () => {
	const user = await sanityFetch<Author>({ query: mainPortfolioUserQuery });
	return (
		<main className='w-full p-4'>
			<section className='w-full max-w-4xl mx-auto'>
				<h1 className='text-2xl'>Privacy Policy</h1>
				<p className='text-slate-500 text-lg mt-2'>
					Effective Date: 28th Dec. 2023
				</p>
				<h2 className='text-slate-500 text-lg'>
					At this website ({user?.name ?? 'Minimal Portfolio'}
					&apos;s), your privacy is of utmost importance to us. This
					Privacy Policy outlines how we collect, use, disclose, and
					protect your personal information when you visit our website
					or interact with us through our contact form. By using our
					website and providing your information, you consent to the
					practices described in this policy.
				</h2>
			</section>
			<section className='w-full max-w-4xl mx-auto mt-8'>
				<ul className='list-disc ml-4'>
					{PRIVACY_POLICY.map((pp, index) => (
						<li key={`pp-${index} block`}>
							<h3 className='font-medium'>{pp.title}</h3>
							<ul className='ml-4'>
								{pp.descriptions.map((desc, index2) => (
									<li key={`pp-${index}-${index2}`}>
										{desc}
									</li>
								))}
							</ul>
						</li>
					))}
					{[
						{
							title: 'Contact Us',
							descriptions: [
								`If you have any questions or concerns regarding our Privacy Policy, please contact us at ${
									user?.email ?? GITHUB_URL
								}.`,
							],
						},
					].map((pp) => (
						<li key={`pp-contact`}>
							<h3 className='font-medium'>{pp.title}</h3>
							<ul className='ml-4'>
								{pp.descriptions.map((desc, index2) => (
									<li key={`pp-contact-${index2}`}>{desc}</li>
								))}
							</ul>
						</li>
					))}
				</ul>
				<p className='mt-4'>
					By using our website, you acknowledge that you have read,
					understood, and agreed to these Privacy Policies. If you do
					not agree to these terms, please do not use our website.
				</p>
			</section>
		</main>
	);
};

export default PrivacyPolicyPage;
