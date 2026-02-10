# Passport Language Experience

A React + TypeScript web application for booking guided cultural and language experiences with local guides from Central and South America.

## Features

- **Homepage** with hero section and clear CTAs
- **Programs/Packages** page showcasing two main offerings:
  - Before You Go (country-specific crash courses)
  - Central + South America Tour (multi-country experience)
- **Booking System** with session selection and calendar
- **User Dashboard** for managing sessions and accessing replays
- **How It Works** section explaining the user journey
- **About Section** with host bio and testimonials
- **FAQ** section for common questions
- **Mobile-first responsive design** optimized for all devices

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Backend/Database**: Convex (handles authentication, database, and real-time updates)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   ├── HowItWorks.tsx
│   ├── AboutSection.tsx
│   └── FAQ.tsx
├── pages/              # Route pages
│   ├── HomePage.tsx
│   ├── PackagesPage.tsx
│   ├── BookingPage.tsx
│   ├── DashboardPage.tsx
│   └── AuthPage.tsx
├── App.tsx             # Main app component with routing
├── main.tsx            # Entry point with Convex provider
└── index.css           # Global styles + Tailwind directives

convex/                 # Convex backend
├── schema.ts           # Database schema
├── packages.ts         # Package queries/mutations
├── sessions.ts         # Session management
├── users.ts            # User management
├── bookings.ts         # Booking logic
└── locals.ts           # Local guide management
```

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- A Convex account (sign up at https://convex.dev)

### Installation

1. Clone the repository
```bash
cd passport-language-app
```

2. Install dependencies
```bash
npm install
```

3. Set up Convex

```bash
npx convex dev
```

This will:
- Prompt you to log in to Convex (or create an account)
- Create a new Convex project
- Generate your deployment URL
- Start the Convex dev server

4. Create a `.env` file in the root directory

```bash
cp .env.example .env
```

5. Update `.env` with your Convex deployment URL (provided after running `npx convex dev`)

```
VITE_CONVEX_URL=https://your-deployment-name.convex.cloud
```

6. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Database Schema

The Convex database includes the following tables:

- **users**: User accounts and their bookings
- **packages**: Available program offerings (Before You Go, Tour)
- **sessions**: Scheduled live sessions with date/time
- **locals**: Verified local guides with bios and credentials
- **bookings**: User session bookings with payment status
- **questions**: Q&A submissions for sessions

See `convex/schema.ts` for the complete schema definition.

## Development

### Run development server
```bash
npm run dev
```

### Run Convex backend
```bash
npx convex dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Key Features Implementation

### Mobile-First Design
All components are built with mobile-first responsive design using Tailwind CSS breakpoints.

### Booking Flow
1. User selects a package on the Packages page
2. Chooses a session time on the Booking page
3. Enters personal information
4. Completes booking (payment integration coming soon)
5. Receives confirmation and can access session from Dashboard

### Session Management
- Users can view upcoming sessions
- Access live session links
- Watch session replays
- Download cultural resources and phrase sheets

## Future Enhancements

- [ ] Payment integration (Stripe)
- [ ] Email notifications (Resend or similar)
- [ ] Video session hosting integration
- [ ] Admin dashboard for managing sessions and locals
- [ ] User reviews and ratings
- [ ] Map visualization of countries
- [ ] Blog/news section for cultural tips
- [ ] Community chat (Discord/Slack integration)

## License

Private - All rights reserved
