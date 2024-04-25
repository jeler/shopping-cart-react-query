import React, { useEffect, useState } from "react";
import { fetchProducts } from "./api-mock/products-api";
import Product from "./Product";


export default function ProductList({products, onAddToCart, onRemoveProduct}) {
  console.log(products)
    return (
        <>
            <ul>
              {products.map((product) => (
               <Product product={product} key={product.id} onAddToCart={onAddToCart} onRemoveProduct={onRemoveProduct}/>
              ))}
            </ul>
        </>
    )
}