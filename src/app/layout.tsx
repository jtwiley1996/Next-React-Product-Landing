import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";



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
      <body className="font-mono relative">
        <div className="absolute inset-0 z-0 grid-overlay"></div>
        <header className="text-white p-4 w-[80%] mx-auto pt-9 flex justify-between items-center relative z-10">
          <nav>
            <ul className="flex space-x-4 opacity-75">
              <li className="flex items-center space-x-2">
                <Link href="/">Home</Link>
                <FontAwesomeIcon icon={faHouse} className="icon" href="/"/>
              </li>
              <li className="flex items-center space-x-2">
                <Link href="/about">About</Link>
                <FontAwesomeIcon icon={faLightbulb} className="icon" href="/about"/>
              </li>
              <li className="flex items-center space-x-2">
                <Link href="/contact">Contact</Link>
                <FontAwesomeIcon icon={faAddressBook} className="icon" href="/contact"/>
              </li>
            </ul>
          </nav>
          <a
            href="learn-more"
            className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-100 opacity-75"
          >
            Learn More
          </a>
        </header>
        <main className="flex-grow relative z-10">{children}</main>
        <footer className="text-center p-4 relative z-10">
          <p>© 2024 Smart Home Inc. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
