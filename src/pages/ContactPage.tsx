import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Connect to Convex contact form
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const faqs = [
    {
      question: 'How quickly can I start lessons?',
      answer: 'Most students can begin within 1-2 weeks of signing up. We\'ll work with your schedule to find times that work for you.',
    },
    {
      question: 'What if I need to reschedule?',
      answer: 'We understand plans change. You can reschedule with 24 hours notice at no charge.',
    },
    {
      question: 'Do you offer Portuguese lessons?',
      answer: 'Yes! While our primary focus is Spanish, we also offer Portuguese lessons for those heading to Brazil or Portuguese-speaking countries.',
    },
    {
      question: 'Can I try a lesson before committing?',
      answer: 'We offer a free 15-minute consultation call where you can meet your instructor and discuss your goals.',
    },
    {
      question: 'What technology do I need?',
      answer: 'Just a computer or tablet with a camera and microphone, and a stable internet connection. We use Zoom or Google Meet.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="hero py-16">
        <div className="hero-pattern"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <span className="badge badge-gold mb-4">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions about our programs? Want to learn more before signing up?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-display mb-6">Send Us a Message</h2>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="label">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="input"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="programs">Questions about programs</option>
                      <option value="scheduling">Scheduling questions</option>
                      <option value="pricing">Pricing questions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input"
                      rows={5}
                      placeholder="Tell us about your situation and what you're looking for..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="bg-[var(--color-cream-dark)] rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-light mb-4">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn btn-outline"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-display mb-6">Other Ways to Reach Us</h2>

              {/* WhatsApp */}
              <div className="card p-6 mb-6 border-2 border-[var(--color-forest)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">💬</div>
                  <div>
                    <h3 className="font-semibold text-lg">WhatsApp (Fastest)</h3>
                    <p className="text-light">Usually respond within a few hours</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  Message on WhatsApp
                </a>
              </div>

              {/* Email */}
              <div className="card p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-light">hello@passportlanguage.com</p>
                  </div>
                </div>
                <a
                  href="mailto:hello@passportlanguage.com"
                  className="btn btn-outline w-full"
                >
                  Send Email
                </a>
              </div>

              {/* Free Consultation */}
              <div className="card p-6 bg-[var(--color-cream-dark)]">
                <h3 className="font-semibold text-lg mb-2">Free Consultation Call</h3>
                <p className="text-light mb-4">
                  Not sure which program is right for you? Schedule a free 15-minute
                  consultation to discuss your goals and get personalized recommendations.
                </p>
                <Link to="/programs" className="btn btn-secondary w-full">
                  Schedule Free Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-cream-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-light">
              Quick answers to common questions
            </p>
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
            <p className="text-light mb-4">
              Still have questions?
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
