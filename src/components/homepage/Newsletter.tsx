export const Newsletter = () => {
  return (
    <section className="mt-30">
      <h2 className="text-4xl md:text-5xl font-light text-center mb-3 text-slate-700">
        Join Our Community
      </h2>
      <p className="text-center mb-10 font-light max-w-[550px] mx-auto">
        Subscribe to receive updates on new collections, exclusive offers, and
        styling inspiration.
      </p>
      <form className="flex justify-center mb-10" action="">
        <input
          className="rounded px-3 py-2 mr-5"
          type="email"
          placeholder="Enter your email"
        />
        <button
          className="bg-black text-white border transition-all duration-200 ease-in-out border-white px-3 py-2 rounded hover:border-black hover:text-black hover:bg-white"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};
