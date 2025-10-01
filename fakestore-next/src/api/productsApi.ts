import axiosClient from "./axiosClient";
import { Product } from "@/features/products/types";

export const productsApi = {
  getAll: (): Promise<Product[]> =>
    axiosClient.get('/products').then(res => res.data),

  getById: (id: number): Promise<Product> =>
    axiosClient.get(`/products/${id}`).then(res => res.data),
};