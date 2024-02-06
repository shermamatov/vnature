import { Breadcrumbs } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import shapka from "../../assets/shapka_banner.JPG";

const ContactUs = () => {
    let navigate = useNavigate();

    return (
        <div className="relative">
            <img
                className="absolute brightness-[.60] top-0 left-0 right-0 h-[55vh] w-[100%] object-cover object-bottom"
                src={shapka}
                alt=""
            />
            <div className="content font-montserrat relative z-10">
                <div className="flex flex-col items-center">
                    <div className="h-[55vh] whiteTextImportant flex justify-center items-center flex-col">
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
                                Контакты
                            </p>
                        </Breadcrumbs>
                        <h1 className="text-4xl text-white mt-6">
                            Контактная информация
                        </h1>
                    </div>
                    {/* <Breadcrumbs aria-label="breadcrumb">
                        <p
                            onClick={() => navigate("/")}
                            className="text-xl text-[#00499f] cursor-pointer"
                        >
                            Главная
                        </p>
                        <p
                            onClick={() => navigate("/")}
                            className="text-xl text-black cursor-pointer"
                        >
                            О компании VNATURE
                        </p>
                    </Breadcrumbs>
                    <h1 className="text-5xl capitalize text-black mt-8 font-medium">
                        Контактная информация
                    </h1> */}
                    <div className="flex w-full justify-around mt-16">
                        <div>
                            <h4 className="mb-4 text-xl capitalize font-semibold">
                                адрес:
                            </h4>
                            <p className="text-lg font-medium capitalize">
                                араванская ориентир: <br /> оптима банк
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-4 text-xl capitalize font-semibold">
                                Телефон
                            </h4>
                            <a
                                className="font-medium text-lg capitalize text-[#00499f]"
                                href="tel:+996507034477"
                            >
                                996 507 034 477
                            </a>
                        </div>
                        {/* <div>
                        <h4 className="mb-4 text-xl capitalize font-semibold">
                            Реквизиты
                        </h4>
                        <p className="text-lg font-medium capitalize">
                            Наименование организации: <br /> ООО «РД-Трэвел»{" "}
                            <br />
                            ИНН: 7729729154 <br /> КПП: 772501001 <br /> ОГРН:
                            1127747289471
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-xl capitalize font-semibold">
                            Расписание работы
                        </h4>
                        <p className="text-lg font-medium capitalize">
                            Пн - пт : 10:00 - 20:00
                        </p>
                        <p className="text-lg font-medium capitalize">
                            Cб : 12:00 - 16:00
                        </p>
                    </div> */}
                        <div>
                            <h4 className="mb-4 text-xl capitalize font-semibold">
                                email
                            </h4>
                            <a
                                className="font-medium text-lg  text-[#00499f]"
                                href="mailto:vnature@gmail.com"
                            >
                                vnature@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
