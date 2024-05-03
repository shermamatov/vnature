import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    deleteTour,
    deleterFunction,
    getTours,
} from "../../../store/reducers/tourReducer";
import { api, months, monthsEng } from "../../../consts";
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    useMediaQuery,
    useTheme,
} from "@mui/material";

const AdminTours = () => {
    let tours = useSelector((item) => item.tours.tours);
    let lang = useSelector((item) => item.tours.lang);
    let [deleteModal, setDeleteModal] = useState(false);
    let [tourId, setTourId] = useState("");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme?.breakpoints?.down("md"));
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

    function deleteHandler() {
        deleterFunction(tourId?.gallery, api.gallery);
        deleterFunction(tourId?.programmDays, api.programmDays);
        deleterFunction(tourId?.programmDaysEng, api.programmDaysEng);
        deleterFunction(tourId?.important, api.important);
        deleterFunction(tourId?.importantEng, api.importantEng);
        deleterFunction(tourId?.memories, api.memories);
        deleterFunction(tourId?.memoriesEng, api.memoriesEng);
        deleterFunction(tourId?.optional, api.optional);
        deleterFunction(tourId?.optionalEng, api.optionalEng);
        deleterFunction(tourId?.price, api.price);
        dispatch(deleteTour(tourId?.id));
    }

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={deleteModal}
                onClose={() => setDeleteModal(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Вы уверены что хотите удалить данный тур?"}
                </DialogTitle>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="error"
                        autoFocus
                        onClick={() => setDeleteModal(false)}
                    >
                        отмена
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                            deleteHandler();
                            setDeleteModal(false);
                        }}
                        autoFocus
                    >
                        удалить
                    </Button>
                </DialogActions>
            </Dialog>
            <div className="content font-montserrat">
                <div
                    onClick={() => navigate("/admin/add")}
                    className="flex justify-center bg-white p-4 rounded-md mt-4 cursor-pointer"
                >
                    <div className="flex flex-col items-center justify-center">
                        {/* <p className="text-5xl ">+</p> */}
                        <p className="text-xl flex items-center font-medium">
                            <span className="text-3xl mr-2 mt-1">+</span>{" "}
                            добавить тур
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
                                        {
                                            checkerLangMonth()[
                                                item?.season?.end - 1
                                            ]
                                        }
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
                                            setTourId(item);
                                            setDeleteModal(true);
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
        </div>
    );
};

export default AdminTours;
