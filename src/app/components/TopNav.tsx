import React from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function TopNav() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full flex justify-between items-center h-10 bg-orchid-white-50 border-b fixed p-4">
      <div>
        <h1>ScreenshotAPI</h1>
      </div>

      <div className="w-8 h-8 rounded-full flex items-center">
        <Image
          src={session?.user.image!}
          width={24}
          height={24}
          alt="profile"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
