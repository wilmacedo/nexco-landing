import { stripe } from "@/lib/stripe";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(request: NextApiRequest) {
  const { priceId } = await request.body();

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],

    success_url: `${request.headers.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${request.headers.origin}/checkout/cancel`,
  });

  return NextResponse.json({
    url: session.url,
  });
}
