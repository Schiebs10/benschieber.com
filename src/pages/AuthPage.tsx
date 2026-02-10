import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Connect to Clerk authentication
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-[var(--color-forest)] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">P</span>
          </div>
          <span className="font-display text-xl font-semibold text-[var(--color-text)]">
            Passport Language
          </span>
        </Link>

        <div className="card p-8">
          <h2 className="text-2xl font-display text-center mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-center text-light mb-6">
            {isLogin ? 'Log in to access your lessons' : 'Start your language journey today'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
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
            )}
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
              <label className="label">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="input"
                placeholder="••••••••"
                required
              />
            </div>

            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-sm text-[var(--color-forest)] hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary w-full mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Please wait...' : isLogin ? 'Log In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[var(--color-text)] hover:text-[var(--color-forest)]"
            >
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <span className="font-semibold underline">
                {isLogin ? 'Sign up' : 'Log in'}
              </span>
            </button>
          </div>

          {/* Social Login Placeholder */}
          <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
            <p className="text-center text-sm text-light mb-4">Or continue with</p>
            <button
              type="button"
              className="btn btn-outline w-full"
              onClick={() => {
                // TODO: Google OAuth via Clerk
              }}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
          </div>
        </div>

        <p className="text-center text-light text-sm mt-6">
          By signing up, you agree to our{' '}
          <Link to="/terms" className="text-[var(--color-forest)] hover:underline">
            Terms
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-[var(--color-forest)] hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
