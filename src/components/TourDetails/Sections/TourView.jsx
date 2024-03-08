import React, { useState } from "react";
import "../TourDetails.scss";
// import { tour } from "../../../consts";
import Slider from "react-slick";
import { useSelector } from "react-redux";

const TourView = ({ tour }) => {
    let lang = useSelector((item) => item?.tours?.lang);
    const [sliderRef, setSliderRef] = useState(null);
    const [activeSlide, setActiveSlide] = useState(1);
    let slideCount = 3;
    let adapSlideCount = 2;
    const sliderSettings = {
        // removes default buttons
        arrows: false,
        slidesToShow: slideCount,
        slidesToScroll: slideCount,
        infinite: checkerLangMemories()?.length <= slideCount ? false : true,
        initialSlide: 1,
        beforeChange: (current, next) => {
            setActiveSlide(next < 0 ? 0 : next);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: adapSlideCount,
                    slidesToScroll: adapSlideCount,
                    infinite:
                        checkerLangMemories()?.length <= adapSlideCount
                            ? false
                            : true,
                    dots: true,
                },
            },
        ],
        // afterChange: (current) => setActiveSlide(current),
    };
    function checkerLangMemories() {
        return lang === "rus" ? tour?.memories : tour?.memoriesEng;
    }
    return (
        <div>
            <div className="mt-0 md:mt-10 rounded-[10px] font-montserrat bg-[#c0d6f4] border p-4">
                <p className="text-sm md:text-lg text-left text-black">
                    {lang === "rus"
                        ? tour?.description ||
                          "Кыргызстан — это страна с потрясающей природой, о которой можно говорить многими словами. Вот несколько вариантов описания:"
                        : tour?.descriptionEng ||
                          "Kyrgyzstan is a country with an amazing nature that can be talked about in many words. Here"}
                </p>
            </div>
            <div data-aos="fade-right">
                <div className="flex flex-col md:flex-row justify-between my-8 md:my-16">
                    <p className="text-lg md:text-2xl font-semibold">
                        {lang === "rus"
                            ? "Впечатления этого путешествия"
                            : "Travel Experience"}
                    </p>
                    <div className="md:flex hidden items-center mt-0">
                        <svg
                            width={40}
                            height={25}
                            onClick={sliderRef?.slickPrev}
                            viewBox="0 0 24 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M23 8.5C23.5523 8.5 24 8.05228 24 7.5C24 6.94772 23.5523 6.5 23 6.5L23 8.5ZM0.292893 6.79289C-0.0976314 7.18342 -0.0976315 7.81658 0.292892 8.2071L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84314C8.46159 1.45262 8.46159 0.819455 8.07107 0.428931C7.68054 0.0384065 7.04738 0.0384064 6.65686 0.428931L0.292893 6.79289ZM23 6.5L1 6.5L1 8.5L23 8.5L23 6.5Z"
                                fill="#00499F"
                            />
                        </svg>
                        <p className="text-3xl text-[#00499f] font-semibold mx-8 noselect">
                            {Math.ceil(activeSlide / slideCount + 1)}/
                            {Math.ceil(
                                checkerLangMemories()?.length / slideCount
                            ) || 1}
                        </p>
                        <svg
                            width={40}
                            height={25}
                            onClick={sliderRef?.slickNext}
                            viewBox="0 0 24 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M1 6.5C0.447715 6.5 4.82823e-08 6.94772 0 7.5C-4.82823e-08 8.05228 0.447715 8.5 1 8.5L1 6.5ZM23.7071 8.20711C24.0976 7.81658 24.0976 7.18342 23.7071 6.7929L17.3431 0.428934C16.9526 0.0384092 16.3195 0.0384091 15.9289 0.428933C15.5384 0.819458 15.5384 1.45262 15.9289 1.84315L21.5858 7.5L15.9289 13.1569C15.5384 13.5474 15.5384 14.1805 15.9289 14.5711C16.3195 14.9616 16.9526 14.9616 17.3431 14.5711L23.7071 8.20711ZM1 8.5L23 8.5L23 6.5L1 6.5L1 8.5Z"
                                fill="#00499F"
                            />
                        </svg>
                    </div>
                    <div className="flex md:hidden items-center mt-4">
                        <svg
                            width={24}
                            height={22}
                            onClick={sliderRef?.slickPrev}
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 cursor-pointer"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7L16 9ZM0.292893 7.29289C-0.097631 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65685 0.928931L0.292893 7.29289ZM16 7L1 7L1 9L16 9L16 7Z"
                                fill="#5C91F3"
                            />
                        </svg>
                        <p className="text-2xl text-[#00499f] font-semibold mx-8 noselect">
                            {Math.ceil(activeSlide / adapSlideCount + 1)}/
                            {Math.ceil(
                                checkerLangMemories()?.length / adapSlideCount
                            ) || 1}
                        </p>
                        <svg
                            width={24}
                            height={22}
                            onClick={sliderRef?.slickNext}
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 cursor-pointer"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928931C9.95262 0.538407 9.31946 0.538407 8.92893 0.928931C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM1 9L16 9L16 7L1 7L1 9Z"
                                fill="#00499F"
                            />
                        </svg>
                    </div>
                </div>
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {checkerLangMemories()?.map((item, index) => (
                        <div key={index} className="px-2">
                            <div className="w-[100%]  rounded-[10px] bg-[#e2effe]">
                                <div className="p-2 md:p-4">
                                    <p className="text-sm md:text-lg md:text-left text-left text-black">
                                        {item?.memoriesTitle}
                                    </p>
                                </div>
                                <img
                                    className="w-full rounded-[10px] aspect-square object-cover"
                                    src={item?.memoriesImage}
                                    alt=""
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TourView;
