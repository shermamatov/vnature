import React from "react";
import { useSelector } from "react-redux";

const NotFound = () => {
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div>
            <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
                <div className="container flex flex-col items-center ">
                    <div className="flex flex-col gap-6 max-w-md text-center">
                        <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl md:text-3xl dark:text-gray-300">
                            {lang === "rus"
                                ? "Извините, мы не смогли найти эту страницу."
                                : "Sorry, we couldn't find this page."}
                        </p>
                        <a
                            href="/"
                            className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
                        >
                            {lang === "rus" ? "Главная" : "Back to home"}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
