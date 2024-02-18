import React, { useEffect } from "react";
// import { tours } from "../../consts";
import TourCard from "../Cards/TourCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../../store/reducers/tourReducer";

const Block3 = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let tours = useSelector((item) => item.tours.tours);
    let lang = useSelector((item) => item.tours.lang);
    useEffect(() => {
        dispatch(getTours());
    }, []);
    return (
        <div className="">
            <h2 className="text-4xl md:text-5xl font-semibold text-center capitalize text-[#14183e]">
                {lang === "rus" ? "Наши туры" : "Our tours"}
            </h2>
            <div className="mt-8 md:mt-16">
                <div className="content grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tours.map((item, index) => (
                        <TourCard key={index} item={item} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={() => navigate("/tours")}
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
