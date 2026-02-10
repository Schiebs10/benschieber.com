import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("packages").collect();
  },
});

export const get = query({
  args: { id: v.id("packages") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getByType = query({
  args: { type: v.union(v.literal("before-you-go"), v.literal("tour")) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("packages")
      .filter((q) => q.eq(q.field("type"), args.type))
      .collect();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    price: v.number(),
    features: v.array(v.string()),
    type: v.union(v.literal("before-you-go"), v.literal("tour")),
  },
  handler: async (ctx, args) => {
    const packageId = await ctx.db.insert("packages", {
      name: args.name,
      description: args.description,
      price: args.price,
      features: args.features,
      type: args.type,
      availableSessions: [],
    });
    return packageId;
  },
});
