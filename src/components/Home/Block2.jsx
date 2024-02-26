import React from "react";
import plusiki from "../../assets/plusiki.svg";
import { useSelector } from "react-redux";
const Block2 = () => {
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div className="relative">
            <div className="content flex justify-center py-16 mob:py-32">
                <h2 className="text-lg sm:text-2xl mob:text-3xl md:text-5xl font-semibold md:font-medium text-center font-montserrat ">
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
                            We are a community of travelers arranging
                            atmospheric and memorable adventures surrounded by
                            mountains and nature, created for true enthusiasts.
                        </>
                    )}
                </h2>
            </div>
            {/* <img
                className=" md:block absolute right-8 top-8 w-28 mob:w-36 md:w-64"
                src={plusiki}
                alt=""
            /> */}
        </div>
    );
};

export default Block2;
