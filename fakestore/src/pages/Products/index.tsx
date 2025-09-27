// src/pages/Products.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchProducts } from '../../features/products/productsSlice';
import styles from './Products.module.scss';

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector(state => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <div className={styles.grid}>
        {items.map(product => (
          <Link to={`/products/${product.id}`} key={product.id} className={styles.card}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
