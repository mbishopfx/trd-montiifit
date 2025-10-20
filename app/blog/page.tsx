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
      
      <div className="min-h-screen bg-[#f5f5f5] px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <Link href="/" className="text-gray-600 hover:text-gray-900 mb-6 inline-block font-semibold transition-colors">
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight uppercase">
              Training{' '}
              <span style={{ color: '#e8998d' }}>
                Blog
              </span>
            </h1>
            <p className="text-lg text-gray-600 font-semibold">
              Insights from the Pro Division
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#e8998d] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
                    {post.title}
                  </h2>
                  <span className="text-sm font-bold shrink-0" style={{ color: '#e8998d' }}>{post.date}</span>
                </div>
                <p className="text-gray-600 mb-4 font-medium">
                  {post.excerpt}
                </p>
                <span className="font-black uppercase tracking-wider text-sm" style={{ color: '#e8998d' }}>
                  Read More →
                </span>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
            <p className="text-gray-600 font-medium">
              More articles coming soon. Follow me on Instagram for daily training tips.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

