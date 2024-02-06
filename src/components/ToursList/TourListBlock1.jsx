import React from "react";
import shapka from "../../assets/shapka_banner.JPG";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import { tours } from "../../consts";
import TourCard from "../Cards/TourCard";
const TourListBlock1 = () => {
    let navigate = useNavigate();
    return (
        <div className="relative">
            <img
                className="absolute brightness-[.60] top-0 left-0 right-0 h-[55vh] w-[100%] object-cover object-bottom"
                src={shapka}
                alt=""
            />
            <div className="content font-montserrat relative z-10">
                <div className="h-[55vh] whiteTextImportant flex justify-center items-center flex-col">
                    <Breadcrumbs aria-label="breadcrumb">
                        <p
                            onClick={() => navigate("/")}
                            className="text-2xl text-[#00499F] cursor-pointer font-montserrat"
                        >
                            Главная
                        </p>
                        <p
                            onClick={() => navigate("/")}
                            className="text-2xl text-white cursor-pointer font-montserrat"
                        >
                            Туры
                        </p>
                    </Breadcrumbs>
                    <h1 className="text-4xl text-white mt-6">
                        <span className="font-medium text-center text-white">
                            Туры
                        </span>
                        <span className="font-bold text-center capitalize text-white ml-2">
                            VNATURE
                        </span>
                    </h1>
                </div>
                <div className="mt-16">
                    <div className="content grid grid-cols-2 gap-8">
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
