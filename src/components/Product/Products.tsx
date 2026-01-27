import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks";
import { getProducts } from "../../features/product/productSlice";
import { Loader } from "../Loader";
import { addToCart, getCart } from "../../features/cart/cartSlice";

const Products = () => {
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.cart.id);
  const userId = useAppSelector((state) => state.auth.userId);


  useEffect(() => {
    dispatch(getProducts());
    // If the user is logged in, fetch their current cart too
    if (userId) {
      dispatch(getCart(userId));
    }
  }, [dispatch, userId]);

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
    <section className="bg-gray-100 py-10" id="products">
      <div className="products-section px-20 mt-12 m-auto text-center">
        <h2 className="text-black text-3xl font-semibold">Our Products</h2>
        <p className="text-gray-600 mt-4 mb-8">
          Coco is part of the iconic Coco fragrance line launched in 2012, it
          captures the darker, more sensual side of the brand's legend.
        </p>
        <div className="products-grid grid grid-cols-5 gap-6 overflow-x-auto">
          {/* Product items would go here */}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              imageUrl={product.imageUrl} // Assuming imageUrl is a comma-separated string
              onAddToCart={async () => {
                try {
                  // .unwrap() allows you to use try/catch on the thunk

                  if(!id){
                    alert("Cart not loaded yet. Please wait a moment.");
                    return;
                  }
                  await dispatch(
                    addToCart({
                      userId: userId!,
                      cartId: id,
                      productId: product.id,
                      quantity: 1
                    })
                  ).unwrap();

                  await dispatch(getCart(userId!));

                  alert(`${product.name} added to cart!`);
                } catch (err:unknown) {
                  alert(`Failed to add to cart. Please try again.${err}`);
                }
              }}
            />
          ))}
          {/* <ProductCard
            title="Coco Noir Eau De Parfum"
            price={89.99}
            imageUrl="/5.jpg"
            onAddToCart={() => {}}
          />
          <ProductCard
            title="Coco Noir Eau De Parfum"
            price={89.99}
            imageUrl="/4.jpg"
            onAddToCart={() => {}}
          />
          <ProductCard
            title="Coco Noir Eau De Parfum"
            price={89.99}
            imageUrl="/3.jpg"
            onAddToCart={() => {}}
          />
          <ProductCard
            title="Coco Noir Eau De Parfum"
            price={89.99}
            imageUrl="/2.jpg"
            onAddToCart={() => {}}
          />
          <ProductCard
            title="Coco Noir Eau De Parfum"
            price={89.99}
            imageUrl="/1.jpg"
            onAddToCart={() => {}}
          />
          <ProductCard
            title="Coco Noir Eau De Parfum"
            price={89.99}
            imageUrl="/3.jpg"
            onAddToCart={() => {}}
          />
          <ProductCard
            title="Coco Noir Eau De Parfum"
            price={89.99}
            imageUrl="/1.jpg"
            onAddToCart={() => {}}
          />
          <ProductCard
            title="Coco Noir Eau De Parfum"
            price={89.99}
            imageUrl="/2.jpg"
            onAddToCart={() => {}}
          />
          <ProductCard
            title="Coco Noir Eau De Parfum"
            price={89.99}
            imageUrl="/5.jpg"
            onAddToCart={() => {}}
          />
          <ProductCard
            title="Coco Noir Eau De Parfum"
            price={89.99}
            imageUrl="/4.jpg"
            onAddToCart={() => {}}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Products;
