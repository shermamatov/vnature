import React from "react";
import { useNavigate } from "react-router-dom";
import shapka from "../../assets/shapka_banner.webp";
import { useSelector } from "react-redux";

const ContactUs = () => {
    let navigate = useNavigate();
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div className="relative">
            <img
                className="absolute brightness-[.60] top-0 left-0 right-0 h-[25vh] md:h-[55vh] w-[100%] object-cover object-bottom"
                src={shapka}
                alt=""
            />
            <div className="content font-montserrat relative z-10">
                <div className="flex flex-col items-center">
                    <div className="h-[25vh] md:h-[55vh] whiteTextImportant flex justify-center items-center flex-col">
                        <h1
                            data-aos="fade-down"
                            className=" text-2xl md:text-4xl font-medium text-white mt-6"
                        >
                            {lang === "rus"
                                ? "Контактная информация"
                                : "Contact information"}
                        </h1>
                    </div>
                    <div className="flex w-full md:flex-row flex-col justify-around mt-16">
                        <div data-aos="fade-left">
                            <h4 className="mb-4 text-xl capitalize font-semibold">
                                {lang === "rus" ? "адрес:" : "address:"}
                            </h4>
                            <p className="text-lg font-medium capitalize">
                                {lang === "rus" ? (
                                    <>г Ош, улица Монуева 49</>
                                ) : (
                                    <>Osh city, Monueva Street 49</>
                                )}
                            </p>
                        </div>
                        <div data-aos="fade-top" className="mt-8 md:mt-0">
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
                        <div data-aos="fade-right" className="mt-8 md:mt-0">
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
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.322539109244!2d72.80231787553377!3d40.53446274846606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdaea8499fb059%3A0xfa573eae591e9895!2zNDkg0YPQuy4g0JzQvtC90YPQtdCy0LAsINCe0Yg!5e0!3m2!1sru!2skg!4v1709836979363!5m2!1sru!2skg"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="mt-24"
            ></iframe>
        </div>
    );
};

export default ContactUs;
