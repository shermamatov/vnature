import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    nightsTransformer,
    translateLevel,
    wordTransformer,
} from "../../store/reducers/tourReducer";
import { months, monthsEng } from "../../consts";
const TourCard = ({ item }) => {
    let width = window.innerWidth;
    let navigate = useNavigate();
    let lang = useSelector((item) => item.tours.lang);

    function checkerLangMonth() {
        if (lang === "rus") {
            return months;
        } else {
            return monthsEng;
        }
    }
    return (
        <div>
            <div
                onClick={() => {
                    navigate(
                        `/tour/${
                            lang === "rus" ? item?.title : item?.titleEng
                        }/${item?.id}`
                    );
                    window.scrollTo(0, 0);
                }}
                className="rounded-[10px] border border-[#00499f] font-montserrat p-0 md:p-8 cursor-pointer"
                style={{
                    filter: "drop-shadow(0px 4px 14px rgba(0,73,159,0.36))",
                }}
            >
                <div>
                    <img
                        className="rounded-t-[10px] aspect-video object-cover w-full"
                        src={item?.mainImg}
                        alt=""
                    />
                </div>
                <div className="p-4 md:p-0">
                    <p className="text-2xl font-bold md:font-medium text-left capitalize text-black mt-0 md:mt-4">
                        {lang === "rus" ? item?.title : item?.titleEng}
                    </p>
                    <p className="font-medium text-base md:text-xl text-left text-black mt-2">
                        {lang === "rus" ? item?.slogan : item?.sloganEng}
                    </p>
                    <div className="text-sm font-medium flex capitalize md:text-xl text-left text-[#00499f] mt-3">
                        {lang === "rus" ? "Сложность" : "Level"} :
                        <p className="ml-1">
                            {lang === "rus"
                                ? item?.level
                                : translateLevel(item?.level)}
                        </p>
                    </div>
                    <p className="text-sm font-medium md:text-xl text-left text-[#00499f] mt-2">
                        {lang === "rus" ? "Сезонность" : "Season"}{" "}
                        {checkerLangMonth()[item?.season?.start - 1]} -{" "}
                        {checkerLangMonth()[item?.season?.end - 1]}
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="text-sm font-medium md:text-xl text-left text-[#00499f] mt-2">
                            {item?.daysCount}{" "}
                            {lang === "rus"
                                ? wordTransformer(item?.daysCount)
                                : "days"}{" "}
                            {item?.daysCount > 1 && (
                                <>
                                    / {item?.daysCount - 1}{" "}
                                    {lang === "rus"
                                        ? nightsTransformer(item?.daysCount - 1)
                                        : "nights"}
                                </>
                            )}
                        </p>
                        <svg
                            width={width < 768 ? 34 : 48}
                            height={width < 768 ? 24 : 34}
                            viewBox="0 0 34 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.80761 21.9792 0.80761 21.3934 1.3934C20.8076 1.97918 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM2 13.5L32 13.5L32 10.5L2 10.5L2 13.5Z"
                                fill="#00499F"
                            />
                        </svg>

                        {/* <img className="w-[20%]" src={arrowRight} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
