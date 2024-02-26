import React, { useEffect, useState } from "react";
import "../TourDetails.scss";
import { useSelector } from "react-redux";
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
                <div className="rounded-sm border-none md:border md:border-[#00499f]">
                    <div className="flex justify-between items-end">
                        <div className="tableSection tableSection2 md:rounded-none rounded-tl-md">
                            {lang === "rus" ? (
                                <p>
                                    Количес <br className="md:hidden block" />
                                    {width < 768 && "-"}
                                    тво <br className="md:hidden block" /> людей
                                </p>
                            ) : (
                                <>Number of people</>
                            )}
                        </div>
                        {arr.map((item, index) => (
                            <div className="tableSection" key={index}>
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-start ">
                        <div className=" tableSection tableSection2 md:rounded-none rounded-bl-md">
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
                        {arr.map((item, index) => (
                            <div className="tableSection" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceTable;
