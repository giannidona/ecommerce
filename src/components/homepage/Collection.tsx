import React from "react";
import { Card } from "@/components";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const Collection = () => {
  return (
    <section className="my-10">
      <div>
        <h2 className="text-4xl md:text-5xl font-light text-center mb-3 text-slate-700">
          Curated Collection
        </h2>
        <p className="text-center mb-10 font-light max-w-[550px] mx-auto">
          Discover our handpicked selection of exceptional pieces, each one
          chosen for its craftsmanship and timeless appeal.
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 2xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Link
        className="group flex items-center align-middle justify-center gap-x-3 w-fit mx-auto text-sm"
        href={"/"}
      >
        View all products{" "}
        <span className="group-hover:translate-x-1 transition-all duration-200 ease-in-out">
          <MoveRight size={20} />
        </span>
      </Link>
    </section>
  );
};
