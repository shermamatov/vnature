import React from "react";
import { useNavigate } from "react-router-dom";
import shapka from "../../assets/shapka_banner.JPG";
import { useSelector } from "react-redux";

const ContactUs = () => {
    let navigate = useNavigate();
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div className="relative">
            <img
                className="absolute brightness-[.60] top-0 left-0 right-0 h-[40vh] md:h-[55vh] w-[100%] object-cover object-bottom"
                src={shapka}
                alt=""
            />
            <div className="content font-montserrat relative z-10">
                <div className="flex flex-col items-center">
                    <div className="h-[40vh] md:h-[55vh] whiteTextImportant flex justify-center items-center flex-col">
                        <h1 className=" text-2xl md:text-4xl font-medium text-white mt-6">
                            {lang === "rus"
                                ? "Контактная информация"
                                : "Contact information"}
                        </h1>
                    </div>
                    <div className="flex w-full md:flex-row flex-col justify-around mt-16">
                        <div>
                            <h4 className="mb-4 text-xl capitalize font-semibold">
                                {lang === "rus" ? "адрес:" : "address:"}
                            </h4>
                            <p className="text-lg font-medium capitalize">
                                {lang === "rus" ? (
                                    <>
                                        араванская ориентир: <br /> оптима банк
                                    </>
                                ) : (
                                    <>
                                        Aravan benchmark: <br /> optimal bank
                                    </>
                                )}
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0">
                            <h4 className="mb-4 text-xl capitalize font-semibold">
                                {lang === "rus" ? "Телефон:" : "Number:"}
                            </h4>
                            <a
                                className="font-medium text-lg capitalize text-[#00499f]"
                                href="tel:+996507034477"
                            >
                                +996 507 034 477
                            </a>
                        </div>
                        <div className="mt-8 md:mt-0">
                            <h4 className="mb-4 text-xl capitalize font-semibold">
                                email
                            </h4>
                            <a
                                className="font-medium text-lg  text-[#00499f]"
                                href="mailto:vnature@gmail.com"
                            >
                                vnature@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
