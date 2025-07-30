"use client";

import { trpc } from "../../utils/trpc";

export default function HomePage() {
  const { isLoading, error } = trpc.hello.useQuery({ name: "OTM" });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="p-2 flex justify-center items-center w-full h-screen">
      <h1 className="text-4xl text-center font-bold">Welcome To Open Tag Manager</h1>
    </main>
  );
}
