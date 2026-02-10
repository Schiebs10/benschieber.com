import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';

export default function BookingPage() {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    peaceCorpsStatus: '',
    targetCountry: '',
    languageLevel: '',
    goals: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const programs: Record<string, { name: string; sessions: number; price: number; description: string }> = {
    starter: {
      name: 'Starter Package',
      sessions: 4,
      price: 149,
      description: 'Perfect for testing the waters',
    },
    standard: {
      name: 'Standard Package',
      sessions: 8,
      price: 279,
      description: 'Our most popular package',
    },
    intensive: {
      name: 'Intensive Package',
      sessions: 12,
      price: 399,
      description: 'Comprehensive preparation',
    },
  };

  const program = programs[packageId || 'standard'] || programs['standard'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Connect to Stripe Checkout
    setTimeout(() => {
      // For now, redirect to dashboard
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <section className="hero py-12">
        <div className="hero-pattern"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="badge badge-gold mb-4">Checkout</span>
          <h1 className="text-3xl md:text-4xl font-display text-white mb-2">
            {program.name}
          </h1>
          <p className="text-white/80">{program.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-xl font-display mb-6">Your Information</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="label">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="label">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Phone (for WhatsApp support)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="label">Peace Corps Status</label>
                      <select
                        value={formData.peaceCorpsStatus}
                        onChange={(e) => setFormData({ ...formData, peaceCorpsStatus: e.target.value })}
                        className="input"
                      >
                        <option value="">Select status</option>
                        <option value="applicant">Applicant</option>
                        <option value="accepted">Accepted Volunteer</option>
                        <option value="serving">Currently Serving</option>
                        <option value="returned">Returned Volunteer</option>
                        <option value="other">Other / Not Peace Corps</option>
                      </select>
                    </div>
                    <div>
                      <label className="label">Target Country (if known)</label>
                      <input
                        type="text"
                        value={formData.targetCountry}
                        onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value })}
                        className="input"
                        placeholder="e.g., Peru, Ecuador"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Current Spanish Level</label>
                    <select
                      value={formData.languageLevel}
                      onChange={(e) => setFormData({ ...formData, languageLevel: e.target.value })}
                      className="input"
                    >
                      <option value="">Select your level</option>
                      <option value="complete_beginner">Complete Beginner</option>
                      <option value="some_basics">Know Some Basics</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <div>
                    <label className="label">What are your main goals? (Optional)</label>
                    <textarea
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      className="input"
                      rows={3}
                      placeholder="Tell us about your goals, timeline, or any specific areas you want to focus on..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : `Continue to Payment - $${program.price}`}
                  </button>

                  <p className="text-center text-sm text-light">
                    You'll be redirected to our secure payment page
                  </p>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="card p-6 sticky top-24">
                <h3 className="font-semibold mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>{program.name}</span>
                    <span className="font-semibold">${program.price}</span>
                  </div>
                  <div className="flex justify-between text-light text-sm">
                    <span>{program.sessions} sessions × 60 min</span>
                    <span>${Math.round(program.price / program.sessions)}/session</span>
                  </div>
                </div>
                <div className="border-t border-[var(--color-border)] pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-[var(--color-forest)]">${program.price}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-sm">What's Included:</h4>
                  <ul className="feature-list text-sm">
                    <li>{program.sessions} private lessons (60 min each)</li>
                    <li>PDF learning materials</li>
                    <li>Session recordings</li>
                    <li>WhatsApp support</li>
                    <li>Flexible scheduling</li>
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-[var(--color-cream-dark)] rounded-lg">
                  <p className="text-sm text-center">
                    <span className="font-semibold">100% Satisfaction Guarantee</span>
                    <br />
                    <span className="text-light">Cancel anytime for unused sessions</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link to="/programs" className="text-[var(--color-forest)] font-medium hover:underline">
              ← Back to Programs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
