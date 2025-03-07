import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-center text-3xl font-light">
          Login to your account
        </h1>
        <span className="mt-2 text-sm text-gray-500">
          Or{" "}
          <Link className="underline hover:text-black" href={"/signup"}>
            create a new account
          </Link>
        </span>
      </div>

      <div className="mt-8 w-[70%] mx-auto">
        <form action="">
          <div className="mb-5 grid grid-rows-1">
            <label htmlFor="">Email</label>
            <input
              className="mt-2 border-1 border-black/5 rounded px-2 py-1"
              type="mail"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-5 grid grid-rows-1">
            <label htmlFor="">Password</label>
            <input
              className="mt-2 border-1 border-black/5 rounded px-2 py-1"
              type="password"
              placeholder="Create a password"
            />
          </div>
          <div className="mb-5 ">
            <button
              className="bg-black border border-white text-white hover:bg-white hover:border-black hover:text-black transition-all ease-in-out duration-200 w-full px-3 py-2 rounded"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <span className="text-sm text-gray-500 flex justify-center mb-5">
          Or continue with
        </span>
        <div className="flex">
          <Link
            className="text-center border-1 border-black/5 text-black hover:bg-black/10 transition-all ease-in-out duration-200 w-full px-3 py-2 rounded"
            href={"/"}
          >
            Google
          </Link>
        </div>
      </div>
    </div>
  );
}
