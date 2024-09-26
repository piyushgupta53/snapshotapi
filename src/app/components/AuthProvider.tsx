"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { useEffect } from "react";

function SessionDebug() {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log("Session in SessionDebug:", session);
    console.log("Status in SessionDebug:", status);
  }, [session, status]);

  return null;
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <SessionDebug />
      {children}
    </SessionProvider>
  );
}
