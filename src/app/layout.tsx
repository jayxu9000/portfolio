import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jay Xu",
  description: "Portfolio by Jay Xu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="favicon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white flex flex-col h-full`}
      >
        <header className="flex justify-center p-4 bg-gray-800 flex-none fixed w-full top-0 z-10">
          <nav className="flex justify-between w-full max-w-md">
            {/* Home Icon Area */}
            <a href="/" className="text-white flex-1 flex justify-center hover:bg-gray-700 rounded-lg p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
              </svg>
            </a>
            {/* Experience Icon Area */}
            <a href="/experience" className="text-white flex-1 flex justify-center hover:bg-gray-700 rounded-lg p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h12M4 12h12M4 18h12M2 6h0.01M2 12h0.01M2 18h0.01"
                />
              </svg>
            </a>
            {/* Projects Icon Area */}
            <a href="/projects" className="text-white flex-1 flex justify-center hover:bg-gray-700 rounded-lg p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h4l2 2h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
                />
              </svg>
            </a>
            {/* Skills Icon Area */}
            <a href="/skills" className="text-white flex-1 flex justify-center hover:bg-gray-700 rounded-lg p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21.794 6.27a1 1 0 00-1.497-1.326l-3.458 3.457-1.415-1.414L18.882 3.53a1 1 0 00-1.326-1.497 5.002 5.002 0 00-6.173 6.829L3 18.243V21h2.757l8.383-8.383a5.002 5.002 0 006.829-6.172z"
                />
              </svg>
            </a>
          </nav>
        </header>
        <main className="flex-grow flex items-start justify-center p-4 overflow-y-auto w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
