import React, { useEffect, useState } from "react";
import "../TourDetails.scss";
import { tour } from "../../../consts";
const PriceTable = () => {
    let [arr, setArr] = useState([]);
    useEffect(() => {
        let arr2 = [];
        for (let i in tour.price) {
            arr2.push(tour.price[i]);
        }
        setArr(arr2);
    }, []);
    return (
        <div className="content font-montserrat">
            <div className="mt-16">
                <p className="mb-8 text-3xl font-semibold">
                    Цены в долларах США
                </p>
                <div className="rounded-sm border border-[#00499f]">
                    <div className="flex justify-between">
                        <div className="tableSection tableSection2">
                            Количество людей
                        </div>
                        {arr.map((item, index) => (
                            <div className="tableSection" key={index}>
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between">
                        <div className="tableSection tableSection2">
                            Цена за человека
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
