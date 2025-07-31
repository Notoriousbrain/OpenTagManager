"use client";

import { TrpcClientProvider } from "./provider";

export default function TrpcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TrpcClientProvider>{children}</TrpcClientProvider>;
}
