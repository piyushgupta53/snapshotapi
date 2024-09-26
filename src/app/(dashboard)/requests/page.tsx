import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import RequestLogs from "@/app/components/RequestLogs";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

export default async function Requests() {
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
