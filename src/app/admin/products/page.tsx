import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fakeProducts = [
  {
    id: "PROD-1234",
    name: "Leather Crossbody Bag",
    price: 1250,
    inventory: 12,
    status: "In Stock",
    category: "Accessories",
    image: "https://images.unsplash.com/100x100/?bag",
  },
  {
    id: "PROD-2345",
    name: "Gold Statement Earrings",
    price: 850,
    inventory: 8,
    status: "In Stock",
    category: "Jewelry",
    image: "https://images.unsplash.com/100x100/?earrings",
  },
  {
    id: "PROD-3456",
    name: "Cashmere Wrap Coat",
    price: 2100,
    inventory: 3,
    status: "Low Stock",
    category: "Outerwear",
    image: "https://images.unsplash.com/100x100/?coat",
  },
  {
    id: "PROD-5678",
    name: "Leather Ankle Boots",
    price: 950,
    inventory: 0,
    status: "Out Of Stock",
    category: "Footwear",
    image: "https://images.unsplash.com/100x100/?boots",
  },
];

export default function ProductsAdminPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-light">Products List</h1>
          <p className="font-light text-sm">
            Manage your product catalog, inventory, and pricing.
          </p>
        </div>
        <Link
          className="bg-black text-white rounded px-3 py-2"
          href={"/admin/products/add-product"}
        >
          + Add product
        </Link>
      </div>
      <div className="mt-10">
        <input
          className="border border-gray-300 px-3 py-2 rounded w-full"
          type="text"
          placeholder="Search products..."
        />
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="border-b border-b-gray-300">
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Inventory</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fakeProducts.map((product) => (
              <tr key={product.id} className="border-b border-b-gray-300">
                <td className="p-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="w-12 h-12 rounded"
                  />
                </td>
                <td className="p-3">{product.id}</td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">${product.price}</td>
                <td className="p-3">{product.inventory}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      product.status === "In Stock"
                        ? "bg-black"
                        : product.status === "Low Stock"
                          ? "bg-gray-300 text-black"
                          : "bg-red-500"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="p-3">{product.category}</td>
                <td className="p-3 text-center">
                  <button>
                    <Ellipsis className="text-gray-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
