import HamburgerMenu from '@/components/HamburgerMenu';
import Link from 'next/link';

export default function BlogPage() {
  // Placeholder blog posts - will be fetched from Sanity
  const posts = [
    {
      id: 1,
      title: 'How I Improved My HYROX Time by 23%',
      excerpt: 'The exact training strategies and mindset shifts that took me from 1:40 to 1:16 in three years.',
      date: '2025-10-15',
      slug: 'hyrox-improvement-strategy'
    },
    {
      id: 2,
      title: '5 Common HYROX Training Mistakes',
      excerpt: 'Learn from my experience and avoid these pitfalls that cost me valuable race time.',
      date: '2025-10-10',
      slug: 'common-hyrox-mistakes'
    },
    {
      id: 3,
      title: 'Race Day Nutrition Guide',
      excerpt: 'What to eat before, during, and after your HYROX race for optimal performance.',
      date: '2025-10-05',
      slug: 'race-day-nutrition'
    }
  ];

  return (
    <>
      <HamburgerMenu />
      
      <div className="min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <Link href="/" className="text-white/60 hover:text-white mb-4 inline-block">
              ← Back to Gallery
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Training{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-white/70">
              Insights from the Pro Division
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block glass-dark rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">
                    {post.title}
                  </h2>
                  <span className="text-red-400 text-sm">{post.date}</span>
                </div>
                <p className="text-white/70 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-red-500 font-semibold hover:text-red-400">
                  Read More →
                </span>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 glass-dark rounded-2xl p-8 text-center">
            <p className="text-white/60">
              More articles coming soon. Follow me on Instagram for daily training tips.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

