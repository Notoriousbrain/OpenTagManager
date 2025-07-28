import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
// Update the import path below to the correct relative path if needed
import { appRouter } from "../../../../../../../packages/trpc/src/routers/root";
import { createTRPCContext } from "../../../../../../../packages/trpc/src/context";

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });
};

export { handler as GET, handler as POST };
