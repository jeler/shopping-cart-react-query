import React from "react";
import Product from "./Product";


export default function ProductList({products, onAddToCart, onRemoveProduct}) {
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