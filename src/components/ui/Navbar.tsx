"use client";

import { Menu, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-black h-[85px] flex align-middle items-center">
      <div className="w-[90%] items-center md:w-[80%] mx-auto flex justify-between">
        <div>
          <h2 className="text-3xl">LUXE</h2>
        </div>
        <div className="flex md:hidden gap-x-5">
          <button>
            <Search size={20} />
          </button>
          <Link className="flex items-center" href={"/"}>
            <User size={20} />
          </Link>
          <button>
            <ShoppingBag size={20} />
          </button>
          <Menu size={25} onClick={() => setOpen((prev) => !prev)} />
        </div>
        {open && (
          <div className="z-10 absolute w-[100%] h-full left-0 top-[85px] bg-white backdrop-invert-25">
            <div className="w-[90%] mx-auto flex text-2xl justify-end text-slate-700 my-5">
              <ul className="flex-end text-end">
                <li className="mb-5">
                  <Link href={""}>Home</Link>
                </li>
                <li>
                  <Link href={""}>Shop</Link>
                </li>
              </ul>
            </div>
            <div className="w-[90%] mx-auto flex items-center justify-center gap-x-10"></div>
          </div>
        )}
        <div className="hidden md:flex items-center text-slate-700">
          <ul className="flex gap-x-5">
            <li>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={""}>Shop</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <div className="flex items-center gap-x-10">
            <button>
              <Search size={20} />
            </button>
            <Link href={"/"}>
              <User size={20} />
            </Link>
            <button>
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
