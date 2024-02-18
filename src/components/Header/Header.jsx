import React, { useState } from "react";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagramWhiteIcon.svg";
import whatsapp from "../../assets/whatsappWhiteIcon.svg";
import telegram from "../../assets/telegramWhiteIcon.svg";
import burgerMenu from "../../assets/burgerMenuIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { getTours, reduxTypes } from "../../store/reducers/tourReducer";
const Header = () => {
    let [burgerState, setBurgerState] = useState(false);
    let lang = useSelector((item) => item.tours.lang);
    let { pathname } = useLocation();

    let navigate = useNavigate();
    let dispatch = useDispatch();
    return (
        <div className="overflow-hidden">
            <BurgerMenu
                burgerState={burgerState}
                setBurgerState={setBurgerState}
            />
            <div
                className={`${
                    pathname !== "/" && pathname.slice(0, 6) !== "/admin"
                        ? "bg-[#00499FA6]"
                        : "backdrop-blur-sm backdrop-brightness-50 absolute z-30 "
                } flex items-center text-white w-[100%] h-24 z-30`}
            >
                <div className="content md:hidden flex justify-between items-center">
                    <img
                        onClick={() => navigate("/")}
                        className="w-36"
                        src={logo}
                        alt=""
                    />
                    <div className="flex">
                        <div className="flex">
                            <p
                                onClick={() => {
                                    localStorage.setItem("lang", "rus");
                                    dispatch({
                                        type: reduxTypes.SET_LANG,
                                        payload: "rus",
                                    });
                                    dispatch(getTours());
                                }}
                                className={`font-body cursor-pointer font-bold text-base ${
                                    lang === "rus" && "underline"
                                }`}
                            >
                                RU
                            </p>
                            <p className="font-body font-bold text-base ml-1">
                                /
                            </p>
                            <p
                                onClick={() => {
                                    localStorage.setItem("lang", "eng");
                                    dispatch({
                                        type: reduxTypes.SET_LANG,
                                        payload: "eng",
                                    });
                                    dispatch(getTours());
                                }}
                                className={`font-body cursor-pointer font-bold text-base ml-1 ${
                                    lang === "eng" && "underline"
                                }`}
                            >
                                EN
                            </p>
                        </div>
                        <img
                            onClick={() => setBurgerState(true)}
                            className="w-8 ml-4"
                            src={burgerMenu}
                            alt=""
                        />
                    </div>
                </div>
                <div className="content hidden md:flex justify-between items-center">
                    <div className="flex items-center font-montserrat">
                        <img
                            onClick={() => navigate("/")}
                            className="md:w-36 lg:w-52 cursor-pointer"
                            src={logo}
                            alt=""
                        />
                        <ul className="flex ml-4 font-semibold text-sm lg:text-base">
                            <li
                                onClick={() => navigate("/")}
                                className="ml-4 cursor-pointer"
                            >
                                {lang === "rus" ? "Главная" : "Home"}
                            </li>
                            <li
                                onClick={() => navigate("/tours")}
                                className="ml-4 cursor-pointer"
                            >
                                {lang === "rus" ? "Туры" : "Tours"}
                            </li>
                            <li
                                onClick={() => navigate("/about")}
                                className="ml-4 cursor-pointer"
                            >
                                {lang === "rus" ? "О нас" : "About Us"}
                            </li>
                            <li
                                onClick={() => navigate("/contacts")}
                                className="ml-4 cursor-pointer"
                            >
                                {lang === "rus" ? "Контакты" : "Contacts"}
                            </li>
                            <li
                                onClick={() => navigate("/reviews")}
                                className="ml-4 cursor-pointer"
                            >
                                {lang === "rus" ? " Отзывы" : "Reviews"}
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <div className="flex">
                            <p
                                onClick={() => {
                                    localStorage.setItem("lang", "rus");
                                    dispatch({
                                        type: reduxTypes.SET_LANG,
                                        payload: "rus",
                                    });
                                    dispatch(getTours());
                                }}
                                className={`font-body cursor-pointer font-bold text-sm lg:text-base ${
                                    lang === "rus" && "underline"
                                }`}
                            >
                                RU
                            </p>
                            <p className="font-body font-bold text-sm lg:text-base ml-1">
                                /
                            </p>
                            <p
                                onClick={() => {
                                    localStorage.setItem("lang", "eng");
                                    dispatch({
                                        type: reduxTypes.SET_LANG,
                                        payload: "eng",
                                    });
                                    dispatch(getTours());
                                }}
                                className={`font-body cursor-pointer font-bold text-sm lg:text-base ml-1 ${
                                    lang === "eng" && "underline"
                                }`}
                            >
                                EN
                            </p>
                        </div>
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
