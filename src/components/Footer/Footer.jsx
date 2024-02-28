import React from "react";
import logo from "../../assets/blackLogo.svg";
import faceBook from "../../assets/facebookIcon.svg";
import vkIcon from "../../assets/vkIcon.svg";
import tiktok from "../../assets/tiktokIcon.svg";
import instagram from "../../assets/instagramBlackIcon.svg";
import whatsapp from "../../assets/whatsappBlackIcon.svg";
import telegram from "../../assets/telegramBlackIcon.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    let lang = useSelector((item) => item.tours.lang);
    let navigate = useNavigate();
    return (
        <div className="mt-8 relative z-20 bg-white py-8">
            <div className="content font-montserrat">
                <div>
                    <img className="w-36 md:w-52" src={logo} alt="" />
                </div>
                <div className="flex sm:flex-row flex-col mt-8">
                    <div className="flex flex-col">
                        <p className="font-bold text-xl">
                            {lang === "rus" ? "Контакты" : "Contacts"}
                        </p>
                        <p className="font-semibold text-base text-[#5E6282] mt-3">
                            Email: vnature@gmail.com
                        </p>
                        <p className="font-semibold text-base text-[#5E6282] mt-2">
                            {lang === "rus" ? "Телефон: " : "Number: "} +996 777
                            777 777
                        </p>
                        <p className="font-semibold text-base text-[#5E6282] mt-2">
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
                        <a href="/about">
                            <p
                                onClick={() => navigate("/about")}
                                className="font-semibold text-base text-[#5E6282] mt-3 cursor-pointer"
                            >
                                {lang === "rus" ? "О нас" : "About Us"}
                            </p>
                        </a>
                        <a href="/reviews">
                            <p
                                // onClick={() => navigate("/reviews")}
                                className="font-semibold text-base text-[#5E6282] mt-2 cursor-pointer"
                            >
                                {lang === "rus" ? " Отзывы" : "Reviews"}
                            </p>
                        </a>
                        <a href="/tours">
                            <p
                                // onClick={() => navigate("/tours")}
                                className="font-semibold text-base text-[#5E6282] mt-2 cursor-pointer"
                            >
                                {lang === "rus" ? "Туры" : "Tours"}
                            </p>
                        </a>
                        <a href="/privacy_policy">
                            <p
                                // onClick={() => navigate("/privacy_policy")}
                                className="font-semibold text-base text-[#5E6282] mt-2 cursor-pointer"
                            >
                                {lang === "rus"
                                    ? "Политика конфиденциальности"
                                    : "Privacy policy"}
                            </p>
                        </a>
                    </div>
                </div>
                <p className="m-auto text-center font-bold text-xl my-8 sm:my-12">
                    {lang === "rus" ? "Мы здесь" : "We're here"}
                </p>
                <div className="flex w-full max-w-[420px] justify-between m-auto">
                    <a href="#">
                        <img className="mob:w-10 w-8" src={instagram} alt="" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61553218016713&mibextid=dGKdO6">
                        <img className="mob:w-10 w-8" src={faceBook} alt="" />
                    </a>
                    <a href="https://vk.com/vnaturekg">
                        <img className="mob:w-10 w-8" src={vkIcon} alt="" />
                    </a>
                    <a href="https://www.tiktok.com/@vnature.kg">
                        <img className="mob:w-10 w-8" src={tiktok} alt="" />
                    </a>
                    <a href="https://wa.me/554034477">
                        <img className="mob:w-10 w-8" src={whatsapp} alt="" />
                    </a>
                    <a href="#">
                        <img className="mob:w-10 w-8" src={telegram} alt="" />
                    </a>
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
