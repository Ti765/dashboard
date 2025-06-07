import "@/styles/globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeInit } from "@/components/theme-init";

export const metadata: Metadata = {
  title: "Fiscal Tools",
  description: "Next-gen tax dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} font-sans bg-bg text-fg antialiased`}>
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
