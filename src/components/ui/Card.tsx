import Image from "next/image";

type Product = {
  prodName: string;
  prodPrice: number;
  prodTag: string;
  prodImage: string;
};

export const Card = ({ prodName, prodPrice, prodTag, prodImage }: Product) => {
  return (
    <div className="group hover:shadow-xl transition-all duration-150 w-[320] h-[430] mb-10 mx-auto rounded-b-lg">
      <div className="rounded-t-lg overflow-hidden border-0 relative md:w-[320px] h-[320px]">
        <Image
          alt="awd"
          src={prodImage}
          fill
          className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-2">
        <span className="text-slate-700 font-light text-sm">{prodTag}</span>
        <p className="text-lg font-light">{prodName}</p>
        <p className="text-lg font-light">${prodPrice}</p>
      </div>
    </div>
  );
};
