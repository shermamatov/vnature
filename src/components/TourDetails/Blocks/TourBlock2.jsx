import React, { useState } from "react";
import { tour } from "../../../consts";
import "../../../App.css";
import TourView from "../Sections/TourView";
import TourProgram from "../Sections/TourProgram";
import TourImportant from "../Sections/TourImportant";
import TourReviews from "../Sections/TourReviews";
const TourBlock2 = () => {
    let [section, setSection] = useState(1);
    return (
        <div className="content font-montserrat">
            <div className="my-8">
                <h1 className="text-5xl font-medium font-montserrat">
                    {tour.title}
                </h1>
                <h2 className="text-2xl font-normal font-montserrat mt-2">
                    {tour.slogan}
                </h2>
            </div>
            <div className="grid grid-cols-10 gap-8">
                <div className="col-span-7">
                    <ul className="flex justify-between list-none text-xl font-medium font-montserrat sticky top-8 navPanel">
                        <li
                            onClick={() => setSection(1)}
                            className={`${
                                section === 1 && "underLine"
                            } cursor-pointer`}
                        >
                            Обзор
                        </li>
                        <li
                            className={`${
                                section === 2 && "underLine"
                            } cursor-pointer`}
                            onClick={() => setSection(2)}
                        >
                            Программа
                        </li>
                        <li
                            className={`${
                                section === 3 && "underLine"
                            } cursor-pointer`}
                            onClick={() => setSection(3)}
                        >
                            Важно знать
                        </li>
                        <li
                            className={`${
                                section === 4 && "underLine"
                            } cursor-pointer`}
                            onClick={() => setSection(4)}
                        >
                            Бронирование
                        </li>
                        <li
                            className={`${
                                section === 5 && "underLine"
                            } cursor-pointer`}
                            onClick={() => setSection(5)}
                        >
                            Отзывы
                        </li>
                    </ul>
                    {section === 1 && <TourView />}
                    {section === 2 && <TourProgram />}
                    {section === 3 && <TourImportant />}
                    {section === 5 && <TourReviews />}
                </div>
                <div className="col-span-3 mt-6">
                    <div className="sticky top-8">
                        <div className="flex justify-end">
                            <div className="flex justify-center items-center relative gap-2.5 w-[70%] py-3 rounded-[10px] bg-[#00499f]">
                                <p className="flex-grow-0 flex-shrink-0 text-lg font-normal font-montserrat text-center text-white">
                                    Оставить заявку
                                </p>
                            </div>
                        </div>
                        <div
                            className="rounded-[10px] bg-white p-4 mt-16"
                            style={{
                                boxShadow:
                                    "0px 1px 10.199999809265137px 3px #b8d0ff",
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
                                        Дней
                                    </p>
                                    <p className="text-xl text-left text-black">
                                        3
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
                                        Дней
                                    </p>
                                    <p className="text-xl text-left text-black">
                                        3
                                    </p>
                                </div>
                                <div className=" aspect-[14/9] p-3 rounded-[10px] flex flex-col justify-between border-2 border-[#99c8ff]">
                                    <p className="text-lg text-left text-[#00499f]">
                                        Сложность
                                    </p>
                                    <p className="text-xl font-medium text-left text-[#00499f]">
                                        Высокая
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg text-start font-medium my-8 text-black">
                                Заезд
                            </p>
                            <input
                                className="border-2 rounded-sm w-full h-12 pl-2 border-[#99c8ff]"
                                type="text"
                                placeholder="заявка"
                            />
                            <button className="bg-[#00499f] w-full h-12 text-white text-xl font-normal mt-4">
                                Оставить заявку
                            </button>
                            <p className="text-base my-4 text-center text-black">
                                не требует оплаты сейчас
                            </p>
                        </div>
                        <p className="text-lg text-center text-[#00499f] mt-6">
                            Задать вопрос в WhatsApp
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourBlock2;
