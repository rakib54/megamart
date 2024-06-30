import Image from "next/image";

export default function ProductImage() {
  return (
    <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
      <Image
        class="w-full h-full object-cover"
        src="/images/shirt.jpg"
        alt="Product Image"
        width={550}
        height={550}
      />
    </div>
  );
}
