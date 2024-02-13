import React from "react";

const NavigationPanel = ({ section, setSection }) => {
    return (
        <ul className="flex overflow-auto md:justify-between list-none text-base md:text-xl font-medium font-montserrat sticky top-8 navPanel">
            <li
                onClick={() => {
                    setSection(1);
                }}
                className={`${section === 1 && "underLine"} cursor-pointer`}
            >
                <a href="#viewAnchor">Обзор</a>
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
                <a href="#programmAnchor">Программа</a>
            </li>
            <li
                className={`ml-8 ${
                    section === 3 && "underLine"
                } cursor-pointer`}
                onClick={() => setSection(3)}
            >
                <a className="md:w-auto w-28 flex " href="#importantAnchor">
                    Важно знать
                </a>
            </li>
            <li
                className={`ml-8 ${
                    section === 4 && "underLine"
                } cursor-pointer`}
                onClick={() => setSection(4)}
            >
                <a href="#bronAnchor">Бронирование</a>
            </li>
            <li
                className={`ml-8 ${
                    section === 5 && "underLine"
                } cursor-pointer`}
                onClick={() => setSection(5)}
            >
                <a href="#reviewsAnchor">Отзывы</a>
            </li>
        </ul>
    );
};

export default NavigationPanel;
