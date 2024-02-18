import React from "react";
import AccordionForm from "../Elements/AccordionForm";
import { useSelector } from "react-redux";
import { translateLevel } from "../../../store/reducers/tourReducer";

const TourForm = ({ setPriceModal, setCalendar, setFormModal, tour }) => {
    let lang = useSelector((item) => item.tours.lang);
    let months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];
    let monthsEng = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    function checkerLangMonth() {
        if (lang === "rus") {
            return months;
        } else {
            return monthsEng;
        }
    }

    return (
        <div id="bronAnchor" className="mt-16 font-montserrat ">
            <div
                className="w-full p-4 content rounded-[10px] bg-white"
                style={{ boxShadow: "1px 10px 35px 0 rgba(0,73,159,0.36)" }}
            >
                <div className="flex w-full md:w-[80%] flex-wrap justify-between m-auto">
                    <div
                        className="w-[49%] md:w-[30%] p-3 rounded-[10px] flex flex-col justify-between"
                        style={{
                            background:
                                "linear-gradient(to bottom, #cbe3ff 24.9%, #a0ccff 97.9%)",
                        }}
                    >
                        <p className="text-lg text-left text-black">
                            {lang === "rus" ? "Дней" : "Days"}
                        </p>
                        <p className="text-xl text-left text-black mt-4">
                            {tour?.daysCount}
                        </p>
                    </div>
                    <div
                        className="w-[49%] md:w-[30%] p-3 rounded-[10px] flex flex-col justify-between"
                        style={{
                            background:
                                "linear-gradient(to bottom, #cbe3ff 24.9%, #a0ccff 97.9%)",
                        }}
                    >
                        <p className="text-lg text-left text-black">
                            {lang === "rus" ? "Возраст" : "Age"}
                        </p>
                        <p className="text-xl text-left text-black mt-4">
                            {lang === "rus"
                                ? `от ${tour?.age} лет`
                                : ` ${tour?.age} years`}
                        </p>
                    </div>
                    <div
                        className="w-[49%] md:w-[30%] p-3 rounded-[10px] flex flex-col justify-between mt-2"
                        style={{
                            background:
                                "linear-gradient(to bottom, #cbe3ff 24.9%, #a0ccff 97.9%)",
                        }}
                    >
                        <p className="text-lg text-left text-black">
                            {lang === "rus" ? "Сложность" : "Level"}
                        </p>
                        <p className="text-xl text-left text-black mt-4">
                            {lang === "rus"
                                ? tour?.level
                                : translateLevel(tour?.level)}
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex justify-between items-center mt-8">
                    <p className="text-xl font-medium text-center text-black">
                        {lang === "rus" ? "Заезд" : "Arrival"}
                    </p>
                    <button
                        onClick={() => setCalendar(true)}
                        className="rounded-[10px] border border-[#00499f] h-[45px] font-light w-[40%] px-2"
                    >
                        <span>
                            {checkerLangMonth()[tour?.season?.start - 1]}
                        </span>{" "}
                        -
                        <span className="ml-1">
                            {checkerLangMonth()[tour?.season?.end - 1]}
                        </span>
                    </button>
                    {/* <select className="rounded-[10px] border border-[#00499f] h-[45px] font-light w-[40%] px-2">
                        <option value="5,8">с Мая по Август</option>
                    </select> */}
                    <button
                        onClick={() => setPriceModal(true)}
                        className="py-1 px-8 text-white rounded-md bg-[#00499f]"
                    >
                        {lang === "rus" ? "Цена тура" : "Tour price"}
                    </button>
                </div>
                <div className="mt-8 md:hidden block">
                    <div className="flex justify-between items-baseline">
                        <p className="text-xl font-medium text-center text-black">
                            {lang === "rus" ? "Заезд" : "Arrival"}
                        </p>
                        <button
                            onClick={() => setPriceModal(true)}
                            className="py-2 px-8 text-white rounded-md bg-[#00499f]"
                        >
                            {lang === "rus" ? "Цена тура" : "Tour price"}
                        </button>
                    </div>
                    <button
                        onClick={() => setCalendar(true)}
                        className="rounded-[10px] mt-4 border border-[#00499f] h-[45px] font-light w-full px-2"
                    >
                        <span>
                            {checkerLangMonth()[tour?.season?.start - 1]}
                        </span>
                        -
                        <span className="ml-1">
                            {checkerLangMonth()[tour?.season?.end - 1]}
                        </span>
                    </button>
                    {/* <select className="rounded-[10px] mt-4 border border-[#00499f] h-[45px] font-light w-full px-2">
                        <option value="5,8">с Мая по Август</option>
                    </select> */}
                </div>
                <div>
                    <div className="w-full mt-8 mb-2 h-[2px] opacity-50 bg-[#00499f]"></div>
                    <AccordionForm
                        item={{
                            title:
                                lang === "rus"
                                    ? "Включено в стоимость"
                                    : "Included in price",
                            desc:
                                lang === "rus"
                                    ? tour?.include
                                    : tour?.includeEng,
                        }}
                    />
                    <div className="w-full mt-2 mb-2 h-[2px] opacity-50 bg-[#00499f]"></div>
                    <AccordionForm
                        item={{
                            title:
                                lang === "rus"
                                    ? "Оплатить дополнительно"
                                    : "Price does not include",
                            desc:
                                lang === "rus"
                                    ? tour?.notInclude
                                    : tour?.notIncludeEng,
                        }}
                    />
                    <div className="w-full mt-2 mb-2 h-[2px] opacity-50 bg-[#00499f]"></div>
                </div>
                <div className="flex justify-between flex-wrap mt-8">
                    <button className="h-[42px] w-full md:w-[49%] rounded-md border border-[#00499f] text-[#00499f]">
                        {lang === "rus"
                            ? "Задать вопрос в WhatsApp"
                            : "Ask a question in WhatsApp"}
                    </button>
                    <button
                        onClick={() => setFormModal(true)}
                        className="hidden md:block h-[42px] w-full md:w-[49%] text-white  rounded-md bg-[#0fa03f]"
                    >
                        {lang === "rus" ? "Оставить заявку" : "Leave a request"}
                    </button>
                    <button className="h-[42px] m-auto w-full md:w-[49%] mt-2 md:mt-4 rounded-md border border-[#00499f] text-[#00499f]">
                        {lang === "rus"
                            ? "Задать вопрос в Telegram"
                            : "Ask a question at Telegram"}
                    </button>
                    <button
                        onClick={() => setFormModal(true)}
                        className="block md:hidden h-[42px] w-full md:w-[49%] mt-2 text-white  rounded-md bg-[#0fa03f]"
                    >
                        {lang === "rus" ? "Оставить заявку" : "Leave a request"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TourForm;
