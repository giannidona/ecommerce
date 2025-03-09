import Image from "next/image";
import Link from "next/link";

const fakeOrders = [
  {
    id: "ORD-9876",
    customer: "John Doe",
    total: 2500,
    status: "Shipped",
    date: "2024-03-01",
    image: "https://images.unsplash.com/100x100/?delivery",
  },
  {
    id: "ORD-8765",
    customer: "Jane Smith",
    total: 1800,
    status: "Processing",
    date: "2024-03-02",
    image: "https://images.unsplash.com/100x100/?package",
  },
  {
    id: "ORD-7654",
    customer: "Michael Johnson",
    total: 3200,
    status: "Pending",
    date: "2024-03-03",
    image: "https://images.unsplash.com/100x100/?shipping",
  },
  {
    id: "ORD-6543",
    customer: "Emily Brown",
    total: 900,
    status: "Completed",
    date: "2024-03-04",
    image: "https://images.unsplash.com/100x100/?courier",
  },
];

export default function OrdersAdminPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-light">Orders List</h1>
          <p className="font-light text-sm">
            Manage and track customer orders efficiently.
          </p>
        </div>
        <Link
          className="bg-black text-white rounded px-3 py-2"
          href={"/addorder"}
        >
          + Add order
        </Link>
      </div>
      <div className="mt-10">
        <input
          className="border border-gray-300 px-3 py-2 rounded w-full"
          type="text"
          placeholder="Search orders..."
        />
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="border-b border-b-gray-300">
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {fakeOrders.map((order) => (
              <tr key={order.id} className="border-b border-b-gray-300">
                <td className="p-3">
                  <Image
                    src={order.image}
                    alt={order.customer}
                    width={150}
                    height={150}
                    className="w-12 h-12 rounded"
                  />
                </td>
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">${order.total}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      order.status === "Shipped"
                        ? "bg-blue-500"
                        : order.status === "Processing"
                          ? "bg-yellow-500"
                          : order.status === "Pending"
                            ? "bg-gray-300 text-black"
                            : "bg-green-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
