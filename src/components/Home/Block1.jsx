import React from "react";
import banner from "../../assets/heroBanner.webp";
import location from "../../assets/locationIcon.svg";
const Block1 = () => {
    return (
        <div className="relative">
            <img
                className="absolute brightness-[.60] top-0 left-0 right-0 h-[100vh] w-[100%] object-cover"
                src={banner}
                alt=""
            />
            <div className="content flex flex-col justify-around text-white relative z-10 h-[100vh]">
                <div className="flex flex-col justify-center">
                    <div className="flex items-center">
                        <img className="w-4 mob:w-6" src={location} alt="" />
                        <h2 className="text-lg mob:text-xl md:text-3xl font-medium ml-2">
                            Кыргызстан, город Ош
                        </h2>
                    </div>
                    <h1 className="text-2xl mob:text-4xl md:text-5xl font-semibold mt-2 mob:mt-4">
                        Путешествие & Туризм
                    </h1>
                </div>
                {/* <div></div> */}
                <div className="absolute w-full bottom-10">
                    <ul className="flex justify-between text-[6px] mob:text-xs sm:text-sm md:text-base lg:text-xl font-normal font-montserrat">
                        <li>индивидуальные туры</li>
                        <li>|</li>
                        <li>групповые туры</li>
                        <li>|</li>
                        <li>корпоративные туры</li>
                        <li>|</li>
                        <li>лучший сервис</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Block1;
