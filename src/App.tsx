import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import BookingPage from './pages/BookingPage';
import DashboardPage from './pages/DashboardPage';
import AuthPage from './pages/AuthPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router basename="/travel-prep">
      <div className="min-h-screen bg-[var(--color-cream)]">
        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Booking & Auth */}
          <Route path="/booking/:packageId" element={<BookingPage />} />
          <Route path="/auth" element={<AuthPage />} />

          {/* Protected Pages (will add auth guard later) */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Legacy redirects - keep /packages working */}
          <Route path="/packages" element={<ProgramsPage />} />

          {/* FAQ redirects to contact page */}
          <Route path="/faq" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
