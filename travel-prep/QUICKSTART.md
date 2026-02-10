# Quick Start Guide

Get the Passport Language Experience app running in 5 minutes.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Convex Backend

```bash
npx convex dev
```

This will:
1. Open your browser to log in to Convex (or create a free account)
2. Create a new project
3. Give you a deployment URL
4. Start watching your Convex functions

Keep this terminal running!

## Step 3: Configure Environment

Create a `.env` file:

```bash
cp .env.example .env
```

Update `.env` with the deployment URL from Step 2:

```
VITE_CONVEX_URL=https://your-deployment-name.convex.cloud
```

## Step 4: Start Development Server

In a **new terminal** (keep Convex running):

```bash
npm run dev
```

## Step 5: Open Your Browser

Visit: `http://localhost:5173`

## What You'll See

- **Homepage**: Hero section with two main CTAs
- **Packages**: Two types of offerings (Before You Go & Tour)
- **Booking**: Session selection with calendar
- **Dashboard**: View upcoming sessions and replays
- **Auth**: Login/signup page (demo mode)

## Project Status

### ✅ Complete
- Full UI/UX for all pages
- Mobile-first responsive design
- Convex database schema
- Routing and navigation
- Mock data for demonstration

### 🚧 To Implement
- Actual Convex authentication
- Payment integration (Stripe)
- Email notifications
- Video session hosting
- Admin dashboard

## Testing the Flow

1. Click "Book Now" on homepage
2. Select a package (Mexico or Costa Rica)
3. Choose a session date/time
4. Fill in your info
5. Click "Complete Booking"
6. Visit the Dashboard to see your session

## Need Help?

Check the main README.md for detailed documentation, or review the code:

- `src/pages/` - All page components
- `src/components/` - Reusable UI components
- `convex/` - Backend schema and functions

Enjoy building!
