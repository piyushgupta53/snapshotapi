import { Toaster } from "@/components/ui/toaster";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNav />
      <div className="flex h-screen">
        <SideNav />
        <main className="flex-1 bg-orchid-white-100/20">{children}</main>
        <Toaster />
      </div>
    </>
  );
}
