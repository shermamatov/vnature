import React, { useState } from "react";
import { tour } from "../../../consts";
import Slider from "react-slick";
import { Avatar } from "@mui/material";

const TourGalery = () => {
    const [sliderRef, setSliderRef] = useState(null);
    const [activeSlide, setActiveSlide] = useState(1);
    let slideCount = 2;
    let adapSlideCount = 1;
    const sliderSettings = {
        // removes default buttons
        arrows: false,
        slidesToShow: slideCount,
        slidesToScroll: slideCount,
        infinite: true,
        beforeChange: (current, next) => {
            setActiveSlide(next);
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: adapSlideCount,
                    slidesToScroll: adapSlideCount,
                    infinite: true,
                    dots: true,
                },
            },
        ],
        // afterChange: (current) => setActiveSlide(current),
    };
    return (
        <div>
            {/* <div className="flex justify-between my-16">
                <p className="text-5xl font-semibold">Галерея тура</p>
                <div className="flex items-center">
                    <svg
                        className="cursor-pointer"
                        onClick={sliderRef?.slickPrev}
                        width={70}
                        height={22}
                        viewBox="0 0 70 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.9479 21.6147C18.8016 21.4571 19.2836 20.9214 19.0633 20.3751C19.0009 20.2204 16.7244 18.7566 12.2484 15.9931L5.52725 11.8434L37.2133 11.8216L68.8992 11.7999L69.2855 11.6237C69.4979 11.5268 69.7612 11.2914 69.8707 11.1005C70.049 10.7893 70.0462 10.723 69.8418 10.4591C69.7165 10.2972 69.4451 10.0966 69.2385 10.0132C68.88 9.86853 67.4192 9.86061 37.1938 9.83988L5.52479 9.81805L12.1807 5.71056C15.8415 3.45141 18.902 1.49622 18.9817 1.36577C19.3166 0.818339 18.9752 0.306811 18.1287 0.0875356C17.1729 -0.160055 17.3591 -0.258991 8.43846 5.2426C2.83449 8.69867 0.0991944 10.4427 0.0376378 10.599C-0.012565 10.7264 -0.0125635 10.9351 0.0377761 11.0625C0.0993326 11.2185 2.8204 12.9567 8.36268 16.3802C15.3954 20.7245 17.1758 21.7582 17.5152 21.6945C17.5364 21.6906 17.731 21.6546 17.9479 21.6147Z"
                            fill="#00499f"
                        />
                    </svg>
                    <p className="text-3xl text-[#00499f] font-semibold mx-8 noselect">
                        {Math.ceil(activeSlide / slideCount + 1)}/
                        {Math.ceil(tour.galery.length / slideCount)}
                    </p>
                    <svg
                        className="cursor-pointer"
                        onClick={sliderRef?.slickNext}
                        width={70}
                        height={22}
                        viewBox="0 0 70 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M52.0521 0.0826113C51.1984 0.240115 50.7164 0.77583 50.9367 1.32216C50.9991 1.47689 53.2756 2.94069 57.7516 5.70421L64.4727 9.85383L32.7867 9.87566L1.10084 9.8974L0.714542 10.0736C0.502104 10.1704 0.238778 10.4059 0.129345 10.5968C-0.0490326 10.908 -0.0461599 10.9742 0.158208 11.2382C0.28351 11.4 0.554905 11.6007 0.761462 11.684C1.11999 11.8287 2.5808 11.8367 32.8062 11.8574L64.4752 11.8792L57.8193 15.9867C54.1585 18.2459 51.098 20.201 51.0183 20.3315C50.6834 20.8789 51.0248 21.3905 51.8713 21.6097C52.8271 21.8573 52.6409 21.9563 61.5615 16.4547C67.1655 12.9986 69.9008 11.2546 69.9624 11.0983C70.0126 10.9708 70.0126 10.7622 69.9622 10.6348C69.9007 10.4788 67.1796 8.7406 61.6373 5.31706C54.6046 0.972773 52.8242 -0.0609875 52.4848 0.00272193C52.4636 0.0066827 52.269 0.0426665 52.0521 0.0826113Z"
                            fill="#00499f"
                        />
                    </svg>
                </div>
            </div> */}
            <div className="flex flex-row justify-between mt-16 mb-8 md:my-16">
                <p className="text-3xl md:text-5xl font-semibold">Галерея</p>
                <div className="md:flex hidden items-center mt-0">
                    <svg
                        className="cursor-pointer"
                        onClick={sliderRef?.slickPrev}
                        width={70}
                        height={22}
                        viewBox="0 0 70 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.9479 21.6147C18.8016 21.4571 19.2836 20.9214 19.0633 20.3751C19.0009 20.2204 16.7244 18.7566 12.2484 15.9931L5.52725 11.8434L37.2133 11.8216L68.8992 11.7999L69.2855 11.6237C69.4979 11.5268 69.7612 11.2914 69.8707 11.1005C70.049 10.7893 70.0462 10.723 69.8418 10.4591C69.7165 10.2972 69.4451 10.0966 69.2385 10.0132C68.88 9.86853 67.4192 9.86061 37.1938 9.83988L5.52479 9.81805L12.1807 5.71056C15.8415 3.45141 18.902 1.49622 18.9817 1.36577C19.3166 0.818339 18.9752 0.306811 18.1287 0.0875356C17.1729 -0.160055 17.3591 -0.258991 8.43846 5.2426C2.83449 8.69867 0.0991944 10.4427 0.0376378 10.599C-0.012565 10.7264 -0.0125635 10.9351 0.0377761 11.0625C0.0993326 11.2185 2.8204 12.9567 8.36268 16.3802C15.3954 20.7245 17.1758 21.7582 17.5152 21.6945C17.5364 21.6906 17.731 21.6546 17.9479 21.6147Z"
                            fill="#00499f"
                        />
                    </svg>
                    <p className="text-3xl text-[#00499f] font-semibold mx-8 noselect">
                        {Math.ceil(activeSlide / slideCount + 1)}/
                        {Math.ceil(tour.galery.length / slideCount)}
                    </p>
                    <svg
                        className="cursor-pointer"
                        onClick={sliderRef?.slickNext}
                        width={70}
                        height={22}
                        viewBox="0 0 70 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M52.0521 0.0826113C51.1984 0.240115 50.7164 0.77583 50.9367 1.32216C50.9991 1.47689 53.2756 2.94069 57.7516 5.70421L64.4727 9.85383L32.7867 9.87566L1.10084 9.8974L0.714542 10.0736C0.502104 10.1704 0.238778 10.4059 0.129345 10.5968C-0.0490326 10.908 -0.0461599 10.9742 0.158208 11.2382C0.28351 11.4 0.554905 11.6007 0.761462 11.684C1.11999 11.8287 2.5808 11.8367 32.8062 11.8574L64.4752 11.8792L57.8193 15.9867C54.1585 18.2459 51.098 20.201 51.0183 20.3315C50.6834 20.8789 51.0248 21.3905 51.8713 21.6097C52.8271 21.8573 52.6409 21.9563 61.5615 16.4547C67.1655 12.9986 69.9008 11.2546 69.9624 11.0983C70.0126 10.9708 70.0126 10.7622 69.9622 10.6348C69.9007 10.4788 67.1796 8.7406 61.6373 5.31706C54.6046 0.972773 52.8242 -0.0609875 52.4848 0.00272193C52.4636 0.0066827 52.269 0.0426665 52.0521 0.0826113Z"
                            fill="#00499f"
                        />
                    </svg>
                </div>
                <div className="flex md:hidden items-center mt-0">
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
                        {Math.ceil(tour.galery.length / adapSlideCount)}
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
                {tour.galery.map((item, index) => (
                    <div className="px-2">
                        <img
                            className="aspect-[16/9] object-cover rounded-md"
                            key={index}
                            src={item}
                            alt=""
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TourGalery;
