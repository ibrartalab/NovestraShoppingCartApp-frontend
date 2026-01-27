import { useContext, useEffect } from 'react'
import Button from '../Button'
import { CartToggleContext } from '../../context/CartToggleContext';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/reduxHooks';
import { getCart } from '../../features/cart/cartSlice';
import CartItem from './CartItem';



const Cart = () => {
    const { setIsCartOpen} = useContext(CartToggleContext);
    const userId = useAppSelector((state) => state.auth.userId);
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    const dispatch = useAppDispatch();


    useEffect(()=> {
      if(userId) {
        dispatch(getCart(userId)).then((respomse =>{
          console.log("Cart fetched successfully:", respomse);
        }));
      }
    },[dispatch,userId])

    const totalItems = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + (item.product?.price ?? 0) * item.quantity,
      0
    );
  
  return (
    <div className="absolute top-4 right-20 bg-white w-2/6 h-auto rounded-lg shadow-lg flex justify-between z-50">
      <div className="left p-4">
        <h3>Shopping Cart {0}</h3>
        <hr />
        {cartItems.length <= 1 && (
          <p className="mt-4 text-gray-500">Your cart is empty.</p>
        )}
        {cartItems.map((item) => (
            <CartItem
              name={item.product.name}
              quantity={item.quantity}
              price={item.product.price}
              imageUrl={item.product.imageUrl}
            />
          ))}
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
        <p className="mt-10">Total Items: {totalItems}</p>
        <p className="mt-1">Total: ${totalPrice.toFixed(2)}</p>
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