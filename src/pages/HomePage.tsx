import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLeadCapture = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Connect to Convex lead capture
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const programs = [
    {
      name: 'Starter',
      sessions: 4,
      price: 149,
      description: 'Perfect for testing the waters',
      features: ['4 private lessons (60 min each)', 'PDF materials included', 'Email support'],
    },
    {
      name: 'Standard',
      sessions: 8,
      price: 279,
      description: 'Our most popular package',
      features: ['8 private lessons (60 min each)', 'PDF materials included', 'WhatsApp support', 'Cultural preparation guide'],
      featured: true,
    },
    {
      name: 'Intensive',
      sessions: 12,
      price: 399,
      description: 'Comprehensive preparation',
      features: ['12 private lessons (60 min each)', 'All PDF materials', 'Priority WhatsApp support', 'Cultural preparation guide', 'Mock interview practice'],
    },
  ];

  const testimonials = [
    {
      quote: "The cultural context they provided was just as valuable as the language skills. I felt so much more prepared when I arrived in Peru.",
      name: "Sarah M.",
      role: "Peace Corps Volunteer, Peru",
    },
    {
      quote: "Unlike other Spanish classes, these lessons were tailored specifically for my Peace Corps service. The real-world scenarios made all the difference.",
      name: "Michael T.",
      role: "Peace Corps Volunteer, Ecuador",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="home" className="section bg-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZDI5NTEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLNHY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-terracotta mb-6">
                Peace Corps Language Preparation
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-forest mb-6 leading-tight">
                Prepare for Peace Corps.
                <br />
                <span className="text-terracotta">Speak Spanish with Confidence.</span>
              </h1>
              <p className="text-xl text-forest/90 mb-8 leading-relaxed">
                Private language lessons designed specifically for Peace Corps volunteers.
                Learn practical Spanish skills and cultural insights from instructors with
                real Latin American experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#programs" className="btn btn-primary btn-lg">
                  View Programs
                </a>
                <a href="#resources" className="btn btn-outline btn-lg">
                  Get Free Checklist
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="card-elevated p-8 bg-white border border-forest/10">
                <div className="text-6xl mb-4">🌎</div>
                <h3 className="text-2xl font-display text-forest mb-2">
                  "¿Cómo te puedo ayudar?"
                </h3>
                <p className="text-forest/80 mb-4">How can I help you?</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="badge badge-forest">Conversational Spanish</span>
                  <span className="badge badge-forest">Cultural Context</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section id="about" className="section bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Who Is This For?
            </h2>
            <p className="text-lg text-light max-w-2xl mx-auto">
              Our programs are designed for people preparing for meaningful international experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Peace Corps Accepted Volunteers',
                description: 'Get language-ready before you depart for your host country in Latin America',
              },
              {
                icon: '📝',
                title: 'Peace Corps Applicants',
                description: 'Strengthen your application and prepare for Spanish-language interviews',
              },
              {
                icon: '✈️',
                title: 'International Travelers',
                description: 'Travelers seeking authentic cultural immersion in Latin America',
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-terracotta mb-4">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-display mb-6">
                Language Lessons That Go Beyond Vocabulary
              </h2>
              <p className="text-lg text-light mb-8">
                We don't just teach Spanish words and grammar. We prepare you for real
                conversations in real situations you'll encounter as a Peace Corps volunteer
                or traveler in Latin America.
              </p>
              <ul className="space-y-4">
                {[
                  'Practical scenarios tailored to Peace Corps service',
                  'Cultural context and communication styles',
                  'Real-world vocabulary you\'ll actually use',
                  'One-on-one attention to your specific needs',
                  'Flexible scheduling across time zones',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-forest text-xl">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-elevated p-6 text-center">
                <div className="text-4xl font-display text-forest mb-2">100+</div>
                <p className="text-light">Volunteers Prepared</p>
              </div>
              <div className="card-elevated p-6 text-center">
                <div className="text-4xl font-display text-forest mb-2">15+</div>
                <p className="text-light">Countries Served</p>
              </div>
              <div className="card-elevated p-6 text-center">
                <div className="text-4xl font-display text-forest mb-2">4.9</div>
                <p className="text-light">Average Rating</p>
              </div>
              <div className="card-elevated p-6 text-center">
                <div className="text-4xl font-display text-forest mb-2">60min</div>
                <p className="text-light">Per Session</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section id="programs" className="section bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Choose Your Program
            </h2>
            <p className="text-lg text-light max-w-2xl mx-auto">
              Private Spanish lessons tailored to your timeline and goals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div
                key={program.name}
                className={program.featured ? 'pricing-card-featured' : 'pricing-card'}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-display mb-2">{program.name}</h3>
                  <p className="text-light mb-4">{program.description}</p>
                  <div className="text-4xl font-display text-forest mb-2">
                    ${program.price}
                  </div>
                  <p className="text-sm text-light">{program.sessions} sessions</p>
                </div>
                <ul className="feature-list mb-6">
                  {program.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link
                  to={`/booking/${program.name.toLowerCase()}`}
                  className={`btn w-full ${program.featured ? 'btn-primary' : 'btn-outline'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/programs" className="text-forest font-semibold hover:underline">
              View all program details →
            </Link>
          </div>
        </div>
      </section>

      {/* Free Checklist Lead Magnet */}
      <section id="resources" className="section bg-forest">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge badge-terracotta mb-6">Free Resource</span>
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
            Get Your Free "Before Peace Corps" Checklist
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Download our comprehensive language preparation checklist. Know exactly what
            to focus on before you depart for your Peace Corps service.
          </p>
          {!isSubmitted ? (
            <form onSubmit={handleLeadCapture} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input flex-1"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-secondary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Download Free'}
                </button>
              </div>
              <p className="text-white/60 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-semibold text-white mb-2">Check Your Inbox!</h3>
              <p className="text-white/80">
                Your checklist is on its way. Check your email for the download link.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              What Our Students Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="testimonial">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-light text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-forest mb-4">Meet Your Instructors</span>
              <h2 className="text-3xl md:text-4xl font-display mb-6">
                Taught by People Who've Been There
              </h2>
              <p className="text-lg text-light mb-6">
                We're a multicultural couple with deep roots in Latin America and a passion
                for helping others succeed in their international journeys. Our personal
                experience with Peace Corps preparation and Latin American culture means
                we understand exactly what you need to succeed.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="icon-circle text-lg">🌎</span>
                  <span>Years of experience living in Latin America</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="icon-circle text-lg">🎓</span>
                  <span>Professional language teaching certification</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="icon-circle text-lg">💬</span>
                  <span>Native and near-native Spanish speakers</span>
                </li>
              </ul>
              <Link to="/about" className="btn btn-outline">
                Learn More About Us
              </Link>
            </div>
            <div className="bg-cream-dark rounded-2xl p-8 text-center">
              <div className="text-8xl mb-4">👩‍🏫👨‍🏫</div>
              <p className="text-light">
                Your dedicated instructors ready to help you succeed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="section bg-terracotta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-6">
            Ready to Start Your Language Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait until you're in-country to realize you needed more preparation.
            Start your Spanish lessons today and arrive confident.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/programs" className="btn btn-white btn-lg">
              View Programs
            </Link>
            <Link to="/contact" className="btn btn-lg" style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
