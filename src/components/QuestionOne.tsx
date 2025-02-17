"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SLIDER_LIST } from "@/utils/helper";
gsap.registerPlugin(ScrollTrigger);


const Slider = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".slider-section",
        start: "top top",
        end: "200%",
        scrub: 1,
        pin: true,
      },
    });
    tl.fromTo(
      ".slider-item",
      {
        x: "0%",
      },
      {
        x: "-75%",
      },
      "+=0.5"
    );
  }, []);

  return (
    <div className="light-black slider-section min-h-[1014px] mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="max-w-[830px] mx-auto font-medium text-5xl leading-[57.6px] text-white text-center">
          Transforming Secure, Modern{" "}
          <span className="bg-gradient-to-r from-lightPurple to-lightSky bg-clip-text text-transparent">
            Development
          </span>{" "}
          with AdaptsAI
        </h2>
        <div className="overflow-hidden pt-[60px] max-w-[1440px]">
          <div className="flex w-max slider-item left-0 ">
            {SLIDER_LIST.map((item, i) => (
              <div key={i} className="min-w-[1440px]">
                <div className="flex gap-[65px] items-center container max-w-[1140px] mx-auto">
                  <div className="flex flex-col max-w-[461px]">
                    <h3 className="font-roboto font-black text-[256px] leading-[100%] text-white">
                      {item.number}
                    </h3>
                    <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                      {item.title}
                    </h4>
                    <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">
                      {item.description}
                    </p>
                    <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white">
                      {item.secondDescription}
                    </p>
                  </div>
                  <Image
                    src={item.image}
                    alt="slider"
                    width={614}
                    height={417}
                    className="shadow-[0px_4px_58.7px_0px_#00DDFF26] rounded-xl h-[417px] max-lg:max-w-[614px] max-lg:max-h-[417px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Slider End  */}
      </div>
    </div>
  );
};

export default Slider;
