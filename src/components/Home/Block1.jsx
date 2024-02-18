import React from "react";
import banner from "../../assets/heroBanner.webp";
import location from "../../assets/locationIcon.svg";
import { useSelector } from "react-redux";
const Block1 = () => {
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div className="relative">
            <img
                className="absolute brightness-[.60] top-0 left-0 right-0 md:h-[100vh] h-[93vh] w-[100%] object-cover"
                src={banner}
                alt=""
            />
            <div className="content flex flex-col justify-around text-white relative z-10 md:h-[100vh] h-[93vh]">
                <div className="flex flex-col justify-center">
                    <div className="flex items-center">
                        <img className="w-4 mob:w-6" src={location} alt="" />
                        <h2 className="text-lg md:text-3xl font-medium ml-2">
                            {lang === "rus"
                                ? "Кыргызстан, город Ош"
                                : "Kyrgyzstan, Osh city"}
                        </h2>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-semibold mt-2 mob:mt-4">
                        {lang === "rus"
                            ? "Путешествие & Туризм"
                            : "Travel & Tourism"}
                    </h1>
                </div>
                {/* <div></div> */}
                <div className="absolute w-full bottom-10">
                    <ul className="flex justify-between text-[8px] sm:text-sm md:text-base lg:text-xl font-normal font-montserrat">
                        <li>
                            {lang === "rus"
                                ? "индивидуальные туры"
                                : "individual tours"}{" "}
                        </li>
                        <li>|</li>
                        <li>
                            {lang === "rus" ? "групповые туры" : "group tours"}{" "}
                        </li>
                        <li>|</li>
                        <li>
                            {lang === "rus"
                                ? "корпоративные туры"
                                : "corporate tours"}{" "}
                        </li>
                        <li>|</li>
                        <li>
                            {lang === "rus"
                                ? "лучший сервис"
                                : "the best service"}{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Block1;
