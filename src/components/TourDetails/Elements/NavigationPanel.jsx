import React from "react";
import { useSelector } from "react-redux";

const NavigationPanel = ({ section, setSection }) => {
    let lang = useSelector((item) => item.tours.lang);
    let tourReviews = useSelector((item) => item.tours.oneTourReviews);

    return (
        <ul
            id="navigationAnchor"
            className="w-full hiddenScrollBar flex overflow-auto md:justify-between list-none text-base md:text-xl font-medium font-montserrat top-8 "
        >
            <li
                onClick={() => {
                    setSection(1);
                }}
                className={`${section === 1 && "underLine"} cursor-pointer`}
            >
                <a href="#viewAnchor">
                    {lang === "rus" ? "Обзор" : "Overview"}
                </a>
            </li>
            <li
                className={`ml-8 ${
                    section === 2 && "underLine"
                } cursor-pointer`}
                onClick={() => {
                    setSection(2);
                }}
            >
                {/* Программа */}
                <a href="#programmAnchor">
                    {lang === "rus" ? "Программа" : "Program"}
                </a>
            </li>
            <li
                className={`ml-8 ${
                    section === 3 && "underLine"
                } cursor-pointer`}
                onClick={() => setSection(3)}
            >
                <a className="md:w-auto w-28 flex " href="#importantAnchor">
                    {lang === "rus" ? "Важно знать" : "Important"}
                </a>
            </li>
            <li
                className={`ml-8 ${
                    section === 4 && "underLine"
                } cursor-pointer`}
                onClick={() => setSection(4)}
            >
                <a href="#bronAnchor">
                    {lang === "rus" ? "Бронирование" : "Booking"}
                </a>
            </li>
            {tourReviews.length > 0 && (
                <li
                    className={`ml-8 ${
                        section === 5 && "underLine"
                    } cursor-pointer`}
                    onClick={() => setSection(5)}
                >
                    <a href="#reviewsAnchor">
                        {lang === "rus" ? "Отзывы" : "Reviews"}
                    </a>
                </li>
            )}
        </ul>
    );
};

export default NavigationPanel;
