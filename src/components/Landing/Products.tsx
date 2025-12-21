import React from 'react'
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <section className='bg-gray-100 py-10'>
      <div className="products-section px-20 mt-12 m-auto text-center">
        <h2 className="text-black text-3xl font-semibold">Our Products</h2>
        <p className='text-gray-600 mt-4 mb-8'>
          Coco is part of the iconic Coco fragrance line launched in 2012, it
          captures the darker, more sensual side of the brand's legend.
        </p>
        <div className="products-grid grid grid-cols-5 gap-6 overflow-x-auto">
          {/* Product items would go here */}
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
          />
        </div>
      </div>
    </section>
  );
}

export default Products