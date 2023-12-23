// ./nextjs-app/sanity/lib/queries.ts

import { groq } from 'next-sanity';

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all posts
export const postsQuery = groq`*[_type == "post"]{
  ..., "slug": slug.current, "image": mainImage.asset->url, "alt": mainImage.alt, categories[]->{..., "slug": slug.current}, author->
} | order(publishedAt desc) | order(featured asc)`;

// Get all featured posts
export const featuredPostsQuery = groq`*[_type == "post" && featured == true]{
..., "slug": slug.current, "image": mainImage.asset->url, "alt": mainImage.alt, categories[]->{..., "slug": slug.current}, author->
} | order(publishedAt desc)`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
  ..., "slug": slug.current, "image": mainImage.asset->url, "alt": mainImage.alt, body, author->{"image": image.asset->url, "alt": image.alt, name, "slug": slug.current}, categories[]->{title, "slug": slug.current}
}`;

// Get all FAQs
export const faqsQuery = groq`*[_type == "faq"]{ ... } | order(order asc)`;

// Get the main portfolio user
export const mainPortfolioUserQuery = groq`*[_type == "author" && isMain == true][0]{ 
    ..., "image": image.asset->url, "alt": image.alt, "slug": slug.current
  }`;
