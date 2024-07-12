export default function FIlterBySize() {
  return (
    <div className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
      <div className="flex items-center gap-2">
        <div className="size-selector">
          <input type="radio" name="size" id="size-xs" className="hidden" />
          <label
            for="size-xs"
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            XS
          </label>
        </div>
        <div className="size-selector">
          <input type="radio" name="size" id="size-sm" className="hidden" />
          <label
            for="size-sm"
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            S
          </label>
        </div>
        <div className="size-selector">
          <input type="radio" name="size" id="size-m" className="hidden" />
          <label
            for="size-m"
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            M
          </label>
        </div>
        <div className="size-selector">
          <input type="radio" name="size" id="size-l" className="hidden" />
          <label
            for="size-l"
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            L
          </label>
        </div>
        <div className="size-selector">
          <input type="radio" name="size" id="size-xl" className="hidden" />
          <label
            for="size-xl"
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            XL
          </label>
        </div>
      </div>
    </div>
  );
}
