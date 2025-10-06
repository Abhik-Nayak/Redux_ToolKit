"use client";

import { StoreBase } from "./storeBase";
import axiosClient from "@/lib/axiosClient";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

class ProductsStore extends StoreBase {
  private state: ProductsState = {
    items: [],
    status: "idle",
    error: null,
  };

  getState = () => this.state;

  fetchProducts = async () => {
    if (this.state.status === "loading") return;
    this.state = { ...this.state, status: "loading", error: null };
    this.emitChange();

    try {
      const res = await axiosClient.get<Product[]>("/products");
      this.state = { ...this.state, items: res.data, status: "succeeded" };
    } catch (e: any) {
      this.state = { ...this.state, status: "failed", error: e.message };
    }

    this.emitChange();
  };
}

export const productsStore = new ProductsStore();