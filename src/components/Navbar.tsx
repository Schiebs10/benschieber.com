import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isDesktop = useMediaQuery('(min-width: 768px)');



  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Programs', id: 'programs' },
    { name: 'About', id: 'about' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        pointerEvents: 'none' // Allow clicking through outside the bar
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1152px', // max-w-6xl
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(29, 41, 81, 0.1)', // forest/10
          borderRadius: '9999px',
          padding: '0.75rem 2rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          pointerEvents: 'auto', // Re-enable clicks
          transition: 'all 0.3s ease'
        }}
      >

        {/* Logo Text */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-bold text-lg text-forest tracking-tight hover:text-terracotta transition-colors shrink-0"
          style={{
            textDecoration: 'none',
            color: '#1D2951', // Forest color
            fontSize: '1.25rem',
            fontWeight: 700
          }}
        >
          Ben's Travel Prep
        </Link>

        {/* Desktop Nav - Horizontal List */}
        {isDesktop ? (
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }
                }}
                style={{
                  cursor: 'pointer',
                  color: '#1D2951',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  transition: 'background-color 0.2s'
                }}
                className="hover:bg-forest/5 hover:text-terracotta"
              >
                {item.name}
              </a>
            ))}
          </div>
        ) : null}

        {/* CTA Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {isDesktop ? (
            <Link
              to="/booking/starter"
              className="btn btn-primary"
              style={{
                backgroundColor: '#1D2951',
                color: '#FDF5E6',
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.875rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              Start Now
            </Link>
          ) : (
            /* Mobile menu button */
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#1D2951',
                padding: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {!isDesktop && isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '5rem',
            left: '1rem',
            right: '1rem',
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '1rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(29, 41, 81, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            pointerEvents: 'auto',
            zIndex: 40
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  scrollToSection(item.id);
                }
                setIsOpen(false);
              }}
              style={{
                padding: '0.75rem 1rem',
                textAlign: 'center',
                color: '#1D2951',
                textDecoration: 'none',
                fontWeight: 500,
                borderRadius: '0.5rem'
              }}
              className="hover:bg-forest/5"
            >
              {item.name}
            </a>
          ))}
          <div style={{ height: '1px', backgroundColor: 'rgba(29, 41, 81, 0.1)', margin: '0.5rem 0' }}></div>
          <Link
            to="/booking/starter"
            style={{
              backgroundColor: '#1D2951',
              color: '#FDF5E6',
              textAlign: 'center',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 600
            }}
            onClick={() => setIsOpen(false)}
          >
            Start Now
          </Link>
        </div>
      )}
    </nav>
  );
}
