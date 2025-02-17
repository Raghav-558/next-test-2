
import { SLIDER_ICONS_LIST } from "@/utils/helper";
import React from "react";

const GsapSlider = () => {
  return (
    <div className="pt-[156px] pb-[113px] max-md:py-[60px]">
      <div className="max-w-[1172px] mx-auto px-4 w-full">
        <h2 className="max-w-[830px] mx-auto font-medium text-5xl leading-[57.6px] text-white text-center">
          Transforming Secure, Modern{" "}
          <span className="bg-gradient-to-r from-lightPurple to-lightSky bg-clip-text text-transparent">
            Development
          </span>{" "}
          with AdaptsAI
        </h2>
        <div className="flex items-center justify-between pt-[60px]">
          {SLIDER_ICONS_LIST.map((obj, i) => (
            <div
              key={i}
              className="size-[58px] border border-lightBlue rounded-md flex items-center justify-center"
            >
              {obj}
            </div>
          ))}
        </div>
      </div>
      <div className="border border-lightGray mt-3"></div>
    </div>
  );
};

export default GsapSlider;
