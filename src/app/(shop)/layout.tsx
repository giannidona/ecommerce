export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* {NAVBAR} */}
      {children}
      {/* {FOOTER} */}
    </div>
  );
}
