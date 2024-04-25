
import { createContext, useEffect, useState } from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import { fetchProducts } from "./api-mock/products-api";
import { useQuery } from "react-query";

const ShoppingCartProducts = createContext([]);

// 2 lists = 1 for products, 1 for shopping cart with quantity


const App = () => {
  const {data: products, isFetching, error } = useQuery('get-products', () => fetchProducts())

  // get rid of state setting with react-query
  // const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);

  const cartData = [
  { productId: 1, quantity: 2 },
  { productId: 3, quantity: 1 },
  { productId: 5, quantity: 5 }
]

const handleAddProduct = (product) => {
  const currentProduct = cart.find(cartProduct => cartProduct.productId === product.id);
  console.log(currentProduct, 'dis curr prod')
  if(currentProduct) {
    setCart(cart.map(cartProduct => {
      if(cartProduct.productId === product.id) {
        return {...cartProduct, quantity: cartProduct.quantity+1}
      };
      return cartProduct
    })
  )
  } else {
    setCart([...cart, {productId: product.id, quantity: 1}])
  }
}

const handleRemoveProduct = (product) => {
  const selectedProduct = cart.find(cartProduct => cartProduct.productId === product.id);
  if(selectedProduct && selectedProduct.quantity - 1 > 0 ) {
    setCart(cart.map(cartProduct => {
      if(cartProduct.productId === product.id) {
        return {...cartProduct, quantity: selectedProduct.quantity - 1}
      }
    }))
  } else {
    const filteredCart = cart.filter(cartProduct => cartProduct.quantity < 1);
    console.log(filteredCart, 'dis filtered cart')
    setCart(filteredCart)
  }
}

// Get rid of useEffect() with react-query

  // useEffect(() => {
  //   fetchProducts().then((products) => {
  //     console.log("Fetched the products", products);
  //     setProducts(products);
  //   });
  // });


  return (
    <div>
      <h1>Hello! Here are the available products:</h1>
      <div style={{display: 'grid', gridTemplateColumns: "1fr 0.5fr"}}>
        {products ? (
        <>
          <ProductList products={products} onAddToCart={handleAddProduct} onRemoveProduct={handleRemoveProduct}/>
          <ShoppingCart cart={cart} products={products}/>
        </> ): (<> Loading</>)}
      </div>
    </div>
  );
};

export default App;
