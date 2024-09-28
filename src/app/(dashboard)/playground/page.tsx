import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import PlaygroundComponent from "@/app/components/PlaygroundComponent";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import React, { Suspense } from "react";
import { cache } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a Skeleton component

// Cached API key lookup
const getApiKey = cache(async (userId: string) => {
  const apiKey = await prisma.apiKey.findUnique({
    where: { userId },
    select: { key: true },
  });
  return apiKey?.key;
});

// Loading skeleton component
function PlaygroundSkeleton() {
  return (
    <div className="sm:pl-60 min-h-screen">
      <div className="px-4 sm:px-8 py-20 w-full">
        <Skeleton className="h-8 w-40 mb-10" />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-10 w-40" />
          </div>
          <div className="w-full lg:w-1/2">
            <Skeleton className="h-40 w-full mb-8" />
            <Skeleton className="h-80 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Async component to fetch API key
async function PlaygroundContent() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return <div>Please log in to access the playground.</div>;
  }

  const apiKey = await getApiKey(session.user.id);

  if (!apiKey) {
    return <div>No API key found. Please generate an API key first.</div>;
  }

  return <PlaygroundComponent apiKey={apiKey} />;
}

export default function Playground() {
  return (
    <Suspense fallback={<PlaygroundSkeleton />}>
      <PlaygroundContent />
    </Suspense>
  );
}
