"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="bg-persian-blue-500 px-2 py-4 rounded-lg"
      >
        Sign In
      </button>
    </div>
  );
}
