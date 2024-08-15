import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Light Bulb Landing Page",
  description: "Showcasing the latest smart light bulb technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="text-white p-4 w-[90%] mx-auto">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="text-center p-4">
          <p>© 2024 Smart Home Inc. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
