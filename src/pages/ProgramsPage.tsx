import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function ProgramsPage() {
  const programs = [
    {
      id: 'starter',
      name: 'Starter',
      sessions: 4,
      price: 149,
      pricePerSession: 37,
      description: 'Perfect for testing the waters or a quick language refresher',
      longDescription: 'Ideal for those who want to get a taste of our teaching style or need a quick boost before departure.',
      features: [
        '4 private lessons (60 minutes each)',
        'PDF vocabulary materials',
        'Email support between sessions',
        'Personalized lesson planning',
        'Session recordings available',
      ],
      bestFor: 'Language refreshers, short timelines',
      color: 'var(--color-terracotta)',
    },
    {
      id: 'standard',
      name: 'Standard',
      sessions: 8,
      price: 279,
      pricePerSession: 35,
      description: 'Our most popular package for comprehensive preparation',
      longDescription: 'The sweet spot for most Peace Corps volunteers. Enough time to build solid foundations and practice real scenarios.',
      features: [
        '8 private lessons (60 minutes each)',
        'Complete PDF materials library',
        'WhatsApp support between sessions',
        'Cultural preparation guide',
        'Personalized lesson planning',
        'Session recordings available',
        'Progress tracking & feedback',
      ],
      bestFor: 'Peace Corps volunteers with 2-3 months before departure',
      featured: true,
      color: 'var(--color-forest)',
    },
    {
      id: 'intensive',
      name: 'Intensive',
      sessions: 12,
      price: 399,
      pricePerSession: 33,
      description: 'Comprehensive preparation for maximum confidence',
      longDescription: 'Our most thorough program for those who want to arrive fully prepared and confident in their Spanish abilities.',
      features: [
        '12 private lessons (60 minutes each)',
        'Complete PDF materials library',
        'Priority WhatsApp support',
        'Cultural preparation guide',
        'Mock interview practice',
        'Real-world scenario training',
        'Personalized lesson planning',
        'Session recordings available',
        'Progress tracking & feedback',
        'Certificate of completion',
      ],
      bestFor: 'Complete beginners or those wanting maximum preparation',
      color: 'var(--color-gold)',
    },
  ];

  const faqs = [
    {
      question: 'What platform do you use for lessons?',
      answer: 'We conduct lessons via Zoom or Google Meet, whichever you prefer. All you need is a stable internet connection and a device with a camera and microphone.',
    },
    {
      question: 'How do I schedule my lessons?',
      answer: 'After purchasing, you\'ll get access to our scheduling calendar where you can book sessions at times that work for you. We offer flexible scheduling across multiple time zones.',
    },
    {
      question: 'Can I reschedule a lesson?',
      answer: 'Yes! You can reschedule with 24 hours notice at no charge. We understand plans change, especially when preparing for Peace Corps.',
    },
    {
      question: 'What if I\'m a complete beginner?',
      answer: 'That\'s perfectly fine! Many of our students start from zero. We tailor each lesson to your current level and goals.',
    },
    {
      question: 'Do the lessons expire?',
      answer: 'Your lesson package is valid for 6 months from purchase. This gives you plenty of flexibility to complete your sessions.',
    },
    {
      question: 'What\'s included in the PDF materials?',
      answer: 'You\'ll receive vocabulary lists, grammar guides, conversation scripts, cultural notes, and practice exercises tailored to Peace Corps scenarios.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="hero py-16">
        <div className="hero-pattern"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <span className="badge badge-gold mb-4">Private Spanish Lessons</span>
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
            Choose Your Program
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            One-on-one Spanish lessons tailored to your Peace Corps preparation timeline and goals.
            All packages include personalized instruction and support materials.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className={program.featured ? 'pricing-card-featured' : 'pricing-card'}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-display mb-2">{program.name}</h2>
                  <p className="text-light text-sm mb-4">{program.description}</p>
                  <div className="text-5xl font-display mb-1" style={{ color: program.color }}>
                    ${program.price}
                  </div>
                  <p className="text-sm text-light">
                    {program.sessions} sessions · ${program.pricePerSession}/session
                  </p>
                </div>

                {/* Features */}
                <ul className="feature-list mb-6">
                  {program.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                {/* Best For */}
                <div className="bg-[var(--color-cream-dark)] rounded-lg p-4 mb-6">
                  <p className="text-sm">
                    <span className="font-semibold">Best for: </span>
                    {program.bestFor}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  to={`/booking/${program.id}`}
                  className={`btn w-full ${program.featured ? 'btn-primary' : 'btn-outline'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--color-cream-dark)] rounded-full px-6 py-3">
              <span className="text-2xl">✓</span>
              <span className="font-medium">100% Satisfaction Guarantee · Cancel anytime for unused sessions</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              What's Included in Every Lesson
            </h2>
            <p className="text-lg text-light max-w-2xl mx-auto">
              Every session is tailored to your specific needs and Peace Corps destination
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Personalized Curriculum',
                description: 'Lessons tailored to your specific Peace Corps assignment and language level',
              },
              {
                icon: '📹',
                title: 'Live Video Sessions',
                description: '60-minute one-on-one lessons via Zoom or Google Meet',
              },
              {
                icon: '📚',
                title: 'Learning Materials',
                description: 'PDFs, vocabulary lists, and practice exercises for each lesson',
              },
              {
                icon: '💬',
                title: 'Ongoing Support',
                description: 'WhatsApp or email support to answer questions between sessions',
              },
              {
                icon: '🎬',
                title: 'Session Recordings',
                description: 'Recordings of your lessons to review and practice anytime',
              },
              {
                icon: '🌎',
                title: 'Cultural Context',
                description: 'Real-world scenarios and cultural insights for your destination',
              },
              {
                icon: '📊',
                title: 'Progress Tracking',
                description: 'Regular feedback on your improvement and areas to focus on',
              },
              {
                icon: '🕐',
                title: 'Flexible Scheduling',
                description: 'Book sessions at times that work for your schedule and time zone',
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-light text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              How It Works
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                num: '1',
                title: 'Choose Your Package',
                description: 'Select the program that fits your timeline and goals. Not sure? We recommend the Standard package for most Peace Corps volunteers.',
              },
              {
                num: '2',
                title: 'Complete Your Profile',
                description: 'Tell us about your Peace Corps assignment, current Spanish level, and specific goals so we can personalize your lessons.',
              },
              {
                num: '3',
                title: 'Schedule Your Sessions',
                description: 'Use our online calendar to book lessons at times that work for you. Sessions are typically scheduled weekly.',
              },
              {
                num: '4',
                title: 'Start Learning',
                description: 'Join your first lesson via Zoom or Google Meet. We\'ll assess your level and create a customized learning plan.',
              },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-[var(--color-forest)] text-white flex items-center justify-center font-display text-xl flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-cream-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-light">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-light mb-4">Have more questions?</p>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-6">
            Ready to Start Your Language Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of Peace Corps volunteers who prepared with us.
            Don't wait until you're in-country to wish you had started earlier.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking/standard" className="btn btn-gold btn-lg">
              Get Started with Standard
            </Link>
            <Link to="/contact" className="btn btn-lg" style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}>
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
