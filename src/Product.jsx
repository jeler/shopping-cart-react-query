import React, { useState } from "react";

export default function Product({product, onAddToCart, onRemoveProduct}) {
    // const [data, setData] = useState("");
    

//   function handleClick(data) {
//     sendDataToParent(data);
//     setData(data)
//   }
    // const handleClick = (product)  => {
    //     // console.log(addProduct)
    //     // addProduct(product)
    //     setData(product)
    // }
    return (
        <li key={product.id}>
        <div>
          <p>
            {product.name} ( price: ${product.price})
          </p>
          <img src={`images/${product.image}`} width="200px" />
        </div>
        <button onClick={() => onAddToCart(product)} >Add Product</button>
        <button onClick={() => onRemoveProduct(product)}>Remove Product</button>
      </li>
    )
}