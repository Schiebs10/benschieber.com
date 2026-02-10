import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("locals").collect();
  },
});

export const get = query({
  args: { id: v.id("locals") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getByCountry = query({
  args: { country: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("locals")
      .filter((q) => q.eq(q.field("country"), args.country))
      .collect();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    country: v.string(),
    bio: v.string(),
    photoURL: v.optional(v.string()),
    introVideoURL: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const localId = await ctx.db.insert("locals", {
      name: args.name,
      country: args.country,
      bio: args.bio,
      photoURL: args.photoURL,
      introVideoURL: args.introVideoURL,
      verified: false,
    });
    return localId;
  },
});
