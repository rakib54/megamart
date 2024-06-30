export default function ProductInfo() {
  return (
    <>
      <h2 class="text-2xl font-bold text-gray-800 mb-2">
        High Quality T Shirt
      </h2>
      <p class="text-gray-600  text-sm mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante
        justo. Integer euismod libero id mauris malesuada tincidunt.
      </p>
      <div class="mb-4">
        <span class="font-bold text-gray-700">Price: </span>
        <span class="text-gray-600 ">$29.99</span>
      </div>
      <div class="mb-4">
        <span class="font-bold text-gray-700 ">Availability: </span>
        <span class="text-green-600 ">In Stock</span>
      </div>
      <div class="mb-4">
        <span class="font-bold text-gray-700 ">Category: </span>
        <span class="text-gray-600 ">Cloth</span>
      </div>
      <div class="mb-4">
        <span class="font-bold text-gray-700">Brand: </span>
        <span class="text-gray-600 ">No Brand</span>
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
        <p class="text-gray-600  mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante
          justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus
          commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum
          pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices
          placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
          sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
          tincidunt mi consectetur.
        </p>
      </div>
    </>
  );
}
