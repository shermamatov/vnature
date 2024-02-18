import React, { useEffect, useState } from "react";
import "../TourDetails.scss";
import { useSelector } from "react-redux";
const PriceTable = ({ tour }) => {
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
        <div className="content font-montserrat">
            <div className="mt-16">
                <p className="mb-8 text-3xl font-semibold">
                    {lang === "rus"
                        ? "Цены в долларах США"
                        : "Prices in US dollars"}
                </p>
                <div className="rounded-sm border border-[#00499f]">
                    <div className="flex justify-between">
                        <div className="tableSection tableSection2">
                            {lang === "rus"
                                ? " Количество людей"
                                : "Number of people"}
                        </div>
                        {arr.map((item, index) => (
                            <div className="tableSection" key={index}>
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between">
                        <div className="tableSection tableSection2">
                            {lang === "rus"
                                ? "Цена за человека"
                                : "Price per person"}
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
