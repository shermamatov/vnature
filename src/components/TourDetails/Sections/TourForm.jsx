import React from "react";
import { tour } from "../../../consts";
import AccordionForm from "../Elements/AccordionForm";

const TourForm = ({ setModal }) => {
    return (
        <div id="bronAnchor" className="mt-16 font-montserrat">
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
                        <p className="text-lg text-left text-black">Дней</p>
                        <p className="text-xl text-left text-black mt-4">
                            {tour.daysCount}
                        </p>
                    </div>
                    <div
                        className="w-[49%] md:w-[30%] p-3 rounded-[10px] flex flex-col justify-between"
                        style={{
                            background:
                                "linear-gradient(to bottom, #cbe3ff 24.9%, #a0ccff 97.9%)",
                        }}
                    >
                        <p className="text-lg text-left text-black">Возраст</p>
                        <p className="text-xl text-left text-black mt-4">
                            от {tour.age} лет
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
                            Сложность
                        </p>
                        <p className="text-xl text-left text-black mt-4">
                            {tour.level}
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex justify-between items-center mt-8">
                    <p className="text-xl font-medium text-center text-black">
                        Заезд
                    </p>
                    <select className="rounded-[10px] border border-[#00499f] h-[45px] font-light w-[40%] px-2">
                        <option value="5,8">с Мая по Август</option>
                    </select>
                    <button
                        onClick={() => setModal(true)}
                        className="py-1 px-8 text-white rounded-md bg-[#00499f]"
                    >
                        Цена тура
                    </button>
                </div>
                <div className="mt-8 md:hidden block">
                    <div className="flex justify-between items-baseline">
                        <p className="text-xl font-medium text-center text-black">
                            Заезд
                        </p>
                        <button
                            onClick={() => setModal(true)}
                            className="py-2 px-8 text-white rounded-md bg-[#00499f]"
                        >
                            Цена тура
                        </button>
                    </div>
                    <select className="rounded-[10px] mt-4 border border-[#00499f] h-[45px] font-light w-full px-2">
                        <option value="5,8">с Мая по Август</option>
                    </select>
                </div>
                <div>
                    <div className="w-full mt-8 mb-2 h-[2px] opacity-50 bg-[#00499f]"></div>
                    <AccordionForm
                        item={{
                            title: "Включено в стоимость",
                            desc: "Трансфер ; Вход в Узген Мунара ; Обед в Жалал - Абаде ; Проживание 2 ночи ; Питание в гостевом доме (ужин, завтрак, обед - ланч бокс, ужин, завтрак) ; Услуги гида ; Вход в заповедник ; Фотография на память",
                        }}
                    />
                    <div className="w-full mt-2 mb-2 h-[2px] opacity-50 bg-[#00499f]"></div>
                    <AccordionForm
                        item={{
                            title: "Оплатить дополнительно",
                            desc: "Питание в дороге ; Прочие расходы не указанные в программе",
                        }}
                    />
                    <div className="w-full mt-2 mb-2 h-[2px] opacity-50 bg-[#00499f]"></div>
                </div>
                <div className="flex justify-between flex-wrap mt-8">
                    <button className="h-[42px] w-full md:w-[49%] rounded-md border border-[#00499f] text-[#00499f]">
                        Задать вопрос в WhatsApp
                    </button>
                    <button className="hidden md:block h-[42px] w-full md:w-[49%] text-white  rounded-md bg-[#0fa03f]">
                        Оставить заявку
                    </button>
                    <button className="h-[42px] m-auto w-full md:w-[49%] mt-2 md:mt-4 rounded-md border border-[#00499f] text-[#00499f]">
                        Задать вопрос в Telegram
                    </button>
                    <button className="block md:hidden h-[42px] w-full md:w-[49%] mt-2 text-white  rounded-md bg-[#0fa03f]">
                        Оставить заявку
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TourForm;
