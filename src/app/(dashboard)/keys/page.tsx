import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Keys from "@/app/components/ApiKey";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import React from "react";

export default async function ApiKeyPage() {
  const session = await getServerSession(authOptions);

  const apiKeyData = await prisma.apiKey.findFirst({
    where: {
      userId: session?.user.id,
    },
    select: {
      key: true,
    },
  });

  return <Keys apiKey={apiKeyData?.key} />;
}
