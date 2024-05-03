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
        if (tour?.price) {
            for (let i of tour?.price) {
                arr2.push(i?.price);
            }
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
                        {arr?.map((item, index) => (
                            <div
                                key={index}
                                className="tableSection border border-[#00499f]"
                            >
                                {item}
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
