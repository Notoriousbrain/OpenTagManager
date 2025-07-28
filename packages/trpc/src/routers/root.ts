import { router, publicProcedure } from "../index";
import { z } from "zod";

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .query(({ input }) => {
      return { greeting: `Hello, ${input.name}!` };
    }),
});

// 👇 Inferred type for client
export type AppRouter = typeof appRouter;
