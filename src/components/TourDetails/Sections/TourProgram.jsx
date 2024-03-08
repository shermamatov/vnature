import React, { useState } from "react";
// import { tour } from "../../../consts";
import AccordionElement from "../Elements/Accordion";
import TourProgrammModal from "../Elements/TourProgrammModal";
import { useSelector } from "react-redux";

const TourProgram = ({ tour, setHotelModal }) => {
    let [programmState, setProgrammState] = useState(false);
    let lang = useSelector((item) => item.tours.lang);
    function checkerLangProgramm() {
        return lang === "rus" ? tour?.programmDays : tour?.programmDaysEng;
    }
    return (
        <>
            {programmState && (
                <TourProgrammModal setProgrammState={setProgrammState} />
            )}
            <div data-aos="fade-right" id="programmAnchor" className="mt-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-8">
                    <h2 className="text-2xl font-semibold md:text-3xl md:font-bold">
                        {lang === "rus" ? "Программа" : "Program"}
                    </h2>
                    <p
                        onClick={() => setProgrammState(true)}
                        className="underline md:mt-0 mt-2 text-base md:text-lg font-normal cursor-pointer"
                    >
                        {lang === "rus"
                            ? "Программа может быть изменена"
                            : "The program may be modified"}
                    </p>
                </div>
                <p className="text-base md:text-xl font-normal">
                    {lang === "rus"
                        ? tour?.programmDescription ||
                          "Кыргызстан — это страна с потрясающей природой, о которой можно говорить многими словами. Вот несколько вариантов описания:"
                        : tour?.programmDescriptionEng ||
                          "Kyrgyzstan is a country with an amazing nature that can be talked about in many words. Here"}
                </p>
                <div className="w-full h-[1px] bg-black mt-4 opacity-50"></div>
                <div>
                    <p className="text-base md:text-xl font-semibold mt-4">
                        {lang === "rus"
                            ? "Мы рекомендуем вам наших замечательных партнёров с лучшим сервисом "
                            : "We recommend our trusted partners with the best service "}
                    </p>
                    <div className="flex mt-4">
                        <a
                            className="text-[#00499f] font-medium underline"
                            href="https://tes.kg/"
                        >
                            “TES HOTEL”
                        </a>
                        <p className="ml-2"> ⭐️⭐️⭐️ </p>
                    </div>
                </div>
                <p className="text-base md:text-xl font-normal mt-6">
                    {lang === "rus"
                        ? "- С уютной террасой и спокойной атмосферой "
                        : "- With a cosy terrace and calm atmosphere "}
                </p>
                <p className="text-base md:text-xl font-normal mt-6">
                    {lang === "rus"
                        ? "- Где вам приготовят щедрый завтрак и свежесваренный кофе - как и нужно для отличного старта дня"
                        : "- Where you will be served a generous breakfast and freshly brewed coffee - just like you need for a great start to the day"}
                </p>
                <p className="text-base md:text-xl font-normal mt-6">
                    {lang === "rus"
                        ? "- Также  организуют встречу из аэропорта и проводы в аэропорт"
                        : "- Also arrange airport meeting and airport transfer"}
                </p>
                <p
                    onClick={() => setHotelModal(true)}
                    className="text-base md:text-xl font-normal mt-6  cursor-pointer"
                >
                    <span className="text-[#00499f]  underline">
                        {lang === "rus"
                            ? "«Можем забронировать номер за вас»  "
                            : "«We can book a room for you» "}
                    </span>
                    {lang === "rus" ? " - 10% скидка" : " - 10% discount"}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8 md:mt-16">
                    <iframe
                        width="100%"
                        // height=""
                        src="https://www.youtube-nocookie.com/embed/rR9N7cU5XTw?si=hUUST4OmQlkP7IWK"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen={true}
                        className="aspect-[16/9] rounded-md"
                    ></iframe>
                    {tour?.galery?.slice(0, 3)?.map((item, index) => (
                        <img
                            className="object-cover aspect-[16/9] rounded-md"
                            key={index}
                            src={item}
                            alt=""
                        />
                    ))}
                </div>
                <div className="mt-8">
                    <p className="text-[10px] md:text-base text-left text-[#7d7d7d]">
                        {lang === "rus"
                            ? "Карта схематично отображает перемещение в туре по дням*"
                            : "Map schematically displays the movement on tour days*"}
                    </p>
                    <div className="w-full border border-black opacity-40 mt-2"></div>
                    {checkerLangProgramm()?.map((item, index) => (
                        <div key={index}>
                            <AccordionElement item={item} />
                            <div className="w-full border border-black opacity-40"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TourProgram;
