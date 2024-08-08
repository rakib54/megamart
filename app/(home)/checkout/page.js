import { auth } from "@/auth";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { getCartsForUser } from "@/database/queries/cart";

export default async function CheckoutPage() {

  const session = await auth();
  const carts = await getCartsForUser(session?.user?.id);

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <CheckoutForm session={session} carts={carts} />
    </section>
  )
}