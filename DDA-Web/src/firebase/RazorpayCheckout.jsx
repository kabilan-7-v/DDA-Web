import React from 'react';
import axios from 'axios';

const RazorpayCheckout = () => {
  const loadRazorpay = () =>
    new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert('Razorpay SDK failed to load');
      return;
    }

    const { data: order } = await axios.post('https://dda-backend-xskh.onrender.com/api/payment/create-order', {
      amount: 1,
    });

    const options = {
      key: 'rzp_live_amqPFi6ouaxEqd', // Replace with Razorpay key
      amount: order.amount,
      currency: order.currency,
      name: 'DesignDot Acadamey',
      description: 'Test Transaction',
      order_id: order.id,
      handler: async function (response) {
        const verifyRes = await axios.post('https://dda-backend-xskh.onrender.com/api/payment/verify', {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });

        if (verifyRes.data.success) {
          alert('Payment successful');
        } else {
          alert('Payment verification failed');
        }
      },
      prefill: {
        name: 'Kabilan V',
        email: 'kabilan@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="App">
      <h2>Razorpay Payment</h2>
      <button onClick={handlePayment}>Pay ₹500</button>
    </div>
  );
};

export default RazorpayCheckout;
