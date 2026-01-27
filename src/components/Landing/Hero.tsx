import React, { useContext } from "react";
import Button from "../Button";
import ProductsSlider from "../Product/ProductsSlider";
import SliderController from "../Product/SliderController";
import { SliderContext } from "../../context/SiderContext";
import { useAppSelector } from "../../hooks/redux/reduxHooks";

const Hero = () => {
      const { counter } = useContext(SliderContext);
      const {products } = useAppSelector((state) => state.products);

      const featuresProduct = products.filter(
        (p) =>
          p.name === "Sea Salt & Sage" ||
          p.name === "Solar Nectar" ||
          p.name === "Velvet Peony"
      );

  return (
    <section className="hero">
      <div className="hero-section-contents px-20 mt-12">
        <div className="top w-md flex flex-col gap-6">
          <h1 className="text-white text-5xl font-semibold text-wrap leading-16">
            Wrap Yourself in Eau De Parfum
          </h1>
          <p className="text-white font-light">
            A seductive blend of grapefruit, rose, oud, and amber designed to
            evoke night-time allure and timeless elegance.
          </p>
          <Button
            title="View Our Collections"
            type="button"
            styleClass="border border-white w-60 h-12 text-md font-semibold text-white rounded-md hover:bg-gray-200 hover:text-black transition duration-300 cursor-pointer"
            onClick={() => {}}
            disabled={false}
          />
        </div>
        <div className="bottom mt-10">
         { featuresProduct.length > 0 && (
          <ProductsSlider
            title={featuresProduct[counter].name}
            description={featuresProduct[counter].description}
            price={featuresProduct[counter].price}
            imageUrl={featuresProduct[counter].imageUrl}
          />
         )}
          <SliderController />
        </div>
      </div>
    </section>
  );
};

export default Hero;
