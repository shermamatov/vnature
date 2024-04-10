import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";

function Galery({ galery, setGalery, galeryStart }) {
    const [sliderRef, setSliderRef] = useState(null);
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img className="w-16" src={galery[i]} alt="1" />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: galeryStart,
        arrows: false,
    };
    function clikckArrows(e) {
        switch (e.key) {
            case "ArrowLeft":
                sliderRef?.slickPrev();
                break;
            case "ArrowRight":
                sliderRef?.slickNext();
                break;
            default:
                return;
        }
    }
    const handleEsc = (event) => {
        if (event.key === "Escape") {
            setGalery(false);
        }
    };

    document.addEventListener("keydown", clikckArrows);
    document.addEventListener("keydown", handleEsc);

    useEffect(() => {
        return () => {
            document.removeEventListener("keydown", clikckArrows);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div
            onClick={() => setGalery(false)}
            className="fixed z-30 top-0 bottom-0 left-0 right-0 backdrop-brightness-[.3] backdrop-blur-sm"
        >
            <div className="relative w-full h-full">
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
                        {galery?.map((item, index) => (
                            <div className="w-full h-full" key={index}>
                                <div>
                                    <img
                                        className="max-w-[90%] max-h-[80vh] md:min-h-[60vh] w-auto h-auto m-auto "
                                        src={item}
                                        alt="1"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div
                    onClick={() => setGalery(false)}
                    className="absolute top-14 md:top-5 right-5"
                >
                    <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 relative cursor-pointer"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.9997 12.5L12.4999 14L7.99972 9.5L3.49978 14L1.99975 12.5L6.49987 7.99998L1.99975 3.49999L3.49978 1.99999L7.99972 6.49998L12.4999 1.99999L13.9997 3.49999L9.49977 7.99998L13.9997 12.5Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Galery;
