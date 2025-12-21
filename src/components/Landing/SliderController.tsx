import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SliderController = () => {
  return (
    <div className="mt-8 flex justify-between items-center w-md">
      <div className="slider-controller-left flex gap-4">
        <div className="arrow-1 w-20 h-1 rounded-lg bg-gray-200"></div>
        <div className="arrow-2 w-20 h-1 rounded-lg bg-gray-200"></div>
        <div className="arrow-3 w-20 h-1 rounded-lg bg-gray-200"></div>
      </div>
      <div className="slider-controller-right flex gap-4">
        <div className="circle w-12 h-12 flex justify-center items-center rounded-full bg-gray-200">
          <FaArrowRight />
        </div>
        <div className="circle w-12 h-12 flex justify-center items-center rounded-full bg-gray-200">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default SliderController;
