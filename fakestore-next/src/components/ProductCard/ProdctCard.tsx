'use client';
import React from 'react';
import Link from 'next/link';
import { Product } from '../../features/products/types';
import styles from './ProductCard.module.scss';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>
    </Link>
  );
};

export default ProductCard;
