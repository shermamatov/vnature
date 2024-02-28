import React, { useState } from "react";
import "./Burger.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTours, reduxTypes } from "../../store/reducers/tourReducer";
import { admin } from "../../consts";

const BurgerMenu = ({ burgerState, setBurgerState }) => {
    let user = useSelector((item) => item.tours.user);
    let lang = useSelector((item) => item.tours.lang);
    let navigate = useNavigate();
    return (
        <div
            onClick={() => setBurgerState(false)}
            className={`fixed backdrop-blur-sm flex justify-end top-0 duration-700 h-[100vh] z-40 w-[100vw] ${
                burgerState ? "right-0" : "-right-[120%]"
            }`}
        >
            {/* <div> */}
            <div
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundColor: "#5989C0" }}
                className={`pt-12 p-8 w-[70%] h-[100vh]  text-white`}
            >
                <div className="relative">
                    <div className="flex justify-end items-center">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 12 12"
                            fill="none"
                            onClick={() => setBurgerState(false)}
                            className="w-5 h-5 relative cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.9997 10.5L10.4999 12L5.99972 7.5L1.49978 12L-0.000252 10.5L4.49987 5.99998L-0.000252 1.49999L1.49978 -1.2e-05L5.99972 4.49998L10.4999 -1.2e-05L11.9997 1.49999L7.49977 5.99998L11.9997 10.5Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <ul className="text-xl font-medium pt-6">
                        {user === admin && (
                            <li
                                onClick={() => {
                                    setBurgerState(false);
                                    navigate("/admin");
                                }}
                            >
                                {lang === "rus" ? "Админ" : "Admin"}
                            </li>
                        )}
                        <li
                            onClick={() => {
                                setBurgerState(false);
                                navigate("/");
                            }}
                        >
                            {lang === "rus" ? "Главная" : "Home"}
                        </li>
                        <li
                            onClick={() => {
                                navigate("/tours");
                                setBurgerState(false);
                            }}
                            className="mt-2"
                        >
                            {lang === "rus" ? "Туры" : "Tours"}
                        </li>
                        <li
                            onClick={() => {
                                navigate("/about");
                                setBurgerState(false);
                            }}
                            className="mt-2"
                        >
                            {lang === "rus" ? "О нас" : "About Us"}
                        </li>
                        <li
                            onClick={() => {
                                navigate("/contacts");
                                setBurgerState(false);
                            }}
                            className="mt-2"
                        >
                            {lang === "rus" ? "Контакты" : "Contacts"}
                        </li>
                        <li
                            onClick={() => {
                                navigate("/reviews");
                                setBurgerState(false);
                            }}
                            className="mt-2"
                        >
                            {lang === "rus" ? " Отзывы" : "Reviews"}
                        </li>
                        {/* <li className="mt-2">Доставка</li> */}
                    </ul>
                    {/* <button className="w-40 h-10 text-sky-500 text-xs border-inherit rounded-md border-2 border-sky-500 mt-10">
                    Кнопка призыва
                </button> */}
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
