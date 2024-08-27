import { auth } from "@/auth";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { getUser } from "@/database/queries/auth";
import { getCartsForUser } from "@/database/queries/cart";

export default async function CheckoutPage() {

  const session = await auth();
  const carts = await getCartsForUser(session?.user?.id);
  const userInfo = await getUser(session?.user?.email)

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <CheckoutForm userInfo={userInfo} carts={carts} />
    </section>
  )
}