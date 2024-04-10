import React from "react";
import shapka from "../../assets/shapka_banner.webp";

const ForClient = () => {
    return (
        <div className="relative">
            <img
                className="absolute brightness-[.60] top-0 left-0 right-0 md:h-[55vh] h-[25vh] w-[100%] object-cover object-bottom"
                src={shapka}
                alt=""
            />
            <div className="content font-montserrat relative z-10">
                <div className="md:h-[55vh] h-[25vh] whiteTextImportant flex justify-center items-center flex-col">
                    <h1 className="text-2xl md:text-4xl text-white mt-6">
                        <>
                            <span className="font-medium text-center text-white">
                                Как забронировать и оплатить тур?
                            </span>
                        </>
                    </h1>
                </div>
                <div className="font-montserrat ">
                    <h2 className="text-2xl md:text-3xl font-semibold mt-16">
                        Шаг 1: Отправьте заявку
                    </h2>
                    <p className="text-xl md:text-2xl font-medium mt-4">
                        Посмотрите коллекцию туров и выберите, куда бы вам
                        хотелось поехать. При необходимости задайте уточняющие
                        вопросы нашим менеджерам: позвоните по номеру{" "}
                        <a className="text-[#00499f]" href="tel:+996554034477">
                            +996 554 034 477
                        </a>{" "}
                        или напишите сообщение на{" "}
                        <a
                            className="text-[#00499f]"
                            href="https://wa.me/554034477"
                        >
                            WhatsApp
                        </a>
                        ,{" "}
                        <a
                            className="text-[#00499f]"
                            href="https://t.me/vnaturekg"
                        >
                            Telegram
                        </a>{" "}
                        или на почту{" "}
                        <a
                            className="text-[#00499f]"
                            href="mailto:vnature@gmail.com"
                        >
                            vnaturekg@gmail.com
                        </a>{" "}
                        . После того как определитесь с решением, отправьте
                        заявку через форму на странице выбранного тура. <br />{" "}
                        <br /> <strong>Важно: </strong>
                        заявка не является подтверждением бронирования. Мы
                        проверим наличие мест, актуальность локации и дадим вам
                        ответ в течение суток. <br /> <br />{" "}
                        <strong>Важно: </strong>
                        Если вы хотите добавить к туру дополнительные услуги, к
                        примеру, авиаперелет, страховку или одноместное
                        размещение, пожалуйста, сообщите об этом менеджеру. (к
                        сумме покупки добавим комиссионный сбор 500 сом)
                    </p>
                    <br />
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Шаг 2: Оплатите тур
                    </h2>
                    <p className="text-xl md:text-2xl font-medium mt-4">
                        На основании полученных данных мы подготовим для вас все
                        необходимые документы, которыми вы должны ознакомиться.
                        После этого предложим оплатить тур удобным способом: -
                        переводом на карту VISA - наличными, если имеется
                        возможность <br /> <br /> <strong>Важно: </strong> при
                        бронировании тура менее чем за 2 недели до отправления,
                        необходимо сразу внести 100% оплаты. При бронировании
                        тура более чем 2 недели до отправления, можно сначала
                        внести 30% от стоимости тура, а остальные 70% оплатить
                        не позднее чем за 2 недели до отправления. Пожалуйста,
                        не затягивайте с оплатой.
                    </p>
                    <br />
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Шаг 3: Отправляйтесь в путешествие
                    </h2>
                    <p className="text-xl md:text-2xl font-medium mt-4">
                        Всё готово! Тур оплачен, вперед навстречу приключениям!
                        Наслаждайтесь поездкой, делитесь впечатлениями,
                        выкладывайте фото с хэштегом #vnature
                    </p>
                    <br />
                    <hr />
                    <br />
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Можно ли вернуть деньги, если вы передумали ехать?
                    </h2>
                    <p className="text-xl md:text-2xl font-medium mt-4">
                        Да, конечно. Сумма возврата будет зависеть от периода
                        аннуляции. Если до поездки остается более 2 недели,
                        вернем 100% стоимости тура. Более 10 дней — 70%. Более 5
                        дней — 50%. При отказе от тура менее чем за 5 дней до
                        его начала, стоимость не возвращается. При отмене
                        путешествия по причине болезни или сложных семейных
                        обстоятельствах, при наличии справки возможен полный
                        возврат денежных средств, за исключением прямых
                        понесенных затрат. Если вы оплатили тур наличными,
                        отдадим деньги наличными. Если картой — переведем на
                        карту. Возврат средств осуществляется в течение 10 дней.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForClient;
