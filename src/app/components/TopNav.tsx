import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideNav from "./SideNav";

export default async function TopNav() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full flex justify-between items-center h-10 bg-orchid-white-50 border-b fixed p-4">
      <div>
        <h1 className="text-lg font-bold">SnapshotPro</h1>
      </div>

      {/* <div className="hidden max-sm:flex items-center">
        <button>
          <Menu />
        </button>
      </div> */}

      <div className="sm:hidden flex items-center">
        {" "}
        {/* Only show on small screens */}
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 w-[60%]">
            <div className="text-black">Test Content</div>
            <SideNav />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
