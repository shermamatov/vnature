import React, { useEffect, useState } from "react";
import TourCard from "../Cards/TourCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../../store/reducers/tourReducer";
import SceletonCard from "../Cards/SceletonCard";

const Block3 = () => {
    let tours = useSelector((item) => item.tours.tours);
    let lang = useSelector((item) => item.tours.lang);
    let navigate = useNavigate();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTours());
        setTimeout(() => {
            dispatch(getTours());
        }, 5000);
    }, []);

    return (
        <div className="">
            <h2 className="text-4xl md:text-5xl font-semibold text-center capitalize text-[#14183e]">
                {lang === "rus" ? "Наши туры" : "Our tours"}
            </h2>
            <div className="mt-8 md:mt-16">
                <div
                    data-aos="fade-up"
                    className="content grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {tours?.length > 0 && tours ? (
                        tours?.map((item, index) => (
                            <TourCard key={index} item={item} />
                        ))
                    ) : (
                        <>
                            <SceletonCard />
                            <SceletonCard />
                            <SceletonCard />
                            <SceletonCard />
                        </>
                    )}
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={() => {
                            navigate("/tours");
                            window.scrollTo(0, 0);
                        }}
                        className="max-w-[240px] w-[70%] mt-8 text-white h-10 rounded-[5px] bg-[#00499f]"
                    >
                        {lang === "rus" ? "Еще туры" : "More tours"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Block3;
