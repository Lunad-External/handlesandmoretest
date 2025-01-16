"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeBanner.css";

const images = [
  {
    src: "/bannerImage.png",
    content: "HOLD, a premium Canadian brand, crafts luxury door handles blending innovation, elegance, and durability. Transform spaces with timeless designs, ensuring every door becomes a statement of sophistication and style."
  },
  {
    src: "/bannerImage.png",
    content: "HOLD, a premium Canadian brand, crafts luxury door handles blending innovation, elegance, and durability. Transform spaces with timeless designs, ensuring every door becomes a statement of sophistication and style."
  },
  {
    src: "/bannerImage.png",
    content: "HOLD, a premium Canadian brand, crafts luxury door handles blending innovation, elegance, and durability. Transform spaces with timeless designs, ensuring every door becomes a statement of sophistication and style."
  },
];

const HomeBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  
  };

  return (
    <Slider {...settings} className="max-w-6xl mx-auto">
      {images.map((image, index) => (
        <div key={index} className="outline-none">
          <div className="gap-x-4 justify-center items-center p-4 bg-[#F5FAFA] grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-y-2 px-5">
              <div className="flex justify-center items-center mb-4">
                <Image
                  src="/logo.png"
                  alt="HOLD Logo"
                  width={150}
                  height={150}
                />
              </div>
              <div className="items-start inline-flex font-light not-italic text-[#545454] no-underline pb-1">
                {image.content}
              </div>
              <div className="flex items-start gap-x-4 mt-4">
                <a
                  href="/"
                  className="px-2 py-1.5 bg-[#008080] tracking-widest text-white text-sm hover:underline"
                >
                  LEARN MORE
                </a>
                <a
                  href="/"
                  className="font-normal text-[#545454] border-2 border-black tracking-widest text-sm py-1 px-1.5"
                >
                  CHECK CATALOG
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4 md:mt-0">
              <Image
                src={image.src}
                alt="Banner Image"
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HomeBanner;

