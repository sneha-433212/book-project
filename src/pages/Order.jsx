import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
  const navigate = useNavigate();

  if (!order) {
    return (
      <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
        <h2 className="text-xl text-red-600 font-semibold">Invalid Order</h2>
        <p>No order details found. Please return to the homepage.</p>
        <button
          className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
          onClick={() => navigate('/')}
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      <h2 className='text-2xl font-semibold mb-4'>Thank you for your Order</h2>
      <p>Your order has been placed successfully. You will receive an email confirmation shortly.</p>

      <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
        <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
        <p>Order Number: {order.orderNumber}</p>

        <div className='mt-4'>
          <h4 className='text-lg font-semibold mb-2'>Shipping Information</h4>
          <p>{order.shippingInformation.name}</p>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>

        <div className='mt-4'>
          <h4 className='text-md font-semibold mb-2'>Items Ordered</h4>
          {order.products.map(product => (
            <div key={product.id} className="flex justify-between mt-2">
              <p>{product.name} × {product.quantity}</p>
              <p>${(product.price * product.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className='mt-4 flex justify-between'>
          <span>Total Price:</span>
          <span className='font-semibold'>${order.totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className='mt-6'>
        <button className="ml-4 bg-red-600 text-white py-2 px-4 hover:bg-amber-300">
          Order Tracking
        </button>
        <button
          className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800'
          onClick={() => navigate('/')}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Order;

