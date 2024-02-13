import React from "react";
import { tours } from "../../consts";
import TourCard from "../Cards/TourCard";

const Block3 = () => {
    return (
        <div className="">
            <h2 className="text-5xl font-semibold text-center capitalize text-[#14183e]">
                Наши туры
            </h2>
            <div className="mt-16">
                <div className="content grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tours.map((item, index) => (
                        <TourCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Block3;
