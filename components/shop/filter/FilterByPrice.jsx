"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterByPrice() {
  const [range, setRange] = useState({
    min: "",
    max: "",
  });

  const [error, setError] = useState("");
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handlePriceChange = (e) => {
    e.preventDefault();

    setRange((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  useEffect(() => {
    if (range.min && range.max) {
      if (range.min > range.max) {
        setError("Range is not valid!");
        return;
      }
      setError("");
      params.set("min", range.min);
      params.set("max", range.max);
    } else {
      params.delete("min");
      params.delete("max");
    }

    replace(`${pathname}?${params}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);

  return (
    <div className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Price
      </h3>
      <div className="mt-4 flex items-center">
        <input
          onChange={handlePriceChange}
          type="text"
          name="min"
          id="min"
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="min"
        />
        <span className="mx-3 text-gray-500">-</span>
        <input
          onChange={handlePriceChange}
          type="text"
          name="max"
          id="max"
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="max"
        />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
