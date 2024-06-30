export default function Header() {
  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat h-[500px] bg-[url('/shopping.jpg')]">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="p-6 text-center text-gray-300 md:px-12">
            <h1 className="mt-2 mb-10 text-5xl font-semibold tracking-tight md:text-6xl xl:text-7xl">
              Your Favorite Products, <br />
              <span>Just a Click Away</span>
            </h1>
            <p className="text-xl ">
              Explore our vast collection of products and enjoy amazing
              discounts.
              <br />
              Discover the best in fashion, electronics, and home essentials,
              all in one place.
            </p>
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 mt-5"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
