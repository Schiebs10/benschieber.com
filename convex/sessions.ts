import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("sessions").collect();
  },
});

export const getByPackage = query({
  args: { packageId: v.id("packages") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("sessions")
      .withIndex("by_package", (q) => q.eq("packageId", args.packageId))
      .collect();
  },
});

export const get = query({
  args: { id: v.id("sessions") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    packageId: v.id("packages"),
    dateTime: v.string(),
    localHostId: v.id("locals"),
    maxAttendees: v.number(),
    country: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const sessionId = await ctx.db.insert("sessions", {
      packageId: args.packageId,
      dateTime: args.dateTime,
      localHostId: args.localHostId,
      attendees: [],
      maxAttendees: args.maxAttendees,
      country: args.country,
    });
    return sessionId;
  },
});

export const addAttendee = mutation({
  args: {
    sessionId: v.id("sessions"),
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.sessionId);
    if (!session) throw new Error("Session not found");

    if (session.attendees.length >= session.maxAttendees) {
      throw new Error("Session is full");
    }

    await ctx.db.patch(args.sessionId, {
      attendees: [...session.attendees, args.userId],
    });
  },
});
