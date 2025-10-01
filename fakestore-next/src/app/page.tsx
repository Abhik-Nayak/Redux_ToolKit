'use client'

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProducts } from "@/features/products/productsSlice";
import ProductCard from "@/components/ProductCard/ProdctCard";
import styles from "./page.module.scss";

export default function Page() {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector(state => state.products);

  useEffect(() => {
    if (status == 'idle') dispatch(fetchProducts());
  }, [dispatch, status])
  return (
    <main className={styles.container}>
      <h1>Products</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <div className={styles.grid}>
        {items.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}