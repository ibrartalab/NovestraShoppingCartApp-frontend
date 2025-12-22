import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="px-20 py-10 bg-black" id="about">
      <div className="top">
        <h4 className="text-white text-sm font-semibold w-1/2">
          Client feedback
        </h4>
        <div className="title-navigation flex justify-between items-center ">
          <h2 className="text-5xl font-medium text-white">
            What our clients say about us
          </h2>
          <div className="navigation-dots flex gap-4">
            <div className="circle w-12 h-12 flex justify-center items-center rounded-full bg-gray-200">
              <FaArrowRight className="rotate-180"/>
            </div>
            <div className="circle w-12 h-12 flex justify-center items-center rounded-full bg-gray-200">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="feebacks mt-12 flex justify-between items-start gap-8 mb-8 *:text-gray-200">
        <div className="left w-1/3 border-b-2 border-gray-500 pb-4 mb-4">
          <h4 className="text-md font-medium">Anne Jhon</h4>
          <p className="text-sm font-light">Wall Painter Designer</p>
        </div>
        <div className="right">
          <div className="feedback-card w-3/4">
            <p>
              "Coco Noir Eau de Parfum is the ultimate expression of feminine
              power. With radiant grapefruit and bergamot, sensual rose and
              jasmine, and an unforgettable base of patchouli and
              frankincense—this is a perfume that lingers long after you’ve left
              the room."
            </p>
          </div>
        </div>
      </div>
      <div className="image-cointainer-for-aboutus w-full h-96 overflow-hidden">
        <img src="/aboutus.jpg" alt="about us" className="w-full h-full object-cover rotate-y-180 bg-blend-luminosity"/>
      </div>
    </section>
  );
};

export default AboutUs;
