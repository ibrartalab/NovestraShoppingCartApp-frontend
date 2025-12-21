import React from "react";
import Button from "../Button";
import ProductsSlider from "./ProductsSlider";
import SliderController from "./SliderController";

const Hero = () => {
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
            styleClass="bg-white w-60 h-12 text-md font-semibold text-black rounded-md hover:bg-gray-200 transition duration-300"
            onClick={() => {}}
            disabled={false}
          />
        </div>
        <div className="bottom mt-12">
          <ProductsSlider
            title="Midnight Rose Eau De Parfum"
            description="Experience the allure of midnight with our signature fragrance, blending rich rose notes with a hint of mystery."
            price={79.99}
            imageUrl="/1.jpg"
          />
          <SliderController />
        </div>
      </div>
    </section>
  );
};

export default Hero;
