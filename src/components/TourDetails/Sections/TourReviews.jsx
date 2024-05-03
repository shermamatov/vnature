import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOneTourReviews } from "../../../store/reducers/tourReducer";
import "../TourDetails.scss";
import OneReviewModal from "../Elements/OneReviewModal";
import { useParams } from "react-router-dom";
const TourReviews = ({ tour, setReviewsModal }) => {
    let lang = useSelector((item) => item.tours.lang);
    let tourReviews = useSelector((item) => item.tours.oneTourReviews);
    let [oneReviewModalState, setOneReviewModalState] = useState(false);
    let [oneReview, setOneReview] = useState({});
    let dispatch = useDispatch();
    let { id } = useParams();
    const [sliderRef, setSliderRef] = useState(null);
    const [activeSlide, setActiveSlide] = useState(1);
    let slideCount = 3 > tourReviews.length ? tourReviews.length : 3;
    let adapSlideCount = 1;

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name = "timur shermamatov") {
        let nameArr = name?.split(" ");
        if (nameArr.length > 1) {
            return {
                sx: {
                    bgcolor: stringToColor(name),
                },
                children: `${nameArr[0][0]}${nameArr[1][0]}`,
            };
        } else {
            return {
                sx: {
                    bgcolor: stringToColor(name),
                },
                children: `${nameArr[0][0]}${nameArr[0][0]}`,
            };
        }
    }

    const sliderSettings = {
        arrows: false,
        slidesToShow: slideCount,
        slidesToScroll: slideCount,
        infinite: tourReviews.length <= slideCount ? false : true,
        beforeChange: (current, next) => {
            setActiveSlide(next < 0 ? 0 : next);
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: adapSlideCount,
                    slidesToScroll: adapSlideCount,
                    infinite:
                        tourReviews.length <= adapSlideCount ? false : true,
                    dots: true,
                },
            },
        ],
    };

    useEffect(() => {
        dispatch(getOneTourReviews(id));
    }, [tour]);

    return (
        <div>
            {oneReviewModalState && (
                <div
                    onClick={() => setOneReviewModalState(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex justify-center items-center"
                >
                    <OneReviewModal
                        item={oneReview}
                        setOneReviewModalState={setOneReviewModalState}
                    />
                </div>
            )}
            <div id="reviewsAnchor">
                <div>
                    <div className="flex flex-row justify-between mt-16 mb-8 md:my-16">
                        <p className="text-3xl md:text-5xl font-semibold">
                            {lang === "rus" ? "Отзывы" : "Reviews"}
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
                                {Math.ceil(
                                    activeSlide /
                                        (slideCount === 1 ? 1 : slideCount + 1)
                                ) || 0}
                                /
                                {Math.ceil(tourReviews.length / slideCount) ||
                                    0}
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
                                {Math.ceil(activeSlide / adapSlideCount + 1) ||
                                    0}
                                /
                                {Math.ceil(
                                    tourReviews.length / adapSlideCount
                                ) || 0}
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
                        {tourReviews?.map((item, index) => (
                            <div
                                onClick={() => {
                                    setOneReview(item);
                                    setOneReviewModalState(true);
                                }}
                                key={index}
                                className="px-2 cursor-pointer"
                            >
                                <div className="rounded-[10px] bg-[#C0D6F4] p-4">
                                    <div className="flex items-center avatar_parent">
                                        <Avatar {...stringAvatar(item?.name)} />
                                        <div className="ml-2 md:ml-4 flex flex-col">
                                            <h3 className="text-sm md:text-lg font-medium">
                                                {item?.name}
                                            </h3>
                                            <p className="md:text-sm text-xs font-semibold opacity-60">
                                                {item?.country}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-4  text-xs md:text-base font-medium">
                                        {item?.reviewDesc.length > 120 ? (
                                            <p>
                                                {item?.reviewDesc.slice(0, 120)}{" "}
                                                <span className="text-gray-500 more_btn_shadow">
                                                    еще...
                                                </span>
                                            </p>
                                        ) : (
                                            <>{item?.reviewDesc}</>
                                        )}
                                    </p>
                                    <div className="flex justify-end mt-4">
                                        <p>{item?.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="flex justify-center">
                        <button
                            onClick={() => setReviewsModal(true)}
                            className="max-w-[240px] w-[70%] mt-8 text-white h-10 rounded-[5px] bg-[#00499f]"
                        >
                            {lang === "rus"
                                ? "Оставить отзыв"
                                : "Leave a review"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourReviews;
