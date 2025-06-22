import { ConvexError } from "convex/values";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createProject = mutation({
  args: {
    name: v.string(),
    language: v.string(),
    files: v.array(v.object({ name: v.string(), content: v.string() })),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new ConvexError("Not authenticated");

    const user = await ctx.db
      .query("users")
      .withIndex("by_user_id")
      .filter((q) => q.eq(q.field("userId"), identity.subject))
      .first();

    if (!user) throw new Error("User not found");
    if (!user.isPro) throw new ConvexError("Pro subscription required");

    const id = await ctx.db.insert("projects", {
      userId: identity.subject,
      name: args.name,
      language: args.language,
      files: args.files,
    });

    return id;
  },
});

export const getProjects = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];

    return await ctx.db
      .query("projects")
      .withIndex("by_user_id")
      .filter((q) => q.eq(q.field("userId"), identity.subject))
      .collect();
  },
});
