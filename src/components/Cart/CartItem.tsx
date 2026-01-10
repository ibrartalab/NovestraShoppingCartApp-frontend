import Button from "../Button";

interface CartItemProps {
  name?: string;
  quantity?: number;
  price?: number;
  imageUrl?: string;
}

const CartItem = ({ name, quantity, price, imageUrl }: CartItemProps) => {
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
            disabled={false}
            onClick={() => {}}
          />
          <span className="mx-2">{quantity}</span>
          <Button
            title="+"
            styleClass="w-8 h-8 bg-gray-200 cursor-pointer rounded-l"
            disabled={false}
            onClick={() => {}}
          />
        </div>
        <Button
          title="Remove from Cart"
          styleClass="bg-none text-black text-xs underline cursor-pointer p-0"
          disabled={false}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default CartItem