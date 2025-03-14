import React from "react";
import { Card } from "@/components";
import Link from "next/link";
import { MoveRight } from "lucide-react";

type Prod = {
  id: string;
  name: string;
  price: number;
  tag: string;
  image: string;
};

export default async function Collection() {
  const res = await fetch("http://localhost:3000/api/products", {
    method: "GET",
  });

  const data = await res.json();

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
        {data.data.map((prod: Prod) => (
          <Card
            key={prod.id}
            prodName={prod.name}
            prodPrice={prod.price}
            prodTag={prod.tag}
            prodImage={prod.image}
          />
        ))}
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
}
