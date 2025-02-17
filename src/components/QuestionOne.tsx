"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SLIDER_ICONS_LIST, SLIDER_LIST } from "@/utils/helper";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AiSlider = () => {
  useEffect(() => {
    gsap.to(".slider-container", {
      xPercent: -105 * (SLIDER_LIST.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".slider-container",
        pin: true,
        scrub: 0.5,
        end: "+=3000",
        id: "slider",
      },
    });
  }, []);

  return (
    <div className="pt-[156px] pb-[113px] max-md:py-[60px] overflow-hidden">
      <div className="max-w-[1172px] px-4 mx-auto">
        <Image
          src="/assets/images/webp/blue-layer.webp"
          alt="shadow"
          width={199}
          height={199}
          className="absolute top-10 right-0 pointer-events-none"
        />
        <h2 className="max-w-[830px] mx-auto font-medium text-5xl leading-[57.6px] text-white text-center max-md:text-3xl max-md:leading-[36px]">
          Transforming Secure, Modern{" "}
          <span className="bg-gradient-to-r from-lightPurple to-lightSky bg-clip-text text-transparent">
            Development
          </span>{" "}
          with AdaptsAI
        </h2>
        <div className="flex items-center justify-between pt-[60px] max-md:pt-[30px]">
          {SLIDER_ICONS_LIST.map((obj, i) => (
            <div
              key={i}
              className="size-[58px] border border-lightSky border-opacity-[24%] rounded-md flex items-center justify-center max-md:size-[40px]"
            >
              {obj}
            </div>
          ))}
        </div>
      </div>
      <div className="slider-container flex flex-nowrap w-full pt-[60px] max-lg:pt-10 gap-8 !px-4 max-md:gap-4">
        {SLIDER_LIST.map((obj, i) => (
          <div
            key={i}
            className="slider-item flex-shrink-0 flex justify-center gap-[65px] w-[100vw] max-md:flex-col max-md:gap-[20px]"
          >
            <div className="max-w-[461px] pt-[26px] max-md:max-w-full">
              <Image
                src={obj.number}
                alt="number"
                width={297}
                height={182}
                className="mb-6 max-lg:max-w-[250px] max-md:max-w-[150px] pointer-events-none"
              />
              <p className="text-[32px] font-bold leading-[39px] pb-4 text-white max-lg:text-[24px] max-lg:leading-[30px]">
                {obj.title}{" "}
                <span className="bg-gradient-to-l to-lightSky from-lightPurple bg-clip-text text-transparent text-[32px] font-bold leading-[39px] max-lg:text-[24px] max-lg:leading-[30px]">
                  {obj.gradientText}
                </span>
              </p>
              <p className="font-poppins text-white leading-[25px] opacity-90 max-lg:text-[18px] max-lg:leading-[22px]">
                {obj.description}
              </p>
              {obj.secondDescription && (
                <p className="font-poppins text-white leading-[25px] opacity-90 max-lg:text-[18px] max-lg:leading-[22px]">
                  {obj.secondDescription}
                </p>
              )}
            </div>
            <div>
              <Image
                src={obj.image}
                alt={obj.imageAlt}
                height={427}
                width={614}
                className="shadow-[0px_4px_58.7px_0px_#00DDFF26] pointer-events-none rounded-xl h-[417px] max-lg:max-w-[480px] max-lg:max-h-[417px] max-md:flex max-md:justify-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiSlider;
