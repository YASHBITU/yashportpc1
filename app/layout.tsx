import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalError from "../components/GlobalError";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Rathod | Premium Conversion Engineer",
  description: "I engineer high-performance digital assets for founders who are tired of high-traffic sites that don't print revenue.",
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233b82f6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black grain`}>
        <GlobalError>
          {children}
        </GlobalError>
      </body>
    </html>
  );
}