import { FaInstagramSquare, FaTiktok, FaYoutube } from "react-icons/fa";

import Link from "next/link";
export const Footer = () => {
  return (
    <>
      <footer className="mt-5 grid grid-cols-4 border-t-2 border-black/50 px-5 py-2">
        <div>
          <Link className="font-bold" href={"/"}>
            LOGO
          </Link>
          <p className="my-3 text-sm">email@email.com</p>
          <ul className="flex gap-x-3 text-sm">
            <li>
              <FaInstagramSquare />
            </li>
            <li>
              <FaTiktok />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-2 font-semibold">BRAND</p>
          <ul>
            <li className="mb-1">STORES</li>
            <li className="mb-1">CARRERS</li>
            <li className="mb-1">ABOUT US</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-2 font-semibold">STUFF</p>
          <ul>
            <li className="mb-1">LEGAL NOTICE</li>
            <li className="mb-1">PRIVACY POLICY</li>
            <li className="mb-1">TERMS</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-2 font-semibold">SUPPORT</p>
          <ul>
            <li className="mb-1">RETURNS</li>
            <li className="mb-1">FAQ</li>
            <li className="mb-1">CONTACT</li>
          </ul>
        </div>
      </footer>
      <div className="bg-black py-2 text-center">
        <p className="text-white">LOGO</p>
      </div>
    </>
  );
};
