import { Avatar, Breadcrumbs } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { reviews } from "../../consts";
import shapka from "../../assets/shapka_banner.JPG";
const Reviews = () => {
    let navigate = useNavigate();
    function getInitials(name) {
        let nameArr = name.split(" ");
        return nameArr[0][0] + nameArr[1][0];
    }
    getInitials("timur shermamatov");
    return (
        <div className="relative">
            <img
                className="absolute brightness-[.60] top-0 left-0 right-0 h-[50vh] w-[100%] object-cover object-bottom"
                src={shapka}
                alt=""
            />
            <div className="font-montserrat content relative z-10">
                <div className="h-[50vh] whiteTextImportant">
                    <div className="h-full flex justify-center items-center flex-col">
                        <Breadcrumbs aria-label="breadcrumb">
                            <p
                                onClick={() => navigate("/")}
                                className="text-2xl text-[#00499F] cursor-pointer font-montserrat"
                            >
                                Главная
                            </p>
                            <p
                                onClick={() => navigate("/")}
                                className="text-2xl text-white cursor-pointer font-montserrat"
                            >
                                Отзывы
                            </p>
                        </Breadcrumbs>
                        <h1 className="text-4xl text-white mt-6">
                            <span className="font-medium text-center text-white">
                                Отзывы О Путешествиях с
                            </span>
                            <span className="font-bold text-center capitalize text-white ml-2">
                                VNATURE
                            </span>
                        </h1>
                    </div>
                </div>
                <p className="text-black text-2xl font-normal text-center mt-16">
                    Спасибо всем, кто возвращаясь из путешествия, делится с нами
                    впечатлениями! Ваши отзывы помогают нам улучшать сервис и
                    делать следующие поездки еще интереснее. Мы уверены, что
                    лучшие решения приходят благодаря сочетанию нашего видения и
                    ваших ожиданий.
                </p>
                <p className=" text-xl mt-16 font-normal text-center text-black">
                    Все отзывы публикуются с сохранением авторской орфографии и
                    пунктуации.
                </p>
                <div className="mt-24">
                    {reviews.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col mt-8 max-w-[768px] m-auto"
                        >
                            <div className="flex items-center">
                                <div className="w-20 h-20 font-semibold bg-[#00499F] rounded-full flex justify-center items-center text-white border-8 border-[#A0CCFF]">
                                    {getInitials(item.name)}
                                </div>
                                <p className="text-xl font-semibold ml-4">
                                    {item.name}
                                </p>
                            </div>
                            <p className="mt-4">
                                Тур:
                                <span className="text-[#00499F] ml-2">
                                    {item.tourName}
                                </span>
                            </p>
                            <p className="mt-4 text-lg">
                                Спасибо всем, кто возвращаясь из путешествия,
                                делится с нами впечатлениями! Ваши отзывы
                                помогают нам улучшать сервис и делать следующие
                                поездки еще интереснее. Мы уверены, что лучшие
                                решения приходят благодаря сочетанию нашего
                                видения и ваших ожиданий.
                            </p>
                            <div className="h-[1px] bg-[#999999] blur-[1px] mt-8"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
