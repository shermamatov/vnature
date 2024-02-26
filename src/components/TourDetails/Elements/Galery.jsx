import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";

function Galery({ galery, setGalery, galeryStart }) {
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
    };
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="slider-container max-w-[90vw] m-auto relative top-[45%] -translate-y-1/2 "
        >
            <Slider {...settings}>
                {galery?.map((item, index) => (
                    <div className="w-full h-full" key={index}>
                        <div>
                            <img
                                className="max-w-[90%] max-h-[80vh] w-auto h-auto m-auto"
                                src={item}
                                alt="1"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Galery;
