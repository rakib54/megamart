import Image from "next/image";

export default function ProductImage({ thumbnail }) {
  return (
    <div className="h-[440px] rounded-lg bg-gray-300 mb-4">
      <Image
        className="w-full h-full object-cover"
        src={thumbnail}
        alt="Product Image"
        width={550}
        height={550}
      />
    </div>
  );
}
