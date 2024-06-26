import React from 'react';
import ShoppingCart from '../ShoppingCart';
import { render, screen } from '@testing-library/react';


const cartNoDiscount = [
    { productId: 1, quantity: 2 },
];

const cartWithProductsDiscount = [
  { productId: 1, quantity: 3 },
];

const products = [
    {
      "id": 1,
      "name": "Little Nap Coffee Beans",
      "price": 18,
      "description": "Little Nap Coffee Beans is a package of high-quality, carefully selected coffee beans that have been roasted to perfection. These beans are renowned for their rich, full-bodied flavor, complex aroma, and smooth finish. They are often sourced from specialty coffee-growing regions and are carefully blended to create a unique and satisfying taste experience. Perfect for coffee connoisseurs and those who appreciate a good cup of coffee, a bag of premium coffee beans is an excellent addition to any coffee lover's kitchen.",
      "image": "lex-sirikiat-QouiCn7u6kw-unsplash.jpg"
    },
    {
      "id": 2,
      "name": "White coffee bug",
      "price": 4.99,
      "description": "This white coffee mug is a simple and versatile porcelain cup you can use for drinking coffee, tea, or any hot beverage. This classic design makes it suitable for any kitchen decor or occasion. Its neutral color allows it to match well with any table setting, and its large size makes it perfect for those who prefer a generous serving of their favorite hot drink. The white coffee mug is a staple of any coffee lover's collection and is an essential item for starting any day off right.",
      "image": "vanesa-giaconi-VVcggzlkYgE-unsplash.jpg"
    },
    {
      "id": 3,
      "name": "Tea set",
      "price": 39.99,
      "description": "This tea set is a complete tea-making solution for tea enthusiasts. It consists of a beautiful and functional kettle for boiling water and a set of delicate tea cups designed for serving tea. The kettle is made of ceramic and comes with a handle and spout for easy pouring. The tea cups are small and dainty with a simple yet elegant design. Whether for a quiet afternoon tea with a friend, a family gathering, or a special event, this tea set offers a classic and sophisticated way to enjoy a relaxing cup of tea.",
      "image": "alisher-sharip-mumpl9-D7Uc-unsplash.jpg"
    },
    {
      "id": 4,
      "name": "Darjeeling tea",
      "price": 10,
      "description": "'Stories' darjeeling tea is a package of high-quality tea leaves that have been harvested and processed in the Darjeeling district of West Bengal, India. These tea leaves are known for their unique flavor profile that ranges from floral and fruity to spicy and musky. The tea leaves are carefully hand-plucked and processed using traditional methods, resulting in a tea that is both of excellent quality and steeped in history. The tea leaves are packaged in a convenient bag, making it easy to brew and enjoy a cup of this delicious tea. A bag of Darjeeling tea is an excellent choice for tea connoisseurs and those who appreciate the finer things in life, as well as anyone who wants to experience the unique and sophisticated taste of one of the world's finest teas.",
      "image": "rajat-sarki-K0na2mg7Lgs-unsplash.jpg"
    },
    {
      "id": 5,
      "name": "Hustle coffee mug",
      "price": 11.95,
      "description": "This black coffee mug with the text 'Hustle' is a bold and motivational porcelain cup designed for coffee, tea, or any hot beverage. The mug is colored in a classic black color that gives it a sleek and modern look. The text 'Hustle' is printed in white, making it stand out and providing a bold statement. This mug is perfect for anyone who wants to start their day with a burst of inspiration and motivation. It's a great gift for entrepreneurs, business people, and anyone who is working hard to achieve their goals. The black coffee mug with the text 'Hustle' is a functional and stylish addition to any coffee or tea lover's collection.",
      "image": "garrhet-sampson-CmF_5GYc6c0-unsplash.jpg"
    }
  ]

test('component renders without error', () => {
  render(<ShoppingCart cart={[]} products={products} />);
  const cartTotal = screen.getByTestId('product-total');
  const totalPrice = screen.getByTestId('total-price');

  expect(cartTotal.textContent).toBe('You have 0 products in your cart.');
  expect(totalPrice.textContent).toBe('Total Price: $0.00');
})


describe('discount additions', () => {
  test('no discount', () => {
    render(<ShoppingCart cart={cartNoDiscount} products={products} />);
    const cartTotal = screen.getByTestId('product-total');
    const totalPrice = screen.getByTestId('total-price');
    expect(cartTotal.textContent).toBe('You have 2 products in your cart.');
    expect(totalPrice.textContent).toContain('36.00');

  })

  test('discount', () => {
    
    render(<ShoppingCart cart={cartWithProductsDiscount} products={products} />);
    const cartTotal = screen.getByTestId('product-total');
    const totalPrice = screen.getByTestId('total-price');
    // regular: 18 x 3 = 54
    expect(cartTotal.textContent).toBe('You have 3 products in your cart.');   
    expect(totalPrice.textContent).not.toContain('54.00');
  })
})