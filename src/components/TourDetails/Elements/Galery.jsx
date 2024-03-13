import React, { Component, useState } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";

function Galery({ galery, setGalery, galeryStart }) {
    const [sliderRef, setSliderRef] = useState(null);
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img
                        className="w-16"
                        src={galeryStart > 4 ? galery[i + 5] : galery[i]}
                        alt="1"
                    />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: galeryStart > 4 ? galeryStart - 1 : galeryStart,
        arrows: false,
    };
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="slider-container max-w-[90vw] m-auto relative top-[45%] -translate-y-1/2 "
        >
            <div className="absolute w-full h-full flex justify-between items-center">
                <svg
                    width={24}
                    height={37}
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="z-10 cursor-pointer"
                    onClick={sliderRef?.slickPrev}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 12.5L7.5 14L0.5 7L7.5 0L9 1.5L3.5 7L9 12.5Z"
                        fill="white"
                    />
                </svg>
                <svg
                    width={24}
                    height={37}
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="z-10 cursor-pointer"
                    onClick={sliderRef?.slickNext}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 12.5L1.5 14L8.5 7L1.5 0L0 1.5L5.5 7L0 12.5Z"
                        fill="white"
                    />
                </svg>
            </div>

            <Slider ref={setSliderRef} {...settings}>
                {galeryStart > 4
                    ? galery?.slice(5).map((item, index) => (
                          <div className="w-full h-full" key={index}>
                              <div>
                                  <img
                                      className="max-w-[90%] max-h-[80vh] md:min-h-[60vh] w-auto h-auto m-auto"
                                      src={item}
                                      alt="1"
                                  />
                              </div>
                          </div>
                      ))
                    : galery?.slice(0, 5).map((item, index) => (
                          <div className="w-full h-full" key={index}>
                              <div>
                                  <img
                                      className="max-w-[90%] max-h-[80vh] md:min-h-[60vh] w-auto h-auto m-auto"
                                      src={item}
                                      alt="1"
                                  />
                              </div>
                          </div>
                      ))}
                {/* {galery?.map((item, index) => (
                    <div className="w-full h-full" key={index}>
                        <div>
                            <img
                                className="max-w-[90%] max-h-[80vh] md:min-h-[60vh] w-auto h-auto m-auto"
                                src={item}
                                alt="1"
                            />
                        </div>
                    </div>
                ))} */}
            </Slider>
        </div>
    );
}

export default Galery;
