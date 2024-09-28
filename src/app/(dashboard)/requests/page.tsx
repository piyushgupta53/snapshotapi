import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import RequestLogs from "@/app/components/RequestLogs";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

// New component for loading skeleton
function LoadingSkeleton() {
  return (
    <div className="px-4 sm:px-8 animate-pulse py-20">
      <div className="h-8 w-32 bg-gray-200 rounded mb-8"></div>
      <div className="border rounded-lg p-4 shadow-sm">
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-200 rounded mb-2"></div>
        ))}
      </div>
    </div>
  );
}

// Async component to fetch and display requests
async function RequestsContent() {
  const session = await getServerSession(authOptions);

  const requests = await prisma.screenshot.findMany({
    where: {
      userId: session?.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return <RequestLogs requests={requests} />;
}

export default function Requests() {
  return (
    <div className="sm:pl-60 min-h-screen">
      <div className="w-full">
        <Suspense fallback={<LoadingSkeleton />}>
          <RequestsContent />
        </Suspense>
      </div>
    </div>
  );
}
