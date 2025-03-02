import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../../app/globals.css";

const geistSans = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ecommerce",
  description: "normal ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
