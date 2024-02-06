import React from "react";
import plusiki from "../../assets/plusiki.svg";
const Block2 = () => {
    return (
        <div className="relative">
            <div className="content flex justify-center py-24 mob:py-32">
                <h2 className="text-xl sm:text-2xl mob:text-3xl md:text-5xl w-[90%] font-light text-center font-nexa">
                    Мы сообщество путешественников
                    <br className="mob:block hidden" /> организующие атмосферные
                    и <br className="mob:block hidden" /> запоминающиеся
                    приключения в <br className="mob:block hidden" /> окружении
                    гор и природы,
                    <br className="mob:block hidden" /> созданные для истинных{" "}
                    <br className="mob:block hidden" /> ценителей.
                </h2>
            </div>
            <img
                className="absolute right-8 top-8 w-28 mob:w-36 md:w-64"
                src={plusiki}
                alt=""
            />
        </div>
    );
};

export default Block2;
