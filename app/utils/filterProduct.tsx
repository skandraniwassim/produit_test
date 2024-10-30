'use client';

import { Product } from "../components/Product";

export const filterProducts = (products: Product[], minRating: number) => {
  return products.filter(product => product.rating >= minRating);
};