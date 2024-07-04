import Link from "next/link";

export default function Categories() {
  return (
    <div className="relative flex items-center justify-between -mx-4">
      <div className="w-full max-w-full px-4 lg:w-60">
        <div className="relative py-4">
          <Link
            href="#"
            className="inline-flex items-center justify-between whitespace-nowrap rounded-[5px] bg-primary pl-4 pr-[18px] py-[9px] text-base font-medium text-white hover:bg-opacity-90"
          >
            <span className="pr-[10px] text-white"></span>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center w-full px-4">
        <div className="w-full">
          <button className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 "></button>

          <nav
            class="
           right-4 top-full z-50 w-full max-w-[250px] justify-center rounded-lg bg-white dark:bg-dark-2 py-5 px-6 shadow lg:static lg:flex lg:w-full lg:max-w-full lg:justify-end lg:bg-transparent lg:py-0 lg:px-0 lg:shadow-none dark:lg:bg-transparent hidden"
          >
            <ul className="items-center block lg:flex">
              <li className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6">
                Mens
              </li>
              <li className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6">
                Womans
              </li>
              <li className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6">
                Kids
              </li>
              <li className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6">
                contact us
              </li>
              <li className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6">
                contact us
              </li>
              <li className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6">
                contact us
              </li>
              <li className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6">
                contact us
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
