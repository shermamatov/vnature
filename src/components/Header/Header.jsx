import React from "react";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagramWhiteIcon.svg";
import whatsapp from "../../assets/whatsappWhiteIcon.svg";
import telegram from "../../assets/telegramWhiteIcon.svg";
import burgerMenu from "../../assets/burgerMenuIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
    let { pathname } = useLocation();
    let navigate = useNavigate();
    return (
        <div className="overflow-hidden">
            <div
                className={`${
                    pathname !== "/" && pathname !== "/admin/add"
                        ? "bg-[#00499FA6]"
                        : "backdrop-blur-sm backdrop-brightness-50 absolute z-30 "
                } flex items-center text-white w-[100%] h-24 z-30`}
            >
                <div className="content md:hidden flex justify-between items-center">
                    <img className="w-36" src={logo} alt="" />
                    <div className="flex">
                        {/* <p className="font-body font-bold text-sm lg:text-base">
                        RU / EN
                    </p> */}
                        <img className="w-8" src={burgerMenu} alt="" />
                    </div>
                </div>
                <div className="content hidden md:flex justify-between items-center">
                    <div className="flex items-center font-montserrat">
                        <img className="md:w-36 lg:w-52" src={logo} alt="" />
                        <ul className="flex ml-4 font-semibold text-sm lg:text-base">
                            <li
                                onClick={() => navigate("/")}
                                className="ml-4 cursor-pointer"
                            >
                                Главная
                            </li>
                            <li
                                onClick={() => navigate("/tours")}
                                className="ml-4 cursor-pointer"
                            >
                                Туры
                            </li>
                            <li
                                onClick={() => navigate("/about")}
                                className="ml-4 cursor-pointer"
                            >
                                О нас
                            </li>
                            <li
                                onClick={() => navigate("/contacts")}
                                className="ml-4 cursor-pointer"
                            >
                                Контакты
                            </li>
                            <li
                                onClick={() => navigate("/reviews")}
                                className="ml-4 cursor-pointer"
                            >
                                Отзывы
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <p className="font-body font-bold text-sm lg:text-base">
                            RU / EN
                        </p>
                        <img
                            className="w-6 lg:w-8 ml-4"
                            src={instagram}
                            alt=""
                        />
                        <img
                            className="w-6 lg:w-8 ml-4"
                            src={whatsapp}
                            alt=""
                        />
                        <img
                            className="w-6 lg:w-8 ml-4"
                            src={telegram}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
