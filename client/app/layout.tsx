import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import { Geist } from "next/font/google";

import "./globals.css";

import ReactQueryProvider from "@/components/providers/ReactQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
 <html  lang="en">
      <body className={`${geistSans.variable} font-sans bg-gray-50 min-h-screen`}>
        <ReactQueryProvider>      
          {children}
          <ToastContainer />
        </ReactQueryProvider>
      </body>
    </html>
    );
}
