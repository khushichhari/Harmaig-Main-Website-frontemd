import React, { useState } from 'react';
import './Home.css';

const Cart= () => {
  // Sample cart data. In a real-world app, this data would come from a backend or global state like Redux.
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Gold Ring', price: 2000, quantity: 1 },
    { id: 2, name: 'Diamond Necklace', price: 5000, quantity: 1 },
  ]);

  // Function to handle incrementing the quantity of items
  const incrementQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedCartItems);
  };

  // Function to handle decrementing the quantity of items
  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    }
  };

  // Function to remove an item from the cart
  const removeItem = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  // Function to calculate the total price of items in the cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to handle placing the order
  const placeOrder = () => {
    alert('Order placed successfully!');
    setCartItems([]); // Clear cart after placing the order
  };

  return (
    <>
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <> 
        <p>Your cart is empty.</p>
          <img src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0=" alt = "..."/>
          <br/>
          <button id="btn1" >Continue Shopping</button>
      </>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => decrementQuantity(item)}>-</button>
                    {item.quantity}
                    <button onClick={() => incrementQuantity(item)}>+</button>
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button onClick={() => removeItem(item)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <h2>Total: ${getTotalPrice()}</h2>
            <button className="place-order-btn" onClick={placeOrder}>Place Order</button>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;




