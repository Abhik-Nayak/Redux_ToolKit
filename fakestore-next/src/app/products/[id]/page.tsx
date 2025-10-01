'use client'

import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchProductById, clearSelected } from '@/features/products/productsSlice';
import styles from "./ProductDetails.module.scss";
import { addItem } from '@/features/cart/cartSlice';

type Props = {}

const page = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { selectedItem, status, error } = useAppSelector(state => state.products);

  useEffect(() => {
    if (id) dispatch(fetchProductById(Number(id)));

    return () => {
      dispatch(clearSelected()); // cleanup on unmount
    };
  }, [dispatch, id]);

  if (status === 'loading' || status === 'idle') return <p className={styles.loading}>Loading...</p>;
  if (status === 'failed') return <p className={styles.error}>Error: {error}</p>;
  if (!selectedItem) return <p className={styles.notFound}>Product not found</p>;

  return (
    <main className={styles.container}>
      <div className={styles.imageWrap}>
        <img src={selectedItem.image} alt={selectedItem.title} />
      </div>
      <div className={styles.info}>
        <h1>{selectedItem.title}</h1>
        <p className={styles.price}>${selectedItem.price}</p>
        <p className={styles.desc}>{selectedItem.description}</p>
        <button className={styles.addBtn} onClick={() => dispatch(addItem(selectedItem))}>
          Add to Cart
        </button>
      </div>
    </main>
  );
}
export default page