import React, { useState } from "react";
import { tour } from "../../../consts";
import AccordionElement from "../Elements/Accordion";
import TourProgrammModal from "../Elements/TourProgrammModal";

const TourProgram = () => {
    let [programmState, setProgrammState] = useState(false);
    return (
        <>
            {programmState && (
                <TourProgrammModal setProgrammState={setProgrammState} />
            )}
            <div id="programmAnchor" className="mt-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold">Программа</h2>
                    <p
                        onClick={() => setProgrammState(true)}
                        className="underline md:mt-0 mt-4 text-lg font-normal cursor-pointer"
                    >
                        Программа может быть изменена
                    </p>
                </div>
                <p className="text-lg md:text-xl font-normal">
                    {tour.programmDescription}
                </p>
                <div>
                    <p className="text-lg md:text-xl font-normal mt-8">
                        Мы рекомендуем вам наших проверенных партнёров с лучшим
                        сервисом
                    </p>
                    <a
                        className="text-[#00499f] font-medium underline mt-2"
                        href="https://tes.kg/"
                    >
                        “TES HOTEL”
                    </a>
                </div>
                <p className="text-lg md:text-xl font-normal mt-6">
                    - Где вам организуют встречу из аэропорта и проводы в
                    аэропорт
                </p>
                <p className="text-lg md:text-xl font-normal mt-6">
                    - Также приготовят щедрый завтрак и свежесваренный кофе -
                    как и нужно для отличного старта дня
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
                    {tour?.galery?.slice(0, 4)?.map((item, index) => (
                        <img
                            className="object-cover aspect-[16/9] rounded-md"
                            key={index}
                            src={item}
                            alt=""
                        />
                    ))}
                </div>
                <div className="mt-8">
                    <p className="text-base text-left text-[#7d7d7d]">
                        Карта схематично отображает перемещение в туре по дням*
                    </p>
                    <div className="w-full border border-black opacity-40 mt-2"></div>
                    {tour?.programmDays?.map((item, index) => (
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
