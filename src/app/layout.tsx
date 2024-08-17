import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mono">
        <header className="text-white p-4 w-[80%] mx-auto mt-9 flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4 opacity-75">
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
          <a
            href="#learn-more"
            className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-100"
          >
            Learn More
          </a>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="text-center p-4">
          <p>© 2024 Smart Home Inc. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

