"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SortProducts() {
  const [sort, setSort] = useState();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const handleSortOptions = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSort(value);
  };

  // if page is refreshed
  useEffect(() => {
    const sortParams = params.get("sort");
    if (sortParams) {
      setSort(sortParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sort) {
      params.set("sort", sort);
    } else {
      params.delete("sort");
    }

    replace(`${pathname}?${params}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  return (
    <div className="mb-5 flex gap-x-4 items-center justify-end border-b p-6">
      <h6 className="text-xl text-gray-800 uppercase font-medium">Sort By :</h6>
      <select
        value={sort}
        onChange={handleSortOptions}
        id="sort"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
      >
        <option defaultValue="best">Best Match</option>
        <option value="ltoh">Price Low to High</option>
        <option value="htol">Price High to Low</option>
        <option value="new">Newest Arrivals</option>
        <option value="topsells">Top Sales</option>
      </select>
    </div>
  );
}
