import {  removeItemFromCart, updateCartItemQty } from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../hooks/redux/reduxHooks";
import Button from "../Button";

interface CartItemProps {
  name?: string;
  quantity: number; // Removed optional for cleaner logic
  price?: number;
  imageUrl?: string;  
  productId: number;
  stock?: number;
  userId: number;
}

const CartItem = ({ name, quantity, price, imageUrl,productId,stock,userId }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  imageUrl = baseUrl + "/" + imageUrl;


  const handleQtyIncrease = async () => {
    const newQty = quantity + 1;
    if (quantity < (stock || 999)) {
      // ONLY dispatch the AsyncThunk.
      // Let the 'fulfilled' case in the slice handle the state update.
      await dispatch(
        updateCartItemQty({ userId, productId, quantity: newQty })
      );
    } else {
      alert("Maximum stock reached");
    }
  };
  
  const handleQtyDecrease = async () => {
    const newQty = quantity - 1;
    if (quantity > 1) {
      await dispatch(updateCartItemQty({ userId, productId, quantity: newQty }));
    }
  };

  const handleRemoveFromCart = async () => {
    await dispatch(removeItemFromCart({ userId, productId }));
  }
  return (
    <div className="cart-item flex justify-between gap-4 my-4 p-2">
      <div className="left">
        <img src={imageUrl} alt={name} className="w-20" />
      </div>
      <div className="right">
        <h4 className="text-md font-medium">{name}</h4>
        <p>Price: ${price?.toFixed(2)}</p>
        <div className="quantity-control my-4 flex items-center">
          <Button
            title="-"
            styleClass="w-8 h-8 bg-gray-200 cursor-pointer rounded-l"
            disabled={quantity <= 1}
            onClick={handleQtyDecrease}
          />
          <span className="mx-2">{quantity}</span>
          <Button
            title="+"
            styleClass="w-8 h-8 bg-gray-200 cursor-pointer rounded-l"
            disabled={quantity >= (stock || 999)}
            onClick={handleQtyIncrease}
          />
        </div>
        <Button
          title="Remove from Cart"
          styleClass="bg-none text-black text-xs underline cursor-pointer p-0"
          disabled={false}
          onClick={handleRemoveFromCart}
        />
      </div>
    </div>
  );
}

export default CartItem