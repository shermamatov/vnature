import React from "react";
import { tour } from "../../../consts";
import AccordionElement from "../Elements/Accordion";

const TourProgram = () => {
    return (
        <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Программа</h2>
                <p className="underline text-lg font-normal">
                    Программа может быть изменена
                </p>
            </div>
            <p className="text-xl font-normal">
                Путешествие начинается в городе Ош, куда вам нужно добраться
                самостоятельно. В городе необходимо быть за день до начала
                программы и планировать вылет обратно на следующий день после ее
                окончания. Так вы сможете подготовиться к длительной дороге в
                начале путешествия и отдохнуть после программы
            </p>
            <div>
                <p className="text-xl font-normal mt-8">
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
            <p className="text-xl font-normal mt-6">
                - Где вам организуют встречу из аэропорта и проводы в аэропорт
            </p>
            <p className="text-xl font-normal mt-6">
                - Также приготовят щедрый завтрак и свежесваренный кофе - как и
                нужно для отличного старта дня
            </p>
            <div className="grid grid-cols-2 gap-4 mt-16">
                {tour.galery.slice(0, 4).map((item, index) => (
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

                {tour.programm.map((item, index) => (
                    <div key={index}>
                        <AccordionElement
                            title={item?.programmTitle}
                            day={item?.programmDay}
                            description={item?.programmDesc}
                        />
                        <div className="w-full border border-black opacity-40"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourProgram;
