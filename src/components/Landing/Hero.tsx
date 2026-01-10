import React, { useContext } from "react";
import Button from "../Button";
import ProductsSlider from "./ProductsSlider";
import SliderController from "./SliderController";
import { SliderContext } from "../../context/SiderContext";

const Hero = () => {
      const { counter } = useContext(SliderContext);

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
          <ProductsSlider
            title="Midnight Rose Eau De Parfum"
            description="Experience the allure of midnight with our signature fragrance, blending rich rose notes with a hint of mystery."
            price={79.99}
            imageUrl={`/${counter}.jpg`}
          />
          <SliderController />
        </div>
      </div>
    </section>
  );
};

export default Hero;
