import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const OrderForm = () => {
    const { user } = useContext(AuthContext);
    const [orderDetails, setOrderDetails] = useState('');

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        
        // // Check if the user has a license
        // if (!user.hasLicense) {
        //     alert('You must have a valid license to create an order.');
        //     return;
        // }

        // Save order to localStorage
        const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
        existingOrders.push({ details: orderDetails, status: 'Pending' });
        localStorage.setItem('orders', JSON.stringify(existingOrders));

        // Reset form
        setOrderDetails('');
        alert('Order created successfully!');
    };

    return (
        <form onSubmit={handleOrderSubmit}>
            <div>
                <label>Order Details:</label>
                <input 
                    type="text" 
                    value={orderDetails} 
                    onChange={(e) => setOrderDetails(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Create Order</button>
        </form>
    );
};

export default OrderForm;
