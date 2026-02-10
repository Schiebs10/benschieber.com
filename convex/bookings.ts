import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    userId: v.id("users"),
    sessionId: v.id("sessions"),
    packageId: v.id("packages"),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.sessionId);
    if (!session) throw new Error("Session not found");

    if (session.attendees.length >= session.maxAttendees) {
      throw new Error("Session is full");
    }

    const bookingId = await ctx.db.insert("bookings", {
      userId: args.userId,
      sessionId: args.sessionId,
      packageId: args.packageId,
      bookingDate: new Date().toISOString(),
      status: "confirmed",
      paymentStatus: "pending",
    });

    await ctx.db.patch(args.sessionId, {
      attendees: [...session.attendees, args.userId],
    });

    const user = await ctx.db.get(args.userId);
    if (user && !user.bookings.includes(args.sessionId)) {
      await ctx.db.patch(args.userId, {
        bookings: [...user.bookings, args.sessionId],
      });
    }

    return bookingId;
  },
});

export const updatePaymentStatus = mutation({
  args: {
    bookingId: v.id("bookings"),
    paymentStatus: v.union(
      v.literal("pending"),
      v.literal("completed"),
      v.literal("failed")
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.bookingId, {
      paymentStatus: args.paymentStatus,
    });
  },
});

export const cancel = mutation({
  args: { bookingId: v.id("bookings") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.bookingId, {
      status: "cancelled",
    });
  },
});

export const getBySession = query({
  args: { sessionId: v.id("sessions") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("bookings")
      .withIndex("by_session", (q) => q.eq("sessionId", args.sessionId))
      .collect();
  },
});
