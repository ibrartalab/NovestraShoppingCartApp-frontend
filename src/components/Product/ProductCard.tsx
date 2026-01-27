import Button from "../Button";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  onAddToCart: () => void;
}

const ProductCard = ({
  title,
  price,
  imageUrl,
  onAddToCart,
}: ProductCardProps) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  imageUrl = baseUrl + "/" + imageUrl;
  return (
    <div className="w-60">
      <div className="product-image-container w-60 h-60 rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="actions flex justify-between items-center mt-2">
        <div className="product-contents flex flex-col">
          <h3 className="text-md font-medium">{title}</h3>
          <p>${price.toFixed(2)}</p>
        </div>
        <div className="add-to-card-btn w-10 h-10 cursor-pointer">
          <Button
            title="+"
            type="button"
            styleClass="bg-black w-full h-full text-sm font-medium text-white rounded-full hover:bg-gray-800 transition duration-300 cursor-pointer"
            onClick={onAddToCart}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
