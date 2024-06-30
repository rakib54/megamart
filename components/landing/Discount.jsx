import Image from "next/image";

export default function Discount() {
  return (
    <div className="mt-4 container mx-auto p-10">
      <Image
        src="/images/discount3.jpg"
        className="w-full h-auto object-cover"
        alt="offer"
        height={250}
        width={1300}
      />
    </div>
  );
}
