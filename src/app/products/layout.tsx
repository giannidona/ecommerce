import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../../app/globals.css";
import { Navbar, Footer } from "@/components";

const geistSans = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ecommerce - products",
  description: "normal ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <div className="w-[90%] mx-auto mt-15 md:w-[80%]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
