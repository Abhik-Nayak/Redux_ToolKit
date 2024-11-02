import React from 'react';

const OrderTracking = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    return (
        <div>
            <h2>Order Tracking</h2>
            {orders.length > 0 ? (
                <ul>
                    {orders.map((order, index) => (
                        <li key={index}>
                            {order.details} - Status: {order.status}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default OrderTracking;
