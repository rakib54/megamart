import Link from "next/link";

export default function SignUpPage() {
  return (
    <section>
      <div class="flex flex-col items-center justify-center px-6 py-8 min-h-screen mx-auto lg:py-0 mt-10">
        <div class="w-full  rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create an account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                <input type="name" name="name" id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Rakibur Rahman" required="" />
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input type="email" name="email" id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required />
              </div>
              <div>
                <label for=" confirm-password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm
                  password</label>
                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                " />
              </div>
              <div class=" flex items-start">
                <div class="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required="" />
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-light text-gray-500">I accept the <a
                    class="font-medium text-primary-600 hover:underline " href="#">Terms and
                    Conditions</a></label>
                </div>
              </div>
              <button type="submit"
                class="w-full text-white bg-[#ff3f34] hover:bg-[#ed4e46] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 duration-150 transition">Create
                an account</button>
            </form>
            <div class="mt-6 flex justify-center relative">
              <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
              <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div class="mt-4 flex gap-4">
              <a href="#"
                class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
              <a href="#"
                class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">
                facebook
              </a>
            </div>

            <p class="text-sm font-light text-gray-500 text-center">
              Already have an account? <Link href="/login" class="font-medium text-primary-600 hover:underline ">Login
                here</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}