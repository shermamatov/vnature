import React from "react";
import logo from "../../assets/blackLogo.svg";
import faceBook from "../../assets/facebookIcon.svg";
import vkIcon from "../../assets/vkIcon.svg";
import tiktok from "../../assets/tiktokIcon.svg";
import instagram from "../../assets/instagramBlackIcon.svg";
import whatsapp from "../../assets/whatsappBlackIcon.svg";
import telegram from "../../assets/telegramBlackIcon.svg";
import { useSelector } from "react-redux";
const Footer = () => {
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div className="mt-32 relative z-20 bg-white py-8">
            <div className="content font-montserrat">
                <div>
                    <img className="w-44 mob:w-52 md:w-64" src={logo} alt="" />
                </div>
                <div className="flex sm:flex-row flex-col mt-8">
                    <div className="flex flex-col">
                        <p className="font-bold text-xl">
                            {lang === "rus" ? "Контакты" : "Contacts"}
                        </p>
                        <p className="font-semibold text-base text-[#5E6282] mt-2">
                            Email: vnature@gmail.com
                        </p>
                        <p className="font-semibold text-base text-[#5E6282] mt-1">
                            {lang === "rus" ? "Телефон: " : "Number: "} +996 777
                            777 777
                        </p>
                        <p className="font-semibold text-base text-[#5E6282] mt-1">
                            {lang === "rus" ? "адрес: " : "address: "}{" "}
                            {lang === "rus"
                                ? "Кыргызстан, город Ош"
                                : "Kyrgyzstan, Osh city"}
                        </p>
                    </div>
                    <div className="flex flex-col mt-8 sm:mt-0 sm:ml-16">
                        <p className="font-bold text-xl">
                            {lang === "rus" ? "Больше" : "More"}
                        </p>
                        <p className="font-semibold text-base text-[#5E6282] mt-2">
                            {lang === "rus"
                                ? "Забронировать отель"
                                : "Book a hotel"}
                        </p>
                        <p className="font-semibold text-base text-[#5E6282] mt-1">
                            {lang === "rus" ? "Наша команда" : "Our team"}
                        </p>
                        <p className="font-semibold text-base text-[#5E6282] mt-1">
                            {lang === "rus" ? "Отзывы" : "Reviews"}
                        </p>
                    </div>
                </div>
                <p className="m-auto text-center font-bold text-xl my-8 sm:my-12">
                    {lang === "rus" ? "Мы здесь" : "We're here"}
                </p>
                <div className="flex w-full max-w-[420px] justify-between m-auto">
                    <img className="mob:w-10 w-8" src={instagram} alt="" />
                    <img className="mob:w-10 w-8" src={faceBook} alt="" />
                    <img className="mob:w-10 w-8" src={vkIcon} alt="" />
                    <img className="mob:w-10 w-8" src={tiktok} alt="" />
                    <img className="mob:w-10 w-8" src={whatsapp} alt="" />
                    <img className="mob:w-10 w-8" src={telegram} alt="" />
                </div>
                <div>
                    <p className="text-sm sm:text-xl text-center font-normal text-[#5E6282] my-8">
                        All rights reserved@vnature.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
