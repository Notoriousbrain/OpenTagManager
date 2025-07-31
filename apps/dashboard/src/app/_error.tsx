"use client";
export default function Error({ error }: { error: Error }) {
  return <div>App Error: {error.message}</div>;
}
