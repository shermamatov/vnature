import React from "react";
import { useSelector } from "react-redux";
import { translateLevel } from "../../../store/reducers/tourReducer";
import { months, monthsEng } from "../../../consts";
// import { tour } from "../../../consts";

const SideForm = ({ setPriceModal, tour, isMobile = false, setFormModal }) => {
    let lang = useSelector((item) => item.tours.lang);
    function checkerLangMonth() {
        if (lang === "rus") {
            return months;
        } else {
            return monthsEng;
        }
    }

    return (
        <div className={` ${!isMobile ? "md:sticky top-8" : "mt-24"} `}>
            <div
                onClick={() => setPriceModal(true)}
                className={` ${
                    isMobile ? "hidden" : "flex"
                } justify-end cursor-pointer`}
            >
                <div className="flex justify-center items-center relative gap-2.5 w-[70%] py-3 rounded-[10px] bg-[#00499f]">
                    <p className="flex-grow-0 flex-shrink-0 text-lg font-normal font-montserrat text-center text-white">
                        $ {lang === "rus" ? "Цена тура" : "Tour price"}
                    </p>
                </div>
            </div>
            <div
                className="rounded-[10px] bg-white p-4 mt-16"
                style={{
                    boxShadow: "0px 1px 10.199999809265137px 3px #b8d0ff",
                }}
            >
                <div className="grid grid-cols-2 gap-4 -mt-12">
                    <div
                        className=" aspect-[14/9] p-3 rounded-[10px] flex flex-col justify-between"
                        style={{
                            background:
                                "linear-gradient(to bottom, #cbe3ff 24.9%, #a0ccff 97.9%)",
                        }}
                    >
                        <p className="text-lg text-left text-black">
                            {lang === "rus" ? "Дней" : "Days"}
                        </p>
                        <p className="text-xl text-left text-black">
                            {tour?.daysCount}
                        </p>
                    </div>
                    <div
                        className=" aspect-[14/9] p-3 rounded-[10px] flex flex-col justify-between"
                        style={{
                            background:
                                "linear-gradient(to bottom, #cbe3ff 24.9%, #a0ccff 97.9%)",
                        }}
                    >
                        <p className="text-lg text-left text-black">
                            {lang === "rus" ? "Возраст" : "Age"}
                        </p>
                        <p className="text-xl text-left text-black">
                            {lang === "rus" ? tour?.age : tour?.age}
                        </p>
                    </div>
                    <div className=" aspect-[14/9] p-3 rounded-[10px] flex flex-col justify-between border-2 border-[#99c8ff]">
                        <p className="text-lg text-left text-[#00499f]">
                            {lang === "rus" ? "Сложность" : "Level"}
                        </p>
                        <p className="text-lg md:text-xl font-medium text-left text-[#00499f] capitalize">
                            {lang === "rus"
                                ? tour?.level
                                : translateLevel(tour?.level)}
                        </p>
                    </div>
                    <div className=" aspect-[14/9] p-3 rounded-[10px] flex flex-col justify-between border-2 border-[#99c8ff]">
                        <p className="text-lg text-left text-[#00499f]">
                            {lang === "rus" ? "Сезонность" : "Season"}
                        </p>
                        <p className="text-base md:text-lg font-medium text-left text-[#00499f] capitalize">
                            <span>
                                {checkerLangMonth()[tour?.season?.start - 1]}
                            </span>{" "}
                            -
                            <span className="ml-1">
                                {checkerLangMonth()[tour?.season?.end - 1]}
                            </span>
                        </p>
                    </div>
                </div>
                <button
                    onClick={() => setFormModal(true)}
                    className="bg-[#0fa03f] w-full h-12 text-white text-base md:text-xl font-normal mt-4"
                >
                    {lang === "rus" ? "Оставить заявку" : "Leave a request"}
                </button>
                <p className="text-base my-4 text-center text-black">
                    {lang === "rus"
                        ? "Не требует оплаты сейчас"
                        : "Does not require payment now"}
                </p>
            </div>
            <a href="https://wa.me/554034477" target="_blank">
                <p className="text-lg text-center text-[#00499f] mt-6">
                    {lang === "rus"
                        ? "Задать вопрос в WhatsApp"
                        : "Ask a question in WhatsApp"}
                </p>
            </a>
            <a href="https://t.me/vnaturekg" target="_blank">
                <p className="text-lg text-center text-[#00499f] mt-6">
                    {lang === "rus"
                        ? "Задать вопрос в Telegram"
                        : "Ask a question in Telegram"}
                </p>
            </a>
        </div>
    );
};

export default SideForm;
