"use client";

import { Gamepad2, KeyRound, LayoutDashboard, ChartLine } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/playground", icon: Gamepad2, label: "Playground" },
    { href: "/requests", icon: ChartLine, label: "Requests" },
    { href: "/keys", icon: KeyRound, label: "API Keys" },
  ];

  return (
    <div className="hidden sm:block w-60 mt-10 h-screen bg-orchid-white-50 border-r fixed left-0 top-0 overflow-y-auto">
      <div className="flex flex-col p-4 mt-5">
        <div className="space-y-2">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="p-2 rounded-md hover:cursor-pointer relative hover:bg-persian-blue-200/30"
            >
              <Link href={item.href}>
                <ul
                  className={`font-medium flex gap-2 items-center ${
                    pathname === item.href
                      ? "text-persian-blue-950"
                      : "text-gray-600"
                  }`}
                >
                  <item.icon />
                  {item.label}
                </ul>
              </Link>
              {pathname === item.href && (
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-persian-blue-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
