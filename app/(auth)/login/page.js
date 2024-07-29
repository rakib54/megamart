import { auth } from "@/auth";
import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage({ searchParams: { addtocart, addtowishlist } }) {
  const session = await auth();

  if (session?.user?.email) {
    redirect("/");
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl">
              Welcome to MegaMart! Please login.
            </h1>

            <LoginForm addtocart={addtocart} addtowishlist={addtowishlist} />

            <div className="mt-6 flex justify-center relative">
              <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or login with</div>
              <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>

            <SocialLogin />

            <p className="text-sm font-light text-gray-500 text-center">
              Don’t have an account yet?
              {addtocart ?
                <Link href={`/signup?addtocart=${addtocart}`}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                : addtowishlist ?
                  <Link href={`/signup?addtowishlist=${addtowishlist}`}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up
                  </Link> :
                  <Link href="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up
                  </Link>}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}