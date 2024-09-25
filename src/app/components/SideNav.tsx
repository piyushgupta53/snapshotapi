"use client";

import { Gamepad2, KeyRound, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/keys", icon: KeyRound, label: "API Keys" },
    { href: "/playground", icon: Gamepad2, label: "Playground" },
  ];

  return (
    <div className="hidden sm:block w-60 h-screen bg-studio-100 fixed left-0 top-0 overflow-y-auto">
      <div className="flex flex-col p-4">
        <div className="mb-10">
          <h1 className="text-xl font-semibold">Screenshot</h1>
        </div>

        <div className="space-y-2">
          {navItems.map((item) => (
            <div
              key={item.href}
              className={`p-2 rounded-md hover:cursor-pointer ${
                pathname === item.href
                  ? "bg-studio-300/80"
                  : "hover:bg-studio-200/50"
              }`}
            >
              <Link href={item.href}>
                <ul
                  className={`font-medium flex gap-2 items-center ${
                    pathname === item.href ? "text-studio-950" : "text-gray-600"
                  }`}
                >
                  <item.icon />
                  {item.label}
                </ul>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
