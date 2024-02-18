import React from "react";
import shapka from "../../assets/shapka_banner.JPG";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
// import { tours } from "../../consts";
import TourCard from "../Cards/TourCard";
import { useSelector } from "react-redux";
const TourListBlock1 = () => {
    let tours = useSelector((item) => item.tours.tours);
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div className="relative">
            <img
                className="absolute brightness-[.60] top-0 left-0 right-0 h-[55vh] w-[100%] object-cover object-bottom"
                src={shapka}
                alt=""
            />
            <div className="content font-montserrat relative z-10">
                <div className="h-[55vh] whiteTextImportant flex justify-center items-center flex-col">
                    <h1 className="text-4xl text-white mt-6">
                        <span className="font-medium text-center text-white">
                            {lang === "rus" ? "Туры" : "Tours"}
                        </span>
                        <span className="font-bold text-center capitalize text-white ml-2">
                            VNATURE
                        </span>
                    </h1>
                </div>
                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {tours.map((item, index) => (
                            <TourCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourListBlock1;
