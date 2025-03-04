import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-30 border-t border-t-black/50">
      <div className="w-[90%] mx-auto mt-5 md:w-[80%] md:grid md:grid-cols-4">
        <div className="mb-6">
          <p className="mb-3">SHOP</p>
          <ul className="text-slate-700 font-light">
            <li className="mb-2">
              <Link
                className="hover:text-black transition-all duration-150 ease-in-out"
                href={"/"}
              >
                All Products
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="hover:text-black transition-all duration-150 ease-in-out"
                href={"/"}
              >
                Collection
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="hover:text-black transition-all duration-150 ease-in-out"
                href={"/"}
              >
                Featured
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="hover:text-black transition-all duration-150 ease-in-out"
                href={"/"}
              >
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <p className="mb-3">INFORMATION</p>

          <ul className="text-slate-700 font-light">
            <li className="mb-2">
              <Link
                className="hover:text-black transition-all duration-150 ease-in-out"
                href={"/"}
              >
                About us
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="hover:text-black transition-all duration-150 ease-in-out"
                href={"/"}
              >
                Sustainability
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="hover:text-black transition-all duration-150 ease-in-out"
                href={"/"}
              >
                Terms & Conditions
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="hover:text-black transition-all duration-150 ease-in-out"
                href={"/"}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <p className="mb-3">CUSTOMER SERVICE</p>
          <ul className="text-slate-700 font-light">
            <li className="mb-2">
              <Link
                className="hover:text-black transition-all duration-150 ease-in-out"
                href={"/"}
              >
                Contact Us
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="hover:text-black transition-all duration-150 ease-in-out"
                href={"/"}
              >
                Shipping & Returns
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="hover:text-black transition-all duration-150 ease-in-out"
                href={"/"}
              >
                FAQ
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="hover:text-black transition-all duration-150 ease-in-out"
                href={"/"}
              >
                Product Care
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <p className="mb-3">CONNECT</p>
          <div className="flex gap-x-3 ">
            <Link href={"/"}>
              <Instagram className="text-slate-700" />
            </Link>
            <Link href={"/"}>
              <Facebook />
            </Link>
            <Link href={"/"}>
              <Youtube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
