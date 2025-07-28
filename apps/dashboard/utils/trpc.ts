"use client";

import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../packages/trpc/src/routers/root";

export const trpc = createTRPCReact<AppRouter>();
