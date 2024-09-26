import SideNav from "../components/SideNav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <SideNav />
      <main className="flex-1 bg-orchid-white-100/20">{children}</main>
    </div>
  );
}
