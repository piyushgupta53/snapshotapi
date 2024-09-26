import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import PlaygroundComponent from "@/app/components/PlaygroundComponent";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Playground() {
  const session = await getServerSession(authOptions);

  const apiKey = await prisma.apiKey.findFirst({
    where: {
      userId: session?.user.id,
    },
    select: { key: true },
  });

  if (!apiKey) {
    return;
  }

  return <PlaygroundComponent apiKey={apiKey?.key} />;
}
