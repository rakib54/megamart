"use server"

import { stripe } from "@/lib/stripe";
import { formatPriceForStripe } from "@/lib/stripe-helpers";
import { headers } from "next/headers";


const CURRENCY = "USD";

export const createCheckoutSessions = async (data) => {
  const ui_mode = "hosted";
  const origin = headers().get("origin");

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    submit_type: "auto",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: CURRENCY,
          product_data: {
            name: "T shirt",
          },
          unit_amount: formatPriceForStripe(120.65, CURRENCY),
        }
      }
    ],

    ...(ui_mode === "hosted" && {
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}&cartId=1221`,
      cancel_url: `${origin}/shop`,
    }),
    ui_mode,

  });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url
  }
}

export async function createPaymentIntent(data) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(120.65, CURRENCY),
    automatic_payment_methods: { enabled: true },
    currency: CURRENCY
  })

  return {
    client_secret: paymentIntent.client_secret
  }
}