// src/pages/ProductDetails.tsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ProductDetails.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addItem } from '../../features/cart/cartSlice';
import { fetchProductById } from '../../features/products/productsSlice';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { selectedItem, status, error } = useAppSelector(state => state.products);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(Number(id)));
    }
  }, [id]);

  if (status === 'loading') return <p>Loading...</p>;
  if (!selectedItem) return <p>Product not found</p>;

  return (
    <div className={styles.container}>
      <img src={selectedItem.image} alt={selectedItem.title} />
      <div className={styles.info}>
        <h1>{selectedItem.title}</h1>
        <p>{selectedItem.description}</p>
        <p className={styles.price}>${selectedItem.price}</p>
        <button onClick={() => selectedItem && dispatch(addItem(selectedItem))}>
          Add to Cart
        </button>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
