import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex items-center h-full p-16  text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-gray-700 mb-10">
            Sorry! we couldn't find this product.
          </p>
          <Link
            rel="noopener noreferrer"
            href="/"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 transition duration-150"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
