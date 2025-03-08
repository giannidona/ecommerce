import {
  BarChart3,
  ChevronLeft,
  Package,
  ShoppingBag,
  Users,
} from "lucide-react";
import Link from "next/link";

const routes = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: BarChart3,
    exact: true,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: Package,
    exact: false,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingBag,
    exact: false,
  },
  {
    title: "Team",
    href: "/admin/team",
    icon: Users,
    exact: false,
  },
];

export const NavbarAdmin = () => {
  return (
    <nav className="border-r w-[280px] border-r-gray-400 h-screen font-light">
      <div className="border-b border-b-gray-400">
        <Link
          className="px-5 py-3 flex items-center gap-x-3 text-md"
          href={"/"}
        >
          <ChevronLeft size={15} />
          Back to store
        </Link>
      </div>
      <div className="px-5 mt-3">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="flex items-center gap-3 rounded-md px-3 py-2 my-3"
          >
            <route.icon className="h-5 w-5 text-gray-500" />
            {route.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};
