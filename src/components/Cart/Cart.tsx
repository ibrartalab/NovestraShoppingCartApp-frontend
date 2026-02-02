import { useContext, useEffect } from "react";
import Button from "../Button";
import { CartToggleContext } from "../../context/CartToggleContext";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks";
import { getCart } from "../../features/cart/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const { setIsCartOpen } = useContext(CartToggleContext);
  const dispatch = useAppDispatch();
  // Get everything from Redux
  const userId = useAppSelector((state) => state.auth.userId);
  const { loading, cartItems, totalItems, totalPrice } = useAppSelector(
    (state) => state.cart
  );

  console.log("Cart Items:", cartItems);
  useEffect(() => {
    if (userId) {
      dispatch(getCart(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className="absolute top-4 right-20 bg-white w-[450px] min-h-min rounded-lg shadow-2xl flex flex-row z-50 overflow-hidden border border-gray-100">
      {/* Left Section: Items */}
      <div className="w-3/5 p-4 max-h-[80vh] overflow-y-auto">
        <h3 className="font-bold text-lg">Shopping Cart ({totalItems})</h3>
        <hr className="my-2" />

        {loading && <p className="text-sm text-blue-500">Updating cart...</p>}

        {cartItems.length === 0 ? (
          <p className="mt-4 text-gray-400 italic">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => {
            // Defensive check for .NET PascalCase vs JS camelCase
            const product = item.product || (item as any).Product;

            return (
              <CartItem
                key={item.productId}
                name={product?.name || product?.Name}
                quantity={item.quantity}
                price={product?.price ?? product?.Price ?? 0}
                imageUrl={product?.imageUrl || product?.ImageUrl}
                productId={item.productId}
                userId={userId ?? 0}
              />
            );
          })
        )}
      </div>

      {/* Right Section: Summary */}
      <div className="w-2/5 bg-gray-50 p-4 flex flex-col justify-between border-l border-gray-200">
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Order Details</h3>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-400 hover:text-black transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal Items:</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between font-bold text-base pt-2 border-t">
              <span>Total Amount:</span>
              <span className="text-green-600">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-4">
          <Button
            title="Checkout"
            styleClass="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition shadow-md"
            onClick={() => {}}
            disabled={false}
          />
          <Button
            title="Clear Cart"
            styleClass="w-full border border-red-200 text-red-600 py-2 rounded-md hover:bg-red-50 transition"
            onClick={() => {}}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
