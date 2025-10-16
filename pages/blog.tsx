// pages/blog.tsx
import Head from 'next/head';
import Link from 'next/link';

const posts = [
  { id: 'post-1', title: 'How AI is Changing Content Writing', summary: 'Discover the impact of AI on modern content creation...' },
  { id: 'post-2', title: 'SEO Tips for Better Rankings', summary: 'Learn effective SEO strategies to rank higher in search results...' },
  { id: 'post-3', title: 'Maximizing Productivity with AI Tools', summary: 'How to use AI tools to boost your productivity and writing process...' },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - SEOScribe</title>
        <meta name="description" content="SEOScribe Blog - SEO tips, AI writing guides, and more." />
        <link rel="canonical" href="https://www.seoscribe.com/blog" />
      </Head>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
