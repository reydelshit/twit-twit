import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    const posts = ctx.prisma.post.findMany();
    console.log(posts, "dasdada"); // Log the result of the query
    return posts;
  }),
});
