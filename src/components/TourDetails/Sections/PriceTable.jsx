import React, { useEffect, useState } from "react";
import "../TourDetails.scss";
import { useSelector } from "react-redux";
import { priceArr } from "../../../consts";
const PriceTable = ({ tour }) => {
    let width = window.innerWidth;
    let lang = useSelector((item) => item.tours.lang);
    let [arr, setArr] = useState([]);

    useEffect(() => {
        let arr2 = [];
        for (let i in tour?.price) {
            arr2.push(tour?.price[i]);
        }
        setArr(arr2);
    }, [tour]);
    return (
        <div className=" font-montserrat">
            <div className="mt-16">
                <p className="mb-8 text-3xl font-semibold">
                    {lang === "rus"
                        ? "Цены в долларах США"
                        : "Prices in US dollars"}
                </p>
                <div className="rounded-sm border border-[#00499f] rounded-l-md">
                    <div className="flex justify-between items-end ">
                        <div className="tableSection tableSection2 tableRoundT border border-[#00499f]">
                            {lang === "rus" ? (
                                <p>
                                    {width < 768 ? (
                                        <>
                                            Количес{" "}
                                            <br className="md:hidden block" />{" "}
                                            -тво
                                        </>
                                    ) : (
                                        "Количество"
                                    )}{" "}
                                    людей
                                </p>
                            ) : (
                                <>Number of people</>
                            )}
                        </div>
                        {arr.map((item, index) => (
                            <div
                                className="tableSection border border-[#00499f]"
                                key={index}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-start ">
                        <div className=" tableSection tableSection2 tableRoundB border border-[#00499f]">
                            {lang === "rus" ? (
                                <>
                                    Цена <br className="md:hidden block" /> за{" "}
                                    <br className="md:hidden block" />
                                    человека
                                </>
                            ) : (
                                <>Price per person</>
                            )}
                        </div>
                        {priceArr?.map((item, index) => (
                            <div
                                key={index}
                                className="tableSection border border-[#00499f]"
                            >
                                {tour?.price && tour?.price["" + item]}
                            </div>
                        ))}
                        {}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceTable;
