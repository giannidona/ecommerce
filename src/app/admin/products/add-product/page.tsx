"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AddProductPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    tag: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      alert("Producto agregado con éxito!");
      setForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        tag: "",
        image: "",
      });
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-x-5">
        <Link
          className="hover:bg-gray-200 p-3 transition-all duration-200 rounded"
          href={"/admin/products"}
        >
          <ArrowLeft />
        </Link>
        <h1 className="text-3xl font-light">Add New Product</h1>
      </div>

      <div className="mt-6 bg-white p-6 rounded shadow-md">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              value={form.name}
              onChange={handleChange}
              required
              name="name"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Description</label>
            <textarea
              placeholder="Enter product description"
              value={form.description}
              onChange={handleChange}
              required
              name="description"
              className="border border-gray-300 px-3 py-2 rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Price ($)</label>
            <input
              type="text"
              placeholder="Enter product price"
              value={form.price}
              onChange={handleChange}
              required
              name="price"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Stock</label>
            <input
              type="number"
              placeholder="Enter product stock"
              value={form.stock}
              onChange={handleChange}
              required
              name="stock"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Tag</label>
            <input
              type="text"
              placeholder="e.g. electronics, gadgets, accessories"
              value={form.tag}
              onChange={handleChange}
              required
              name="tag"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Product Image</label>
            <input
              type="text"
              placeholder="URL only"
              value={form.image}
              onChange={handleChange}
              name="image"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black border border-white text-white py-2 rounded hover:bg-white hover:text-black hover:border-black transition-all"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
