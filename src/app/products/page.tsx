import { Card } from "@/components";
export default function PorductsPage() {
  return (
    <div className="flex">
      <div className="mr-15">
        <h1 className="text-2xl font-light sm:text-3xl mb-3">All Products</h1>
        <div>Filter system</div>
      </div>
      <div className="grid grid-cols-4 gap-x-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
