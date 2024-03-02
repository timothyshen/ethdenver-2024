import type { Metadata } from "next";
import { type ReactNode } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Providers } from "@/app/ProviderWrap";
import { WalletContextProvider } from "@/contexts/WalletContext";



export const metadata: Metadata = {
  title: "Create your Model IP",
  description: "Create your Model IP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (

    <html lang="en">
      <body>
        <Web3Providers>
          <WalletContextProvider>
            {children}
          </WalletContextProvider>
        </Web3Providers>
      </body>
    </html>

  );
}
