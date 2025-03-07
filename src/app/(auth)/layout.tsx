import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../../app/globals.css";
import { Navbar, Footer } from "@/components";
import Image from "next/image";

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
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <div className="mx-auto mt-30 grid grid-cols-2 w-[90%] md:w-[80%]">
          <div className="">{children}</div>
          <Image
            src={
              "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1587&auto=format&fit=crop"
            }
            alt="awd"
            className="h-full w-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <Footer />
      </body>
    </html>
  );
}
