import ProductCard from './ProductCard';

const TopCollection = () => {
  return (
    <section className="top-collection-section px-20 mt-12 mb-12" id="collections">
      <div className="top-collection-contents flex justify-between items-start gap-4 mb-8 ">
        <h2 className="text-black text-sm font-semibold w-1/2">
          Top Collections
        </h2>
        <p className="text-black text-3xl font-light">
          This collection is crafted to awaken tired, dull complexions with
          gentle, glow-enhancing formulas that hydrate, soften, and revive.From
          <span className='text-gray-500 ml-2'>
            radiant serums to nourishing moisturizers, each product is part of a
            quiet, intentional ritual created to help you feel like your best,
            brightest self.
          </span>
        </p>
      </div>
      <div className="top-collection-products grid grid-cols-5 gap-6 overflow-x-auto">
        <ProductCard
            title="Radiant Glow Serum"
            price={49.99}
            imageUrl="/1.jpg"
            onAddToCart={() => {}}
        />
        <ProductCard
            title="Radiant Glow Serum"
            price={49.99}
            imageUrl="/2.jpg"
            onAddToCart={() => {}}
        />
        <ProductCard
            title="Radiant Glow Serum"
            price={49.99}
            imageUrl="/3.jpg"
            onAddToCart={() => {}}
        />
        <ProductCard
            title="Radiant Glow Serum"
            price={49.99}
            imageUrl="/4.jpg"
            onAddToCart={() => {}}
        />
        <ProductCard
            title="Radiant Glow Serum"
            price={49.99}
            imageUrl="/5.jpg"
            onAddToCart={() => {}}
        />
      </div>
    </section>
  );
}

export default TopCollection