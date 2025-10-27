"use client"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

interface RazorpayButtonProps {
  courseId: number
  courseTitle: string
  price: number
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export default function RazorpayButton({ courseId, courseTitle, price, isLoading, setIsLoading }: RazorpayButtonProps) {
  const handlePayment = async () => {
    setIsLoading(true)

    try {
      const keyResponse = await fetch("/api/razorpay/get-key")
      const keyData = await keyResponse.json()
      const razorpayKey = keyData.key

      // Create order on backend
      const response = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId,
          courseTitle,
          amount: price,
        }),
      })

      const data = await response.json()

      if (!data.orderId) {
        throw new Error("Failed to create order")
      }

      // Initialize Razorpay
      const options = {
        key: razorpayKey,
        amount: price * 100, // Amount in paise
        currency: "INR",
        name: "TruptiW",
        description: courseTitle,
        order_id: data.orderId,
        handler: async (response: any) => {
          // Verify payment on backend
          const verifyResponse = await fetch("/api/razorpay/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              courseId,
            }),
          })

          const verifyData = await verifyResponse.json()

          if (verifyData.success) {
            alert("Payment successful! You have been enrolled in the course.")
            // Redirect or update UI as needed
          } else {
            alert("Payment verification failed. Please try again.")
          }
        },
        prefill: {
          name: "Student",
          email: "student@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#945CAD",
        },
      }

      // Load Razorpay script if not already loaded
      if (!(window as any).Razorpay) {
        const script = document.createElement("script")
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        script.async = true
        script.onload = () => {
          const razorpay = new (window as any).Razorpay(options)
          razorpay.open()
          setIsLoading(false)
        }
        document.body.appendChild(script)
      } else {
        const razorpay = new (window as any).Razorpay(options)
        razorpay.open()
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("An error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handlePayment}
      disabled={isLoading}
      className="w-full bg-gradient-to-r from-[#945CAD] to-[#7d4a94] hover:from-[#7d4a94] hover:to-[#6a3d7f] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          <span>Proceed to Payment</span>
          <span className="text-lg">→</span>
        </>
      )}
    </motion.button>
  )
}
