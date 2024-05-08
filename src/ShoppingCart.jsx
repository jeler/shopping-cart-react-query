import React from "react";

export default function ShoppingCart({cart, products}) {
    console.log(cart, 'dis cart')
    const cartWithDetails = cart.map(item => {
        const productDetails = products.find(prod => prod.id === item.productId);
        return {
          ...item,
          cost: productDetails.price,
          productName: productDetails.name,
          price: productDetails.price,
          totalProductPrice: calculateTotalItemCost(item.quantity, productDetails.price)
        }
      })

      const totalCartPrice = cartWithDetails.reduce((total, currentItem) => {
        return total + currentItem.totalProductPrice;
      }, 0);

      function calculateTotalItemCost(quantity, price) {
        const regularTotal = quantity * price;
        if(quantity > 2) {
          const discountAmount = quantity * price* 0.10;
          return regularTotal - discountAmount
        }
        return regularTotal;
      }
    
    return (
        <div style={{backgroundColor: 'lightblue'}}>
          <h3>Shopping cart</h3>
          <p>You have {cart.length} products in your cart.</p>
          
          <div style={{display: 'grid', gridTemplateColumns: "1fr 0.5fr 0.5fr"}}>
            <div>Product</div>
            <div>Quantity</div>
            <div>Price</div>
          {cartWithDetails.map(product => (
            <>
             <div>
            {product.productName}
            </div>
            <div>
                {product.quantity}
            </div>
            <div>
                ${product.price}
            </div>
            </>
        ) )}
          </div>
          <div style={{display: 'grid', gridTemplateColumns: "1fr", justifyItems: "end"}}>
            Total Price: ${totalCartPrice}
          </div>
        </div>
      );
}