import { useState } from 'react';
import Footer from '../components/Footer';

export default function ResourcesPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadedResources, setDownloadedResources] = useState<string[]>([]);

  const resources = [
    {
      id: 'peace-corps-checklist',
      title: 'Before Peace Corps Checklist',
      description: 'A comprehensive language preparation checklist to ensure you\'re ready before departure.',
      icon: '✅',
      type: 'checklist',
      pages: '3 pages',
      popular: true,
    },
    {
      id: 'essential-phrases',
      title: '100 Essential Spanish Phrases',
      description: 'The most important phrases you\'ll need for everyday conversations in Latin America.',
      icon: '💬',
      type: 'ebook',
      pages: '12 pages',
    },
    {
      id: 'cultural-guide',
      title: 'Latin American Cultural Guide',
      description: 'Understanding cultural norms, communication styles, and social etiquette.',
      icon: '🌎',
      type: 'guide',
      pages: '15 pages',
    },
    {
      id: 'vocabulary-workbook',
      title: 'Peace Corps Vocabulary Workbook',
      description: 'Vocabulary exercises focused on community development, health, education, and agriculture.',
      icon: '📚',
      type: 'workbook',
      pages: '20 pages',
    },
  ];

  const handleDownload = async (resourceId: string) => {
    setSelectedResource(resourceId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedResource) return;

    setIsSubmitting(true);
    // TODO: Connect to Convex lead capture
    setTimeout(() => {
      setDownloadedResources([...downloadedResources, selectedResource]);
      setSelectedResource(null);
      setIsSubmitting(false);
      // In production, this would trigger the actual download
    }, 1000);
  };

  const isDownloaded = (resourceId: string) => downloadedResources.includes(resourceId);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="hero py-16">
        <div className="hero-pattern"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <span className="badge badge-gold mb-4">Free Downloads</span>
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
            Free Resources
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Download our free guides, checklists, and materials to kickstart your
            Spanish learning journey before Peace Corps or your next trip to Latin America.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className={`card p-6 ${resource.popular ? 'border-2 border-[var(--color-forest)]' : ''}`}
              >
                {resource.popular && (
                  <span className="badge badge-forest mb-4">Most Popular</span>
                )}
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{resource.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-light mb-3">{resource.description}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="tag">{resource.type}</span>
                      <span className="text-sm text-light">{resource.pages}</span>
                    </div>
                    {isDownloaded(resource.id) ? (
                      <button className="btn btn-outline btn-sm" disabled>
                        ✓ Downloaded
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDownload(resource.id)}
                        className="btn btn-primary btn-sm"
                      >
                        Download Free
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup CTA */}
      <section className="section bg-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
            Get More Free Resources
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our email list for exclusive tips, new resources, and Peace Corps
            preparation advice delivered to your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Newsletter signup
              alert('Thanks for subscribing!');
            }}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input flex-1"
                required
              />
              <button type="submit" className="btn btn-gold">
                Subscribe
              </button>
            </div>
            <p className="text-white/60 text-sm mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>

      {/* More Coming Section */}
      <section className="section bg-cream-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display mb-4">
            More Resources Coming Soon
          </h2>
          <p className="text-lg text-light mb-8">
            We're constantly creating new materials to help you prepare. Check back
            regularly or subscribe to be notified when new resources are available.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: '🎧', title: 'Audio Practice Lessons' },
              { icon: '🎥', title: 'Video Tutorials' },
              { icon: '📝', title: 'Grammar Worksheets' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-medium text-light">{item.title}</p>
                <span className="text-sm text-[var(--color-terracotta)]">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {selectedResource && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-display mb-2">
              Download Your Free Resource
            </h3>
            <p className="text-light mb-6">
              Enter your email to receive the download link instantly.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="label">Name (optional)</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="label">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedResource(null)}
                  className="btn btn-outline flex-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Get Download'}
                </button>
              </div>
              <p className="text-xs text-light text-center mt-4">
                By downloading, you agree to receive occasional emails about our programs.
                Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
