export default function ProductDescription({ description }) {
  return (
    <div>
      <span className="font-bold text-gray-700">Product Description:</span>
      <p className="text-gray-600  mt-2">{description}</p>
    </div>
  );
}
