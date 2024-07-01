import Image from "next/image";

export default function ProductImage({ thumbnail }) {
  return (
    <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
      <Image
        class="w-full h-full object-cover"
        src={thumbnail}
        alt="Product Image"
        width={550}
        height={550}
      />
    </div>
  );
}
