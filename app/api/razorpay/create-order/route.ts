// import { type NextRequest, NextResponse } from "next/server"
// import Razorpay from "razorpay"

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID!,
//   key_secret: process.env.RAZORPAY_KEY_SECRET!,
// })

// export async function POST(request: NextRequest) {
//   try {
//     const { courseId, courseTitle, amount } = await request.json()

//     const order = await razorpay.orders.create({
//       amount: amount * 100, // Amount in paise
//       currency: "INR",
//       receipt: `course_${courseId}_${Date.now()}`,
//       notes: {
//         courseId,
//         courseTitle,
//       },
//     })

//     return NextResponse.json({
//       orderId: order.id,
//       amount: order.amount,
//       currency: order.currency,
//     })
//   } catch (error) {
//     console.error("Order creation error:", error)
//     return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
//   }
// }

export const dynamic = "force-dynamic";

import { type NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(request: NextRequest) {
  try {
    const { courseId, courseTitle, amount } = await request.json()

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // paise
      currency: "INR",
      receipt: `course_${courseId}_${Date.now()}`,
      notes: { courseId, courseTitle },
    })

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    })
  } catch (error) {
    console.error("Order creation error:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

