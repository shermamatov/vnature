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

    function checkerLangMonth() {
        if (lang === "rus") {
            return months;
        } else {
            return monthsEng;
        }
    }
    return (
        <div className="content font-montserrat">
            <div
                onClick={() => navigate("/admin/add")}
                className="flex justify-center bg-white p-4 rounded-md mt-4 cursor-pointer"
            >
                <div className="flex flex-col items-center justify-center">
                    {/* <p className="text-5xl ">+</p> */}
                    <p className="text-xl flex items-center font-medium">
                        <span className="text-3xl mr-2 mt-1">+</span> добавить
                        тур
                    </p>
                </div>
                {/* <div className="absolute max-w-40 w-1/3 rounded-md aspect-square"></div> */}
            </div>
            <div className="">
                {tours?.map((item) => (
                    <div
                        onClick={() =>
                            navigate(
                                `/tour/${
                                    lang === "rus"
                                        ? item?.title
                                        : item?.titleEng
                                }/${item?.id}`
                            )
                        }
                        key={item?.id}
                        className="flex bg-white p-4 rounded-md mt-4 "
                    >
                        <img
                            className="max-w-40 w-1/3 rounded-md aspect-square object-cover"
                            src={item?.mainImg}
                            alt=""
                        />
                        <div className="ml-4 flex flex-col justify-between">
                            <div>
                                <p className="text-2xl font-semibold">
                                    {lang === "rus"
                                        ? item?.title
                                        : item?.titleEng}
                                </p>
                                <p className="text-base md:text-xl text-left text-[#00499f] mt-1">
                                    {
                                        checkerLangMonth()[
                                            item?.season?.start - 1
                                        ]
                                    }{" "}
                                    -{" "}
                                    {checkerLangMonth()[item?.season?.end - 1]}
                                </p>
                                <p className="text-base md:text-xl text-left text-[#00499f] mt-1">
                                    {item?.daysCount}{" "}
                                    {lang === "rus" ? "дней" : "days"}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/admin/edit/${item?.id}`);
                                    }}
                                    className="px-4 py-1 text-xs md:text-sm bg-purple-500 text-white rounded-md h-full"
                                >
                                    редактировать
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(deleteTour(item?.id));
                                    }}
                                    className="ml-2 py-1 md:ml-4 px-4 text-xs md:text-sm bg-red-500 text-white rounded-md h-full"
                                >
                                    удалить
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;
