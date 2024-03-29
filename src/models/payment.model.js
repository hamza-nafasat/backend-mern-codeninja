import mongoose from "mongoose";

const paymentScheema = new mongoose.Schema(
	{
		razorpay_signature: {
			type: String,
			required: true,
		},
		razorpay_subscription_id: {
			type: String,
			required: true,
		},
		razorpay_payment_id: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Payment = mongoose.model("Payment", paymentScheema);
export default Payment;
