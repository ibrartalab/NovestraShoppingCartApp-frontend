import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { SliderContext } from "../../context/SiderContext";

const SliderController = () => {
    const { counter, setCounter } = useContext(SliderContext);

    const handlePrev = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const handleNext = () => {
        if (counter < 3) {
            setCounter(counter + 1);
        }
    };
  return (
    <div className="mt-8 flex justify-between items-center w-md">
      <div className="slider-controller-left flex gap-4">
        <div className={`arrow-1 w-20 h-1 rounded-lg ${counter === 1 ? "bg-gray-200" : "bg-gray-200/20"}`}></div>
        <div className={`arrow-2 w-20 h-1 rounded-lg ${counter === 2 ? "bg-gray-200" : "bg-gray-200/20"}`}></div>
        <div className={`arrow-3 w-20 h-1 rounded-lg ${counter === 3 ? "bg-gray-200" : "bg-gray-200/20"}`}></div>
      </div>
      <div className="slider-controller-right flex gap-4">
        <div
          className={`circle w-12 h-12 flex justify-center items-center rounded-full ${
            counter === 1
              ? "border border-gray-200 *:text-white"
              : "bg-gray-200"
          } cursor-pointer`}
          onClick={handlePrev}
        >
          <FaArrowRight className="rotate-180 cursor-pointer" />
        </div>
        <div
          className={`circle w-12 h-12 flex justify-center items-center rounded-full ${
            counter === 3
              ? "border border-gray-200 *:text-white"
              : "bg-gray-200"
          } cursor-pointer`}
          onClick={handleNext}
        >
          <FaArrowRight className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SliderController;
