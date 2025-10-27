// import { NextResponse } from "next/server"

// export async function GET() {
//   const key = process.env.RAZORPAY_KEY_ID

//   if (!key) {
//     return NextResponse.json({ error: "Razorpay key not configured" }, { status: 500 })
//   }

//   return NextResponse.json({ key })
// }


// app/api/razorpay/get-key/route.ts

export const dynamic = "force-dynamic";
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Defensive: ensure env var exists
    const key = process.env.RAZORPAY_KEY_ID

    if (!key) {
      console.error("RAZORPAY_KEY_ID is not set")
      return NextResponse.json({ error: "Razorpay key not configured" }, { status: 500 })
    }

    // Respond with only the public key id
    return NextResponse.json({ key })
  } catch (err) {
    // Catch unexpected errors and return JSON (avoid HTML dev overlay being sent)
    console.error("get-key route error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
