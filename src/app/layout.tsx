import type { Metadata } from "next";
import "./globals.css";

import { Space_Mono } from "next/font/google";
import AuthProvider from "./components/AuthProvider";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SnapshotPro",
  description: "API to capture screenshot of web pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={spaceMono.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
