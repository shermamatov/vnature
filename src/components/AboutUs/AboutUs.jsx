import React from "react";
import { useNavigate } from "react-router-dom";
import shapka from "../../assets/shapka_banner.webp";
import { useSelector } from "react-redux";
import aboutBanner from "../../assets/aboutBanner1.webp";
import aboutBanner2 from "../../assets/aboutBanner.JPEG";
import aboutBanner2Adap from "../../assets/aboutBannerAdap.JPEG";

const AboutUs = () => {
    // let navigate = useNavigate();
    let width = window.innerWidth;
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div className="relative">
            <img
                className="absolute brightness-[.60] top-0 left-0 right-0 md:h-[55vh] h-[25vh] w-[100%] object-cover object-bottom"
                src={shapka}
                alt=""
            />
            <div className="content font-montserrat relative z-10">
                <div className="md:h-[55vh] h-[25vh] whiteTextImportant flex justify-center items-center flex-col">
                    <h1
                        data-aos="fade-down"
                        className="text-2xl md:text-4xl text-white mt-6"
                    >
                        {lang === "rus" ? (
                            <>
                                <span className="font-medium text-center text-white">
                                    О Компании
                                </span>
                                <span className="font-cunia font-bold text-center capitalize text-white ml-2">
                                    VNATURE
                                </span>
                            </>
                        ) : (
                            <>
                                <span className="font-medium text-center text-white">
                                    About
                                </span>
                                <span className="font-cunia font-bold text-center capitalize text-white ml-2">
                                    VNATURE
                                </span>
                            </>
                        )}
                    </h1>
                </div>
                <div className="max-w-screen-lg w-[100%] m-auto mt-8 md:mt-16">
                    <p
                        data-aos="fade-left"
                        className="text-base md:text-3xl font-medium  text-left text-black"
                    >
                        {lang === "rus" ? (
                            <>
                                Наша жизненная философия звучит так: <br />
                                <br /> «Как можно дарить любовь, если она
                                отсутствует в тебе?» Мы же дарим вам страсть к
                                путешествиям, ведь в наших сердцах живет эта
                                любовь к невероятным приключениям.
                            </>
                        ) : (
                            <>
                                Our philosophy of life is this: <br /> <br />{" "}
                                "How can you give love if it’s not in you?" We
                                give you a passion for travel, because in our
                                hearts this love for incredible adventures
                                resides
                            </>
                        )}
                    </p>
                    <img
                        data-aos="fade-right"
                        className="mt-8 rounded-md m-auto object-cover "
                        src={aboutBanner}
                        alt=""
                    />
                    <p
                        data-aos="fade-top"
                        className="text-base md:text-2xl font-medium text-left text-black mt-8 md:mt-16 "
                    >
                        {lang === "rus" ? (
                            <>
                                Мы знаем, что каждый из наших гостей обязательно
                                вернется в Кыргызстан, ведь тот, кто приезжает
                                сюда раз, оставляет свое сердце здесь навсегда.{" "}
                                <br /> <br /> Эти незабываемые путешествия не
                                только открыли эту удивительную страну с новой
                                стороны, но и, каким-то неведомым образом,
                                помогли осознать, чего мы стоим. Мы все
                                вдохновлены на большее – те, кому
                                посчастливилось родиться в Кыргызстане, и те,
                                кто увидел его впервые! <br />
                                <img
                                    className="mt-8 rounded-md m-auto object-cover md:object-center md:aspect-video "
                                    src={
                                        width > 768
                                            ? aboutBanner2
                                            : aboutBanner2Adap
                                    }
                                    alt=""
                                />{" "}
                                <br /> Мы покажем вам землю своих предков с
                                древнейшей историей и богатейшим культурным
                                наследием – землю с самым чистым и непорочным
                                духом, землю, где живет многонациональный,
                                гостеприимный и самый щедрый народ. Землю с
                                уникальной природой и особенной красотой.
                                <br /> <br />
                                Нашу землю, наш дом, наш Кыргызстан! Молодой,
                                уверенный и открытый всему миру! Мы рады каждому
                                гостю, каждому другу! Добро пожаловать в
                                Кыргызстан – в удивительную страну небесных гор!{" "}
                                <br />
                                <br />
                            </>
                        ) : (
                            <>
                                We know that each of our guests will definitely
                                return to Kyrgyzstan, because those who come
                                here once leave their heart here forever.
                                <br />
                                <br />
                                These unforgettable journeys not only revealed
                                this amazing country in a new light but also, in
                                some mysterious way, helped to realize what we
                                are worth. We are all inspired for more – those
                                who were fortunate enough to be born in
                                Kyrgyzstan, and those who saw it for the first
                                time! <br />
                                <img
                                    className="mt-8 rounded-md m-auto object-cover md:aspect-video  md:object-center"
                                    src={
                                        width > 768
                                            ? aboutBanner2
                                            : aboutBanner2Adap
                                    }
                                    alt=""
                                />
                                <br />
                                We will show you the land of our ancestors with
                                the ancient history and the richest cultural
                                heritage – the land with the purest and most
                                immaculate spirit, the land where a
                                multinational, hospitable, and the most generous
                                people live. The land with unique nature and
                                special beauty. <br />
                                <br />
                                Our land, our home, our Kyrgyzstan! Young,
                                confident, and open to the whole world! We
                                welcome every guest, every friend! Welcome to
                                Kyrgyzstan – to the amazing country of celestial
                                mountains! <br />
                                <br />
                            </>
                        )}
                    </p>
                </div>
                <div className="w-full h-[1px] bg-black opacity-70 mt-8"></div>
                {/* <div className="max-w-screen-lg w-[100%] m-auto mt-16">
                    <p className="text-2xl italic text-left text-black">
                        Наша жизненная философия звучит так: <br />
                        <br /> “Как можно дарить любовь, если она отсутсвует в
                        тебе?” Мы же дарим вам страсть к путешествиям, потому
                        что в наших сердцах уже пребывает эта любовь к
                        невероятным приключениям
                    </p>
                    <img
                        className="mt-8 rounded-md m-auto object-cover "
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F95%2F49%2F54%2F954954c3136542875f4c343f2fec0831.jpg&f=1&nofb=1&ipt=b0601b9d0290ffbc5dc04e9e976b012e3d76440af5795e8247bafba9d8aef20c&ipo=images"
                        alt=""
                    />
                </div> */}
            </div>
        </div>
    );
};

export default AboutUs;
