import React, { useEffect } from 'react'
import ProductCard from './ProductCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/reduxHooks';
import { getProducts } from '../../features/product/productSlice';
import { Loader } from '../Loader';

const Products = () => {
  const {products, loading,error} = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // You can dispatch an action to fetch products here if needed
    dispatch(getProducts());
  }, [dispatch]);

  if(loading){
    return<><Loader /></>
  }
  if(error){
    return <div className='text-red-500 text-center mt-10'>Error: {error}</div>
  }

  console.log("Products:", products.map(p => p.imageUrl.split('/')[3]));

  return (
    <section className='bg-gray-100 py-10' id="products">
      <div className="products-section px-20 mt-12 m-auto text-center">
        <h2 className="text-black text-3xl font-semibold">Our Products</h2>
        <p className='text-gray-600 mt-4 mb-8'>
          Coco is part of the iconic Coco fragrance line launched in 2012, it
          captures the darker, more sensual side of the brand's legend.
        </p>
        <div className="products-grid grid grid-cols-5 gap-6 overflow-x-auto">
          {/* Product items would go here */}
          {products.map((product) => (
            <ProductCard
              key={product.category}
              title={product.name}
              price={product.price} 
              imageUrl={product.imageUrl} // Assuming imageUrl is a comma-separated string
              onAddToCart={() => {}}
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
}

export default Products