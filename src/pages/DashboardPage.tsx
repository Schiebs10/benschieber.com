import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function DashboardPage() {
  // Mock data - will be replaced with Convex queries
  const user = {
    name: 'Sarah',
    email: 'sarah@example.com',
  };

  const enrollment = {
    programName: 'Standard Package',
    totalSessions: 8,
    sessionsUsed: 3,
    sessionsRemaining: 5,
    status: 'active',
    startedAt: '2024-01-15',
  };

  const upcomingSessions = [
    {
      id: '1',
      date: '2024-02-05',
      time: '10:00 AM EST',
      instructor: 'Maria',
      topic: 'Conversational Practice: Daily Routines',
      meetingUrl: 'https://zoom.us/j/123456789',
    },
    {
      id: '2',
      date: '2024-02-12',
      time: '10:00 AM EST',
      instructor: 'Maria',
      topic: 'Peace Corps Scenarios: Community Introductions',
      meetingUrl: null, // Not yet scheduled
    },
  ];

  const pastSessions = [
    {
      id: '3',
      date: '2024-01-29',
      topic: 'Basic Greetings and Introductions',
      recordingUrl: '#',
    },
    {
      id: '4',
      date: '2024-01-22',
      topic: 'Numbers and Basic Conversations',
      recordingUrl: '#',
    },
    {
      id: '5',
      date: '2024-01-15',
      topic: 'Assessment & Learning Plan',
      recordingUrl: '#',
    },
  ];

  const materials = [
    { name: 'Vocabulary List: Greetings', type: 'PDF', downloadUrl: '#' },
    { name: 'Practice Exercises: Week 1', type: 'PDF', downloadUrl: '#' },
    { name: 'Cultural Notes: Latin American Etiquette', type: 'PDF', downloadUrl: '#' },
    { name: 'Audio Practice: Basic Phrases', type: 'MP3', downloadUrl: '#' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <section className="bg-[var(--color-forest)] py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display text-white mb-1">
                Welcome back, {user.name}!
              </h1>
              <p className="text-white/80">
                {enrollment.sessionsRemaining} sessions remaining in your {enrollment.programName}
              </p>
            </div>
            <Link
              to="/programs"
              className="btn btn-gold btn-sm hidden sm:inline-flex"
            >
              Book More Sessions
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="max-w-6xl mx-auto">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card p-4 text-center">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-3xl font-display text-[var(--color-forest)]">
                {enrollment.sessionsUsed}
              </div>
              <div className="text-sm text-light">Sessions Completed</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-3xl font-display text-[var(--color-forest)]">
                {enrollment.sessionsRemaining}
              </div>
              <div className="text-sm text-light">Sessions Remaining</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-3xl mb-2">📅</div>
              <div className="text-3xl font-display text-[var(--color-forest)]">
                {upcomingSessions.length}
              </div>
              <div className="text-sm text-light">Upcoming Sessions</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-3xl mb-2">📄</div>
              <div className="text-3xl font-display text-[var(--color-forest)]">
                {materials.length}
              </div>
              <div className="text-sm text-light">Materials Available</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Sessions */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-display">Upcoming Sessions</h2>
                  <a href="#" className="text-[var(--color-forest)] text-sm font-medium hover:underline">
                    Schedule New Session
                  </a>
                </div>

                {upcomingSessions.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingSessions.map((session, index) => (
                      <div
                        key={session.id}
                        className={`p-4 rounded-lg ${
                          index === 0 ? 'bg-[var(--color-forest)] text-white' : 'bg-[var(--color-cream-dark)]'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className={`text-sm ${index === 0 ? 'text-white/70' : 'text-light'}`}>
                              {session.date} at {session.time}
                            </div>
                            <div className={`font-semibold ${index === 0 ? 'text-white' : ''}`}>
                              {session.topic}
                            </div>
                            <div className={`text-sm ${index === 0 ? 'text-white/70' : 'text-light'}`}>
                              with {session.instructor}
                            </div>
                          </div>
                          {session.meetingUrl ? (
                            <a
                              href={session.meetingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`btn btn-sm ${index === 0 ? 'btn-gold' : 'btn-primary'}`}
                            >
                              Join
                            </a>
                          ) : (
                            <span className="text-sm text-light">Link coming soon</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-light">
                    <p className="mb-4">No upcoming sessions scheduled</p>
                    <a href="#" className="btn btn-primary">
                      Schedule Your Next Session
                    </a>
                  </div>
                )}
              </div>

              {/* Past Sessions */}
              <div className="card p-6">
                <h2 className="text-xl font-display mb-6">Past Sessions</h2>
                <div className="space-y-3">
                  {pastSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-3 bg-[var(--color-cream-dark)] rounded-lg"
                    >
                      <div>
                        <div className="font-medium">{session.topic}</div>
                        <div className="text-sm text-light">{session.date}</div>
                      </div>
                      <a
                        href={session.recordingUrl}
                        className="text-[var(--color-forest)] text-sm font-medium hover:underline"
                      >
                        View Recording →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Card */}
              <div className="card p-6">
                <h3 className="font-semibold mb-4">Your Progress</h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>{enrollment.programName}</span>
                    <span className="font-semibold">
                      {Math.round((enrollment.sessionsUsed / enrollment.totalSessions) * 100)}%
                    </span>
                  </div>
                  <div className="h-3 bg-[var(--color-cream-dark)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--color-forest)]"
                      style={{
                        width: `${(enrollment.sessionsUsed / enrollment.totalSessions) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <p className="text-sm text-light">
                  {enrollment.sessionsUsed} of {enrollment.totalSessions} sessions completed
                </p>
              </div>

              {/* Materials */}
              <div className="card p-6">
                <h3 className="font-semibold mb-4">Your Materials</h3>
                <div className="space-y-3">
                  {materials.map((material) => (
                    <a
                      key={material.name}
                      href={material.downloadUrl}
                      className="flex items-center gap-3 p-3 bg-[var(--color-cream-dark)] rounded-lg hover:bg-[var(--color-cream)] transition"
                    >
                      <span className="text-xl">
                        {material.type === 'PDF' ? '📄' : '🎵'}
                      </span>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{material.name}</div>
                        <div className="text-xs text-light">{material.type}</div>
                      </div>
                      <span className="text-[var(--color-forest)]">↓</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full"
                  >
                    💬 Message Your Instructor
                  </a>
                  <Link to="/resources" className="btn btn-outline w-full">
                    📚 Browse Free Resources
                  </Link>
                  <Link to="/programs" className="btn btn-primary w-full">
                    ➕ Add More Sessions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
