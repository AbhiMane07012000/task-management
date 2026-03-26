import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ReactQueryProvider from "@/components/providers/ReactQueryProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Management App",
  description: "Responsive task management authentication pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <html lang="en">
      <body>
        <ReactQueryProvider>       
          {children}
          <ToastContainer />
        </ReactQueryProvider>
      </body>
    </html>
    );
}
