"use client";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => console.error(error), [error]);
  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-center">
      <h2 className="text-2xl text-white mb-4">Something went wrong</h2>
      <pre className="text-sm text-red-400 mb-4">{error.message}</pre>
      <button className="px-4 py-2 bg-red-600 rounded" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
