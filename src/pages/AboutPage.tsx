import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: '🎯',
      title: 'Purpose-Driven Learning',
      description: 'Every lesson is designed with a real-world goal in mind. We don\'t teach abstract grammar—we prepare you for actual conversations you\'ll have.',
    },
    {
      icon: '🌍',
      title: 'Cultural Immersion',
      description: 'Language without culture is just vocabulary. We integrate cultural insights, communication styles, and social norms into every lesson.',
    },
    {
      icon: '🤝',
      title: 'Personal Connection',
      description: 'We take the time to understand your specific situation, destination, and goals. Your success is our success.',
    },
    {
      icon: '📈',
      title: 'Measurable Progress',
      description: 'We track your improvement and adjust our approach based on what\'s working. You\'ll know exactly how far you\'ve come.',
    },
  ];

  const credentials = [
    'Years of experience living and working in Latin America',
    'Professional language teaching certifications',
    'Native and near-native Spanish proficiency',
    'Deep understanding of Peace Corps preparation needs',
    'Background in cross-cultural communication',
    'Hundreds of students successfully prepared',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="hero py-16">
        <div className="hero-pattern"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <span className="badge badge-gold mb-4">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
            Meet Your Instructors
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A multicultural couple with a passion for languages, travel, and helping others succeed in their international journeys.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-cream-dark rounded-2xl p-12 text-center">
              <div className="text-9xl mb-4">👩‍🏫👨‍🏫</div>
              <p className="text-light italic">Photo placeholder</p>
            </div>
            <div>
              <h2 className="text-3xl font-display mb-6">Our Journey</h2>
              <div className="space-y-4 text-lg text-light">
                <p>
                  We met through our shared love of languages and international experiences.
                  One of us grew up in Latin America, the other fell in love with the region
                  after traveling extensively and eventually living there for years.
                </p>
                <p>
                  Through our own experiences—and watching friends and colleagues struggle
                  to communicate in their new environments—we realized there was a gap in
                  language preparation for people heading to Latin America, especially
                  Peace Corps volunteers.
                </p>
                <p>
                  Most language courses teach you textbook Spanish. But that's not what
                  you need when you're trying to connect with your host family, navigate
                  local markets, or build relationships in your community.
                </p>
                <p className="font-semibold text-[var(--color-text)]">
                  That's why we created Ben's Travel Prep—to give you the practical,
                  cultural, real-world language skills that actually matter.
                </p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="bg-cream-dark rounded-2xl p-8">
            <h3 className="text-2xl font-display mb-6 text-center">Our Credentials</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {credentials.map((credential) => (
                <div key={credential} className="flex items-center gap-3">
                  <span className="text-[var(--color-forest)] text-xl">✓</span>
                  <span>{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              What We Believe
            </h2>
            <p className="text-lg text-light max-w-2xl mx-auto">
              Our teaching philosophy is built on principles that make real-world difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card p-8">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Peace Corps Section */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Why We Focus on Peace Corps
            </h2>
          </div>

          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-light mb-6">
              Peace Corps volunteers face a unique challenge: they're dropped into communities
              where they need to build real relationships and make meaningful contributions—often
              in languages they're just learning.
            </p>
            <p className="text-lg text-light mb-6">
              Generic language courses don't prepare you for this. They teach you how to order
              coffee or ask for directions. But they don't teach you how to:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Have a heartfelt conversation with your host family',
                'Navigate cultural misunderstandings with grace',
                'Explain your work and build community trust',
                'Understand local humor, idioms, and communication styles',
                'Handle unexpected situations with confidence',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[var(--color-forest)] text-xl mt-1">→</span>
                  <span className="text-light">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-light">
              We've seen too many volunteers arrive underprepared and spend their first months
              struggling instead of contributing. Our mission is to change that—one volunteer at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section bg-terracotta">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl text-white/20 mb-6">"</div>
          <blockquote className="text-2xl md:text-3xl font-display text-white mb-8 leading-relaxed">
            The lessons weren't just about Spanish—they were about understanding how to
            connect with people. That made all the difference when I arrived in my community.
          </blockquote>
          <div className="text-white/90">
            <p className="font-semibold">— Former Peace Corps Volunteer</p>
            <p className="text-sm">Costa Rica, 2023</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-light mb-8 max-w-2xl mx-auto">
            Whether you're a Peace Corps volunteer, applicant, or traveler heading to
            Latin America, we'd love to help you prepare.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/programs" className="btn btn-primary btn-lg">
              View Programs
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
