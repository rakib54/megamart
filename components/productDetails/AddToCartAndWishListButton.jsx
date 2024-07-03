export default function AddToCartAndWishListButton() {
  return (
    <div className="flex -mx-2 mb-4 flex-wrap">
      <div className="w-full sm:w-1/2 px-2 mt-4 sm:mt-0">
        <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 w-full flex items-center justify-center transition duration-300">
          Add to Cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
      <div className="w-full sm:w-1/2 px-2 mt-4 sm:mt-0">
        <button className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 disabled:opacity-50 w-full flex items-center justify-center transition duration-300">
          Add to wishList
          <i className="fa-regular fa-heart ml-2 text-xl"></i>
        </button>
      </div>
    </div>
  );
}
