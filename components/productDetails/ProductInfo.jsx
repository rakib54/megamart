export default function ProductInfo({ product }) {
  return (
    <>
      <h2 class="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
      <p class="text-gray-600  text-sm mb-4">{product.shortDescription}</p>
      <div class="mb-4">
        <span class="font-bold text-gray-700">Price: </span>
        <span class="text-gray-600 ">
          $
          {(product.price - (product.price * product.discount) / 100).toFixed(
            2
          )}
        </span>
        <del class="text-gray-600 text-sm ml-2">${product.price}</del>
        <span class="text-red-500 text-xs ml-3 italic">
          {product.discount}% off
        </span>
      </div>
      <div class="mb-4">
        <span class="font-bold text-gray-700 ">Availability: </span>
        <span class="text-green-600 ">In Stock</span>
      </div>
      <div class="mb-4">
        <span class="font-bold text-gray-700 ">Category: </span>
        <span class="text-gray-600 ">{product.category}</span>
      </div>
      <div class="mb-4">
        <span class="font-bold text-gray-700">Brand: </span>
        <span class="text-gray-600 ">{product.brand}</span>
      </div>

      <div class="mb-4 flex gap-4 items-center">
        <span class="font-bold text-gray-700">Quantity: </span>
        <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div class="h-8 w-8 text-xl flex  justify-center cursor-pointer select-none">
            -
          </div>
          <div class="h-8 w-8 text-base flex items-center justify-center">
            1
          </div>
          <div class="h-8 w-8 text-xl flex  justify-center cursor-pointer select-none">
            +
          </div>
        </div>
      </div>
      <div>
        <span class="font-bold text-gray-700">Product Description:</span>
        <p class="text-gray-600  mt-2">{product.description}</p>
      </div>
    </>
  );
}
