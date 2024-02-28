import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxTypes } from "../../store/reducers/tourReducer";

const AlertModal = () => {
    let lang = useSelector((item) => item.tours.lang);
    let dispatch = useDispatch();
    return (
        <div className="fixed left-0 right-0 bottom-0 bg-white py-4 z-20">
            <div className="content flex md:flex-row flex-col justify-between items-center h-full">
                <p className="w-full md:w-[80%] text-sm md:text-lg">
                    {lang === "rus" ? (
                        <p>
                            Мы используем необходимые файлы cookie для работы
                            нашего сайта. С вашего согласия мы также можем
                            использовать несущественные файлы cookie для
                            улучшения пользовательского опыта и анализа трафика
                            веб-сайта. Нажимая «Принять», вы соглашаетесь с
                            использованием файлов cookie нашего сайта.
                            Подробности об обработке ваших данных — в{" "}
                            <a
                                className="text-[#00499F]"
                                href="/privacy_policy"
                            >
                                политике использования файлов cookie.
                            </a>
                        </p>
                    ) : (
                        <p>
                            We use essential cookies to make our site work. With
                            your consent, we may also use non-essential cookies
                            to improve user experience and analyze website
                            traffic. By clicking “Accept“ you agree to our
                            website"s cookie. For details about how your data is
                            processed, see our{" "}
                            <a
                                className="text-[#00499F]"
                                href="/privacy_policy"
                            >
                                cookie policy.
                            </a>
                        </p>
                    )}
                </p>
                <button
                    onClick={() => {
                        localStorage.setItem("cookies", "false");
                        dispatch({
                            type: reduxTypes.SET_COOKIES,
                            payload: false,
                        });
                    }}
                    className="bg-[#00499F] text-white py-2 mt-4 md:mt-0 md:max-w-[200px] w-full rounded-md"
                >
                    {lang === "rus" ? "Принять" : "Accept"}
                </button>
            </div>
        </div>
    );
};

export default AlertModal;
