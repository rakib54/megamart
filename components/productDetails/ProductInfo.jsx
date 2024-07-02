export default function ProductInfo({ product }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-gray-600  text-sm mb-4">{product.shortDescription}</p>
      <div className="mb-4">
        <span className="font-bold text-gray-700">Price: </span>
        <span className="text-gray-600 ">
          $
          {(product.price - (product.price * product.discount) / 100).toFixed(
            2
          )}
        </span>
        <del className="text-gray-600 text-sm ml-2">${product.price}</del>
        <span className="text-red-500 text-xs ml-3 italic">
          {product.discount}% off
        </span>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700 ">Availability: </span>
        <span className="text-green-600 ">In Stock</span>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700 ">Category: </span>
        <span className="text-gray-600 ">{product.category}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700">Brand: </span>
        <span className="text-gray-600 ">{product.brand}</span>
      </div>

      <div className="mb-4 flex gap-4 items-center">
        <span className="font-bold text-gray-700">Quantity: </span>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div className="h-8 w-8 text-xl flex  justify-center cursor-pointer select-none">
            -
          </div>
          <div className="h-8 w-8 text-base flex items-center justify-center">
            1
          </div>
          <div className="h-8 w-8 text-xl flex  justify-center cursor-pointer select-none">
            +
          </div>
        </div>
      </div>
      <div>
        <span className="font-bold text-gray-700">Product Description:</span>
        <p className="text-gray-600  mt-2">{product.description}</p>
      </div>
    </>
  );
}
