import { Card } from "@/components";

type Prod = {
  id: string;
  name: string;
  price: number;
  tag: string;
  image: string;
};

export default async function PorductsPage() {
  const res = await fetch("http://localhost:3000/api/products", {
    method: "GET",
  });

  const data = await res.json();

  return (
    <div className="flex">
      <div className="mr-15">
        <h1 className="text-2xl font-light sm:text-3xl mb-3">All Products</h1>
        <div>Filter system</div>
      </div>
      <div className="grid grid-cols-4 gap-x-5">
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
    </div>
  );
}
