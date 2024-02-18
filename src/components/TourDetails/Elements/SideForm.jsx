import React from "react";
import { useSelector } from "react-redux";
import { translateLevel } from "../../../store/reducers/tourReducer";
// import { tour } from "../../../consts";

const SideForm = ({ setPriceModal, tour }) => {
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div className="md:sticky top-8">
            <div
                onClick={() => setPriceModal(true)}
                className="flex justify-end cursor-pointer"
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
                            {lang === "rus" ? "от" + tour?.age : tour?.age}
                        </p>
                    </div>
                    <div className=" aspect-[14/9] p-3 rounded-[10px] flex flex-col justify-between border-2 border-[#99c8ff]">
                        <p className="text-lg text-left text-[#00499f]">
                            {lang === "rus" ? "Сложность" : "Level"}
                        </p>
                        <p className="text-xl font-medium text-left text-[#00499f]">
                            {lang === "rus"
                                ? tour?.level
                                : translateLevel(tour?.level)}
                        </p>
                    </div>
                </div>
                <p className="text-lg text-start font-medium my-8 text-black">
                    {lang === "rus" ? "Заезд" : "Arrival"}
                </p>
                <input
                    className="border-2 rounded-sm w-full h-12 pl-2 border-[#99c8ff]"
                    type="text"
                    placeholder={`${lang === "rus" ? "заявка" : "request"}`}
                />
                <button className="bg-[#00499f] w-full h-12 text-white text-xl font-normal mt-4">
                    {lang === "rus" ? "Оставить заявку" : "Leave a request"}
                </button>
                <p className="text-base my-4 text-center text-black">
                    {lang === "rus"
                        ? "Не требует оплаты сейчас"
                        : "Does not require payment now"}
                </p>
            </div>
            <p className="text-lg text-center text-[#00499f] mt-6">
                {lang === "rus"
                    ? "Задать вопрос в WhatsApp"
                    : "Ask a question in WhatsApp"}
            </p>
        </div>
    );
};

export default SideForm;
