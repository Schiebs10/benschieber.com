import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ========================================
  // USERS - Authenticated users
  // ========================================
  users: defineTable({
    // Authentication
    email: v.string(),
    name: v.string(),
    phone: v.optional(v.string()),
    timezone: v.optional(v.string()),

    // Peace Corps specific fields
    peaceCorpsStatus: v.optional(v.union(
      v.literal("applicant"),
      v.literal("accepted"),
      v.literal("serving"),
      v.literal("returned"),
      v.literal("other")
    )),
    targetCountry: v.optional(v.string()),
    targetLanguage: v.optional(v.union(
      v.literal("spanish"),
      v.literal("portuguese")
    )),
    languageLevel: v.optional(v.union(
      v.literal("complete_beginner"),
      v.literal("some_basics"),
      v.literal("intermediate"),
      v.literal("advanced")
    )),

    // Tracking
    createdAt: v.number(),
    lastLoginAt: v.optional(v.number()),
    source: v.optional(v.string()), // utm tracking
  })
    .index("by_email", ["email"]),

  // ========================================
  // LEADS - Email captures (pre-signup)
  // ========================================
  leads: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    source: v.string(), // "pdf_download", "webinar", "waitlist", "newsletter"
    leadMagnet: v.optional(v.string()), // which PDF they downloaded
    convertedToUser: v.boolean(),
    createdAt: v.number(),
    metadata: v.optional(v.any()), // UTM params, etc.
  })
    .index("by_email", ["email"]),

  // ========================================
  // INSTRUCTORS - Teachers/tutors
  // ========================================
  instructors: defineTable({
    name: v.string(),
    email: v.string(),
    bio: v.string(),
    shortBio: v.optional(v.string()),
    photoUrl: v.optional(v.string()),
    videoIntroUrl: v.optional(v.string()),
    languages: v.array(v.string()), // ["spanish", "portuguese"]
    specialties: v.array(v.string()), // ["Peace Corps prep", "Latin culture", "Conversational"]
    country: v.string(),
    isFounder: v.boolean(), // true for founding couple
    isActive: v.boolean(),
    calendarLink: v.optional(v.string()), // Cal.com or Calendly link
    displayOrder: v.number(),
  })
    .index("by_active", ["isActive"]),

  // ========================================
  // PROGRAMS - Lesson packages for purchase
  // ========================================
  programs: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    longDescription: v.optional(v.string()),

    // Pricing
    priceInCents: v.number(),
    currency: v.string(), // "usd"
    stripePriceId: v.optional(v.string()),
    stripeProductId: v.optional(v.string()),

    // Package details
    totalSessions: v.number(), // e.g., 4, 8, 12
    sessionDurationMinutes: v.number(), // 60
    format: v.union(
      v.literal("private"),
      v.literal("group"),
      v.literal("self_paced")
    ),

    features: v.array(v.string()),
    includes: v.array(v.string()), // "PDF materials", "WhatsApp support", etc.

    // Targeting
    targetAudience: v.string(), // "Peace Corps accepted volunteers"
    language: v.string(), // "spanish" or "portuguese"
    level: v.optional(v.string()), // "beginner", "all levels"

    // Display
    isActive: v.boolean(),
    isFeatured: v.boolean(),
    displayOrder: v.number(),
    badgeText: v.optional(v.string()), // "Most Popular", "Best Value"
  })
    .index("by_slug", ["slug"])
    .index("by_active", ["isActive"]),

  // ========================================
  // ENROLLMENTS - User's purchased programs
  // ========================================
  enrollments: defineTable({
    userId: v.id("users"),
    programId: v.id("programs"),

    // Payment
    stripePaymentIntentId: v.optional(v.string()),
    stripeSessionId: v.optional(v.string()),
    amountPaidCents: v.number(),

    // Sessions tracking
    totalSessions: v.number(),
    sessionsUsed: v.number(),
    sessionsRemaining: v.number(),

    status: v.union(
      v.literal("active"),
      v.literal("completed"),
      v.literal("refunded"),
      v.literal("expired")
    ),

    expiresAt: v.optional(v.number()), // Optional expiration date
    createdAt: v.number(),
    completedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_program", ["programId"])
    .index("by_status", ["status"]),

  // ========================================
  // SESSIONS - Scheduled lessons
  // ========================================
  sessions: defineTable({
    enrollmentId: v.id("enrollments"),
    userId: v.id("users"),
    instructorId: v.id("instructors"),

    scheduledAt: v.number(), // timestamp
    durationMinutes: v.number(),
    timezone: v.string(),

    // Video call
    meetingUrl: v.optional(v.string()), // Zoom/Google Meet link
    meetingId: v.optional(v.string()),

    status: v.union(
      v.literal("scheduled"),
      v.literal("completed"),
      v.literal("cancelled"),
      v.literal("no_show"),
      v.literal("rescheduled")
    ),

    // Notes
    instructorNotes: v.optional(v.string()),
    studentNotes: v.optional(v.string()),
    recordingUrl: v.optional(v.string()),

    // Feedback
    rating: v.optional(v.number()), // 1-5
    feedback: v.optional(v.string()),

    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_instructor", ["instructorId"])
    .index("by_enrollment", ["enrollmentId"])
    .index("by_scheduled", ["scheduledAt"]),

  // ========================================
  // PAYMENTS - Stripe payment tracking
  // ========================================
  payments: defineTable({
    userId: v.optional(v.id("users")),
    email: v.string(), // In case user doesn't exist yet

    stripePaymentIntentId: v.string(),
    stripeSessionId: v.optional(v.string()),
    stripeCustomerId: v.optional(v.string()),

    amountCents: v.number(),
    currency: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("succeeded"),
      v.literal("failed"),
      v.literal("refunded")
    ),

    // What they bought
    productType: v.union(
      v.literal("program"),
      v.literal("product")
    ),
    productId: v.string(), // ID of program or product

    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
  })
    .index("by_stripe_payment_intent", ["stripePaymentIntentId"])
    .index("by_stripe_session", ["stripeSessionId"])
    .index("by_user", ["userId"]),

  // ========================================
  // PRODUCTS - Digital products (e-books, guides)
  // ========================================
  products: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    longDescription: v.optional(v.string()),

    type: v.union(
      v.literal("ebook"),
      v.literal("guide"),
      v.literal("checklist"),
      v.literal("mini_course")
    ),

    priceInCents: v.number(), // 0 for free lead magnets
    stripePriceId: v.optional(v.string()),
    stripeProductId: v.optional(v.string()),

    // Files
    fileUrl: v.optional(v.string()), // PDF download link
    coverImageUrl: v.optional(v.string()),

    // Lead magnet settings
    isFree: v.boolean(),
    requiresEmail: v.boolean(), // true for lead magnets

    // Display
    isActive: v.boolean(),
    displayOrder: v.number(),
    badgeText: v.optional(v.string()),
  })
    .index("by_slug", ["slug"])
    .index("by_type", ["type"])
    .index("by_active", ["isActive"]),

  // ========================================
  // PRODUCT PURCHASES - Track digital product access
  // ========================================
  productPurchases: defineTable({
    userId: v.optional(v.id("users")),
    email: v.string(),
    productId: v.id("products"),

    paymentId: v.optional(v.id("payments")),

    downloadCount: v.number(),
    lastDownloadedAt: v.optional(v.number()),

    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_product", ["productId"])
    .index("by_user", ["userId"]),

  // ========================================
  // EMAIL SUBSCRIPTIONS - Newsletter/sequence tracking
  // ========================================
  emailSubscriptions: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    sequences: v.array(v.string()), // ["welcome", "peace-corps-prep", "nurture"]
    isActive: v.boolean(),
    unsubscribedAt: v.optional(v.number()),
    createdAt: v.number(),
  })
    .index("by_email", ["email"]),

  // ========================================
  // CONTACT MESSAGES - From contact form
  // ========================================
  contactMessages: defineTable({
    name: v.string(),
    email: v.string(),
    subject: v.optional(v.string()),
    message: v.string(),
    status: v.union(
      v.literal("new"),
      v.literal("read"),
      v.literal("replied")
    ),
    createdAt: v.number(),
  })
    .index("by_status", ["status"]),
});
