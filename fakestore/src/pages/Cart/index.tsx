import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  incrementQty,
  decrementQty,
  removeItem,
  clearCart,
} from '../../features/cart/cartSlice';
import styles from './Cart.module.scss';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0)
    return (
      <div className={styles.container}>
        <h1>Your cart is empty</h1>
      </div>
    );

  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>
      <button
        className={styles.clearBtn}
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      <div className={styles.items}>
        {items.map(item => (
          <div key={item.product.id} className={styles.item}>
            <img src={item.product.image} alt={item.product.title} />
            <div className={styles.info}>
              <h3>{item.product.title}</h3>
              <p>${item.product.price}</p>
              <div className={styles.controls}>
                <button onClick={() => dispatch(decrementQty(item.product.id))}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQty(item.product.id))}>
                  +
                </button>
              </div>
              <button
                className={styles.removeBtn}
                onClick={() => dispatch(removeItem(item.product.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2 className={styles.total}>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
