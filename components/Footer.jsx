import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer class="relative pt-8 pb-6 mt-10 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl fonat-semibold text-blueGray-700">
              Lets keep in touch!
            </h4>
            <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6">
              <button
                class="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 text-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaXTwitter className="text-xl ml-2" />
              </button>
              <button
                class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaFacebook className="text-xl ml-2" />
              </button>
              <button
                class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaLinkedin className="text-xl ml-2" />
              </button>
              <button
                class="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaGithub className="text-xl ml-2" />
              </button>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-blueGray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024 megamart</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
