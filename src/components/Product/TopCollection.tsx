import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks";
import ProductCard from "./ProductCard";
import { Loader } from "../Loader";
import { getProducts } from "../../features/product/productSlice";

const TopCollection = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );

  const limitedProducts = products.slice(2, 7);

  useEffect(() => {
    // You can dispatch an action to fetch products here if needed
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (error) {
    return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  }
  return (
    <section
      className="top-collection-section px-20 mt-12 mb-12"
      id="collections"
    >
      <div className="top-collection-contents flex justify-between items-start gap-4 mb-8 ">
        <h2 className="text-black text-sm font-semibold w-1/2">
          Top Collections
        </h2>
        <p className="text-black text-3xl font-light">
          This collection is crafted to awaken tired, dull complexions with
          gentle, glow-enhancing formulas that hydrate, soften, and revive.From
          <span className="text-gray-500 ml-2">
            radiant serums to nourishing moisturizers, each product is part of a
            quiet, intentional ritual created to help you feel like your best,
            brightest self.
          </span>
        </p>
      </div>
      <div className="top-collection-products grid grid-cols-5 gap-6 overflow-x-auto">
        {limitedProducts.map((product) => (
          <ProductCard
            key={product.category}
            title={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            onAddToCart={() => {}}
          />
        ))}
      </div>
    </section>
  );
};

export default TopCollection;
