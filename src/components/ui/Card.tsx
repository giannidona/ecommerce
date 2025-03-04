import Image from "next/image";

export interface Product {
  prodName: string;
  prodTag: string;
  prodPrice: number;
  prodImage: string;
}

export const Card = () => {
  return (
    <div className="group hover:shadow-xl transition-all duration-150 w-[320] h-[430] mb-10 mx-auto rounded-b-lg">
      <div className="rounded-t-lg overflow-hidden border-0 relative md:w-[320px] h-[320px]">
        <Image
          alt="awd"
          src={
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1470&auto=format&fit=crop"
          }
          fill
          className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-2">
        <span className="text-slate-700 font-light text-sm">Category</span>
        <p className="text-lg font-light">Product Name</p>
        <p className="text-lg font-light">$1250</p>
      </div>
    </div>
  );
};
