import { auth } from "@/auth";
import RegisterForm from "@/components/auth/RegisterForm";
import SocialLogin from "@/components/auth/SocialLogin";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await auth();

  if (session?.user?.email) {
    redirect("/");
  }


  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 min-h-screen mx-auto lg:py-0 mt-10">
        <div className="w-full  rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create an account
            </h1>

            <RegisterForm />

            <div className="mt-6 flex justify-center relative">
              <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
              <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>

            <SocialLogin />

            <p className="text-sm font-light text-gray-500 text-center">
              Already have an account? <Link href="/login" className="font-medium text-primary-600 hover:underline ">Login
                here</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}