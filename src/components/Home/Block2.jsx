import React from "react";
import { useSelector } from "react-redux";
const Block2 = () => {
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div className="relative">
            <div className="content flex justify-center py-16 mob:py-32">
                <h2
                    data-aos="fade-down"
                    className="text-base md:text-wrap text-nowrap sm:text-2xl mob:text-3xl md:text-5xl font-semibold md:font-medium text-center font-montserrat "
                >
                    {lang === "rus" ? (
                        <>
                            Мы сообщество путешественников
                            <br className="mob:block " /> организующие
                            атмосферные и <br className="mob:block " />
                            запоминающиеся приключения в
                            <br className="mob:block " /> окружении гор и
                            природы,
                            <br className="mob:block " /> созданные для истинных
                            <br className="mob:block " />
                            ценителей.
                        </>
                    ) : (
                        <>
                            We are a community of
                            <br className="mob:block " /> travelers arranging
                            atmospheric
                            <br className="mob:block " />
                            and memorable adventures
                            <br className="mob:block " />
                            surrounded by mountains and nature,
                            <br className="mob:block " /> created for true
                            enthusiasts.
                        </>
                    )}
                </h2>
            </div>
        </div>
    );
};

export default Block2;
