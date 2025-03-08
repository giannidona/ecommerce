import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../../app/globals.css";
import { NavbarAdmin } from "@/components";

const geistSans = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ecommerce - admin dashboard",
  description: "normal ecommerce",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <div className="flex">
          <NavbarAdmin />
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
