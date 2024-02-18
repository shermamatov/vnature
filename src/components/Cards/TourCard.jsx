import React from "react";
import arrowRight from "../../assets/arrowRight.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { translateLevel } from "../../store/reducers/tourReducer";
const TourCard = ({ item }) => {
    let navigate = useNavigate();
    let lang = useSelector((item) => item.tours.lang);
    let months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];
    let monthsEng = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

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
                onClick={() =>
                    navigate(
                        `/tour/${
                            lang === "rus" ? item?.title : item?.titleEng
                        }/${item?.id}`
                    )
                }
                className="rounded-[10px] border border-[#00499f] font-montserrat p-0 md:p-8"
                style={{
                    filter: "drop-shadow(0px 4px 14px rgba(0,73,159,0.36))",
                }}
            >
                <div>
                    <img
                        className="rounded-t-[10px] aspect-video object-cover"
                        src={item?.mainImg}
                        alt=""
                    />
                </div>
                <div className="p-4 md:p-0">
                    <p className="text-2xl font-medium text-left capitalize text-black mt-0 md:mt-4">
                        {lang === "rus" ? item?.title : item?.titleEng}
                    </p>
                    <p className="text-base md:text-xl text-left text-black mt-2">
                        {lang === "rus" ? item?.slogan : item?.sloganEng}
                    </p>
                    <div className="text-base flex capitalize md:text-xl text-left text-[#00499f] mt-1">
                        {lang === "rus" ? "Сложность" : "Level"} -
                        <p className="ml-1">
                            {lang === "rus"
                                ? item?.level
                                : translateLevel(item?.level)}
                        </p>
                    </div>
                    <p className="text-base md:text-xl text-left text-[#00499f] mt-1">
                        {checkerLangMonth()[item?.season?.start - 1]} -{" "}
                        {checkerLangMonth()[item?.season?.end - 1]}
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="text-base md:text-xl text-left text-[#00499f] mt-1">
                            {item?.daysCount} {lang === "rus" ? "дней" : "days"}
                        </p>
                        <img className="w-[20%]" src={arrowRight} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
