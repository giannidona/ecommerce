import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="relative">
        <div className="flex items-center justify-between py-3">
          <div className="flex gap-x-5">
            <Link href={"/"}>SHOP</Link>
            <Link href={"/"}>CONTACT</Link>
          </div>
          <div>
            <Link className="text-xl font-bold" href={"/"}>
              LOGO
            </Link>
          </div>
          <div className="flex gap-x-5">
            <p>Search</p>
            <p>Cart (0)</p>
          </div>
        </div>
      </nav>
    </>
  );
};
