export default function SortProducts() {
  return (
    <div className="mb-5 flex gap-x-4 items-center justify-end border-b p-6">
      <h6 className="text-xl text-gray-800 uppercase font-medium">Sort By :</h6>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
      >
        <option value="best">Best Match</option>
        <option value="ltoh">Price Low to High</option>
        <option value="htol">Price High to Low</option>
        <option value="new">Newest Arrivals</option>
        <option value="topsells">Top Sales</option>
      </select>
    </div>
  );
}
