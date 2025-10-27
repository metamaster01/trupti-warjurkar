export const dynamic = "force-dynamic";

import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const { orderId, paymentId, signature, courseId } = await request.json()

    // Verify signature
    const body = orderId + "|" + paymentId
    const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!).update(body).digest("hex")

    const isSignatureValid = expectedSignature === signature

    if (!isSignatureValid) {
      return NextResponse.json({ success: false, error: "Invalid signature" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Save the enrollment to your database
    // 2. Send confirmation email
    // 3. Generate access credentials

    console.log(`Payment verified for course ${courseId}`)

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      courseId,
    })
  } catch (error) {
    console.error("Payment verification error:", error)
    return NextResponse.json({ success: false, error: "Verification failed" }, { status: 500 })
  }
}
