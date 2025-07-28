import { initTRPC } from "@trpc/server";
import superjson from "superjson";

const t = initTRPC.create({
  transformer: superjson, // ✅ this is required
});

export const router = t.router;
export const publicProcedure = t.procedure;
