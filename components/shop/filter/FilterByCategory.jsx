"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterByCategory({ category }) {
  const [query, setQuery] = useState([]);
  const { replace } = useRouter();

  const searchParams = useSearchParams(); // read current URL's search parameters.
  const pathName = usePathname(); // curr pathname
  const params = new URLSearchParams(searchParams);

  const handleChange = async (e) => {
    e.preventDefault();
    const name = e.target.name;
    const checked = e.target.checked;

    if (checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      const filtered = query.filter((item) => item !== name);

      setQuery(filtered);
    }
  };

  // if page is refreshed query value retrived
  useEffect(() => {
    const category = params.get("category");

    if (category) {
      const decodeCategory = decodeURI(category); // tshirt|sofa
      const queryInCategory = decodeCategory.split("|");

      setQuery(queryInCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set("category", encodeURI(query.join("|")));
    } else {
      params.delete("category");
    }

    replace(`${pathName}?${params.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div>
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Categories
      </h3>
      <div className="space-y-2">
        {category?.map((c, i) => (
          <div key={i} className="flex items-center">
            <input
              onChange={handleChange}
              type="checkbox"
              name={c.name}
              checked={query.includes(c.name)}
              id="cat-1"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label for="cat-1" className="text-gray-600 ml-3 cusror-pointer">
              {c.name}
            </label>
            <div className="ml-auto text-gray-600 text-sm">({c.count})</div>
          </div>
        ))}
      </div>
    </div>
  );
}
