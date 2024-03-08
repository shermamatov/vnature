import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTour, getTours } from "../../../store/reducers/tourReducer";
import { useNavigate } from "react-router-dom";
import { months, monthsEng } from "../../../consts";

const Admin = () => {
    let tours = useSelector((item) => item.tours.tours);
    let lang = useSelector((item) => item.tours.lang);
    let navigate = useNavigate();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTours());
    }, []);

    return (
        <div className="content font-montserrat">
            <div
                onClick={() => navigate("/admin/tours")}
                className="flex justify-center bg-white p-4 rounded-md mt-4 cursor-pointer"
            >
                <div className="flex flex-col items-center justify-center">
                    <p className="text-xl flex items-center font-medium">
                        туры
                    </p>
                </div>
            </div>
            <div
                onClick={() => navigate("/admin/reviews")}
                className="flex justify-center bg-white p-4 rounded-md mt-4 cursor-pointer"
            >
                <div className="flex flex-col items-center justify-center">
                    <p className="text-xl flex items-center font-medium">
                        Отзывы
                    </p>
                </div>
            </div>
            <a
                href="https://analytics.google.com/analytics/web/?authuser=0&hl=en#/a305253846p430743197/admin"
                target="_blank"
            >
                <div
                    // onClick={() => navigate("/admin")}
                    className="flex justify-center bg-white p-4 rounded-md mt-4 cursor-pointer"
                >
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-xl flex items-center font-medium">
                            Аналитика
                        </p>
                    </div>
                </div>
            </a>
            <a
                target="_blank"
                href="https://console.firebase.google.com/project/vnature-web/firestore/data/~2Freviews~2FcBj0ZpIj3MjH2vgODsxd"
            >
                <div
                    onClick={() => navigate("/admin")}
                    className="flex justify-center bg-white p-4 rounded-md mt-4 cursor-pointer"
                >
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-xl flex items-center font-medium">
                            База Данных
                        </p>
                    </div>
                </div>
            </a>
            <div
                onClick={() => navigate("/admin")}
                className="flex justify-center bg-white p-4 rounded-md mt-4 cursor-pointer"
            >
                <div className="flex flex-col items-center justify-center">
                    <p className="text-xl flex items-center font-medium">
                        Индексация
                    </p>
                </div>
            </div>
            <div
                onClick={() => navigate("/auth")}
                className="flex justify-center bg-red-500 text-white p-4 rounded-md mt-4 cursor-pointer"
            >
                <div className="flex flex-col items-center justify-center">
                    <p className="text-xl flex items-center font-medium">
                        Выйти из Админки
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Admin;
