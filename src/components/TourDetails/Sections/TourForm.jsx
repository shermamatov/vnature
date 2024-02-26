import React from "react";
import AccordionForm from "../Elements/AccordionForm";
import { useSelector } from "react-redux";
import { translateLevel } from "../../../store/reducers/tourReducer";
import { months, monthsEng } from "../../../consts";

const TourForm = ({
    setPriceModal,
    setCalendar = null,
    setFormModal = null,
    tour,
}) => {
    let lang = useSelector((item) => item.tours.lang);

    function checkerLangMonth() {
        if (lang === "rus") {
            return months;
        } else {
            return monthsEng;
        }
    }

    return (
        <div id="bronAnchor" className="mt-12 md:mt-16 font-montserrat ">
            <h2 className="block md:hidden text-2xl font-semibold md:text-3xl md:font-bold">
                {lang === "rus" ? "Бронирование" : "Booking"}
            </h2>
            <div
                className="w-full mt-4 md:mt-0 p-4 rounded-[10px] bg-white"
                style={{ boxShadow: "1px 10px 35px 0 rgba(0,73,159,0.36)" }}
            >
                <div className="flex w-full  flex-wrap justify-between m-auto">
                    <div
                        className="w-[47%] md:w-[24%] p-3 rounded-[10px] flex flex-col justify-between"
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
                        className="w-[47%] md:w-[24%] p-3 rounded-[10px] flex flex-col justify-between"
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
                        className="w-[47%] md:w-[24%] p-3 md:mt-0 mt-4 rounded-[10px] flex flex-col justify-between "
                        style={{
                            background:
                                "linear-gradient(to bottom, #cbe3ff 24.9%, #a0ccff 97.9%)",
                        }}
                    >
                        <p className="text-lg text-left text-[#00499f]">
                            {lang === "rus" ? "Сложность" : "Level"}
                        </p>
                        <p className="text-xl text-left text-[#00499f] mt-4">
                            {lang === "rus"
                                ? tour?.level
                                : translateLevel(tour?.level)}
                        </p>
                    </div>
                    <div
                        className="w-[47%] md:w-[24%] p-3 md:mt-0 mt-4 rounded-[10px] flex flex-col justify-between "
                        style={{
                            background:
                                "linear-gradient(to bottom, #cbe3ff 24.9%, #a0ccff 97.9%)",
                        }}
                    >
                        <p className="text-lg text-left text-[#00499f]">
                            {lang === "rus" ? "Сезонность" : "Season"}
                        </p>
                        <p className="text-xl text-left text-[#00499f] mt-4">
                            <span>
                                {checkerLangMonth()[tour?.season?.start - 1]}
                            </span>
                            -
                            <span className="ml-1">
                                {checkerLangMonth()[tour?.season?.end - 1]}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center md:justify-end mt-8">
                    <button
                        onClick={() => setPriceModal(true)}
                        className="py-2 px-8 text-white rounded-md bg-[#00499f]"
                    >
                        $ {lang === "rus" ? "Цена тура" : "Tour price"}
                    </button>
                </div>
                <div className="flex justify-between flex-wrap mt-4">
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
                    <button className="h-[42px] w-full md:w-[49%] mt-2 md:mt-4 rounded-md border border-[#00499f] text-[#00499f]">
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
                    <button className="h-[42px] w-full md:w-[49%] mt-2 md:mt-4 rounded-md border font-medium border-none text-black">
                        {lang === "rus"
                            ? "Не требует оплаты сейчас"
                            : "Does not require payment now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TourForm;
