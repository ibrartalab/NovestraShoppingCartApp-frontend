import React, { useContext } from 'react'
import Button from '../Button'
import CartItem from './CartItem';
import { CartToggleContext } from '../../context/CartToggleContext';



const Cart = () => {
    const { isCartOpen , setIsCartOpen} = useContext(CartToggleContext);
  
  return (
    <div className="absolute top-4 right-20 bg-white w-2/6 h-auto rounded-lg shadow-lg flex justify-between z-50">
      <div className="left p-4">
        <h3>Shopping Cart {0}</h3>
        <hr />
        <p>Your cart is empty.</p>
        <CartItem
          name="Product Name"
          quantity={1}
          price={29.99}
          imageUrl="/1.jpg"
        />
        <CartItem
          name="Product Name"
          quantity={1}
          price={29.99}
          imageUrl="/1.jpg"
        />
        <CartItem
          name="Product Name"
          quantity={1}
          price={29.99}
          imageUrl="/1.jpg"
        />
      </div>
      <div className="right bg-gray-300 w-1/2 h-auto p-4 rounded-tr-lg rounded-br-lg">
        <div className="header flex justify-between items-center">
          <h3>Order Details</h3>
          <Button
            title="X"
            type="button"
            styleClass="text-black rounded-full border-2 w-8 h-8 flex items-center justify-center cursor-pointer"
            disabled={false}
            onClick={() => setIsCartOpen(false)}
          />
        </div>
        <p className="mt-10">Total Items: {0}</p>
        <p className="mt-1">Total: $0.00</p>
        <Button
          title="Proceed to Checkout"
          type="button"
          styleClass="w-full h-10 bg-black text-white rounded mt-4 cursor-pointer"
          disabled={false}
          onClick={() => {}}
        />
        <Button
          title="Clear Cart"
          type="button"
          styleClass="w-full h-10 bg-red-600 text-white rounded mt-4 cursor-pointer"
          disabled={false}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default Cart