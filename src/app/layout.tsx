"use client";
import { Provider } from "@/components/wallet/Provider";
import "./globals.css";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <Toaster />
        <body className={space.className}>{children}</body>
      </Provider>
    </html>
  );
}
