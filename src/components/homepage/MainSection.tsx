import Link from "next/link";

export const MainSection = () => {
  return (
    <main className="bg-[url('https://images.unsplash.com/photo-1541778480-fc1752bbc2a9?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] text-white flex flex-col items-center justify-center h-[85vh] bg-cover bg-center ">
      <div>
        <div className="absolute bg-black/50 left-0 w-full h-[85vh] top-[85px]" />
        <div className="relative z-10 w-[90%] md:w-[100%] mx-auto">
          <h1 className="text-4xl md:text-7xl font-light text-center mb-3 md:mb-6">
            Timeless Elegance,{" "}
            <span className="md:flex">Exceptional Quality</span>
          </h1>
          <p className="text-center mb-3 md:mb-6 max-w-[350px] mx-auto">
            Discover our curated collection of luxury pieces designed for the
            discerning individual.
          </p>
          <Link
            className="flex justify-center px-3 py-2 border border-white rounded w-fit mx-auto hover:bg-white hover:text-black transition-all duration-200 ease-in-out"
            href={"/"}
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </main>
  );
};
