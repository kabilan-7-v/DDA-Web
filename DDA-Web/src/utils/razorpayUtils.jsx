// utils/razorpayUtils.js
import axios from "axios";
import { toast } from "react-toastify";

export const handlePayment = async ({
  amount,
  userDetails,
  categoryDetails,
  onSuccess,
  onFailure,
}) => {
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const res = await loadRazorpay();
  if (!res) {
    alert("Razorpay SDK failed to load");
    return;
  }

  try {
    const { data: order } = await axios.post(
      "https://dda-backend-xskh.onrender.com/api/payment/create-order",
      { amount }
    );

    const options = {
      key: "rzp_live_K0i9ysc1ahVHX6",
      amount: order.amount,
      currency: order.currency,
      name: "DesignDot Acadamey",
      description: "Test Transaction",
      order_id: order.id,
      handler: async function (response) {
        try {
          const verifyRes = await axios.post(
            "https://dda-backend-xskh.onrender.com/api/payment/verify",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (verifyRes.data.success) {
            await axios.post(
              "https://dda-backend-xskh.onrender.com/api/purchases",
              {
                name: userDetails.name,
                email: userDetails.email,
                emailStatus: userDetails.emailVerified,
                phone: userDetails.phone,
                service:
                  categoryDetails.mainCategory +
                  "#*#" +
                  categoryDetails.subCategory,
                package: order.amount.toString(),
                paymentStatus: "Paid",
              }
            );

            toast.success("Payment successful");
            onSuccess?.();
          } else {
            toast.error("Payment verification failed");
            onFailure?.();
          }
        } catch (err) {
          toast.error("Payment failed");
          onFailure?.();
        } finally {
        }
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    toast.error("Payment failed to initialize");
    onFailure?.();
  }
};
