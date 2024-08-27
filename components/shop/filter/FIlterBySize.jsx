"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FIlterBySize() {
  const [size, setSize] = useState("");
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleSize = (e) => {
    e.preventDefault();
    setSize(e.target.value);
  };

  // if page is refreshed
  useEffect(() => {
    const size = params.get("size");
    if (size) {
      setSize(size);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (size.length > 0) {
      params.set("size", size);
    } else {
      params.delete("size");
      setSize("");
    }

    replace(`${pathname}?${params}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  return (
    <div className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
      <div className="flex items-center gap-2">
        <div className="size-selector">
          <input
            onChange={handleSize}
            checked={size === "s"}
            type="radio"
            name="s"
            value="s"
            id="s"
            className="hidden"
          />
          <label
            htmlFor="s"
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            S
          </label>
        </div>
        <div className="size-selector">
          <input
            onChange={handleSize}
            type="radio"
            name="m"
            value="m"
            id="m"
            className="hidden"
            checked={size === "m"}
          />
          <label
            htmlFor="m"
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            M
          </label>
        </div>
        <div className="size-selector">
          <input
            onChange={handleSize}
            type="radio"
            name="l"
            id="l"
            value="l"
            className="hidden"
            checked={size === "l"}
          />
          <label
            htmlFor="l"
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            L
          </label>
        </div>
      </div>
    </div>
  );
}
