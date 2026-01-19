interface ProductsSliderProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductsSlider = ({
  title,
  description,
  price,
  imageUrl,
}: ProductsSliderProps) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  imageUrl = baseUrl + '/' + imageUrl;
  return (
    <div className="slider-wrapper bg-gray-100/5 p-4 rounded-lg flex items-center gap-8 w-md">
      <div className="left-container text-white">
        <h2 className="font-medium">{title}</h2>
        <p className="text-sm font-light">{description}</p>
        <p className="price-tag mt-6 font-medium">${price.toFixed(2)}</p>
      </div>
      <div className="right-container flex  w-64 h-36 bg-gray-100/15 rounded-lg">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg bg-blend-multiply"/>
      </div>
    </div>
  );
};

export default ProductsSlider;
