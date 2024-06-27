import { Navbar } from "@/_components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      {/* {FOOTER} */}
    </div>
  );
}
