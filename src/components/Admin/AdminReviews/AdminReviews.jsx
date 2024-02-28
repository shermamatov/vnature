import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteReview,
    editReview,
    getAllAcceptedReviews,
    getAllReviews,
    getInitials,
} from "../../../store/reducers/tourReducer";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery,
    useTheme,
} from "@mui/material";

const AdminReviews = () => {
    let [oneReviewEdit, setOneReviewEdit] = useState({});
    let [oneReviewDelete, setOneReviewDelete] = useState("");
    let [deleteModal, setDeleteModal] = useState(false);
    let [editModal, setEditModal] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme?.breakpoints?.down("md"));

    let dispatch = useDispatch();
    let navigate = useNavigate();
    let allReviews = useSelector((item) => item.tours.allReviews);
    let lang = useSelector((item) => item.tours.lang);
    let allAcceptedReviews = useSelector(
        (item) => item.tours.allAcceptedReviews
    );

    function setAccept(review) {
        dispatch(editReview(review?.id, { ...review, isAccepted: true }));
    }

    function deleteReviewFunction(id) {
        dispatch(deleteReview(id));
    }

    useEffect(() => {
        dispatch(getAllReviews());
        dispatch(getAllAcceptedReviews());
    }, []);

    return (
        <div className="content font-montserrat">
            <Dialog
                fullScreen={fullScreen}
                open={editModal}
                onClose={() => setEditModal(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Вы уверены что хотите опубликовать данный отзыв?"}
                </DialogTitle>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="error"
                        autoFocus
                        onClick={() => setEditModal(false)}
                    >
                        отмена
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                            setEditModal(false);
                            setAccept(oneReviewEdit);
                        }}
                        autoFocus
                    >
                        опубликовать
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                fullScreen={fullScreen}
                open={deleteModal}
                onClose={() => setDeleteModal(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Вы уверены что хотите удалить данный отзыв?"}
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
                            setDeleteModal(false);
                            deleteReviewFunction(oneReviewDelete);
                        }}
                        autoFocus
                    >
                        удалить
                    </Button>
                </DialogActions>
            </Dialog>
            <h1 className="text-5xl text-white font-semibold">отзывы</h1>
            <div className="mt-8">
                <h2 className="text-white text-3xl">
                    Заявки ({allReviews?.length})
                </h2>
                <div className="grid grid-col-1 md:grid-cols-2 gap-4 ">
                    {allReviews?.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col mt-4 w-full max-w-[620px] m-auto bg-white p-4 rounded-md"
                        >
                            <div className="flex items-center">
                                <div className="w-14 h-14 md:w-16 md:h-16 font-semibold bg-[#00499F] rounded-full flex justify-center items-center text-white border-4 border-[#A0CCFF]">
                                    {getInitials(item?.name)}
                                </div>
                                <p className="text-xl font-semibold ml-4">
                                    {item?.name}
                                </p>
                            </div>
                            <p className="mt-4 font-medium">
                                {lang === "rus" ? "Тур:" : "Tour:"}
                                <span
                                    onClick={() =>
                                        navigate(
                                            `/tour/${
                                                lang === "rus"
                                                    ? item?.tourName
                                                    : item?.tourNameEng
                                            }/${item?.tourId}`
                                        )
                                    }
                                    className="text-[#00499F] ml-2 cursor-pointer"
                                >
                                    {lang === "rus"
                                        ? item?.tourName
                                        : item?.tourNameEng}
                                </span>
                            </p>
                            <p className=" font-medium">
                                Страна:
                                <span className="text-[#00499F] ml-2 ">
                                    {item?.country}
                                </span>
                            </p>
                            <p className=" font-medium">
                                Как нашли:
                                <span className="text-[#00499F] ml-2 ">
                                    {item?.from}
                                </span>
                            </p>
                            <p className=" font-medium">
                                Дата:
                                <span className="text-[#00499F] ml-2 ">
                                    {item?.date}
                                </span>
                            </p>
                            <p className="mt-4 text-sm font-semibold">
                                {item?.reviewDesc}
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => {
                                        setEditModal(true);
                                        setOneReviewEdit(item);
                                    }}
                                    className="h-8 bg-green-500 font-medium text-white rounded mt-4"
                                >
                                    опубликовать
                                </button>
                                <button
                                    onClick={() => {
                                        setOneReviewDelete(item?.id);
                                        setDeleteModal(true);
                                    }}
                                    className="h-8 bg-red-500 font-medium text-white rounded mt-4"
                                >
                                    удалить
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8 pb-16">
                <h2 className="text-white text-3xl">
                    Все отзывы ({allAcceptedReviews?.length})
                </h2>
                <div className="grid grid-col-1 md:grid-cols-2 gap-4">
                    {allAcceptedReviews?.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col mt-4 w-full max-w-[620px] m-auto bg-white p-4 rounded-md"
                        >
                            <div className="flex items-center">
                                <div className="w-14 h-14 md:w-16 md:h-16 font-semibold bg-[#00499F] rounded-full flex justify-center items-center text-white border-4 border-[#A0CCFF]">
                                    {getInitials(item?.name)}
                                </div>
                                <p className="text-xl font-semibold ml-4">
                                    {item?.name}
                                </p>
                            </div>
                            <p className="mt-4 font-medium">
                                {lang === "rus" ? "Тур:" : "Tour:"}
                                <span
                                    onClick={() =>
                                        navigate(
                                            `/tour/${
                                                lang === "rus"
                                                    ? item?.tourName
                                                    : item?.tourNameEng
                                            }/${item?.tourId}`
                                        )
                                    }
                                    className="text-[#00499F] ml-2 cursor-pointer"
                                >
                                    {lang === "rus"
                                        ? item?.tourName
                                        : item?.tourNameEng}
                                </span>
                            </p>
                            <p className=" font-medium">
                                Страна:
                                <span className="text-[#00499F] ml-2 ">
                                    {item?.country}
                                </span>
                            </p>
                            <p className=" font-medium">
                                Как нашли:
                                <span className="text-[#00499F] ml-2 ">
                                    {item?.from}
                                </span>
                            </p>
                            <p className=" font-medium">
                                Дата:
                                <span className="text-[#00499F] ml-2 ">
                                    {item?.date}
                                </span>
                            </p>
                            <p className="mt-4 text-sm font-semibold">
                                {item?.reviewDesc}
                            </p>
                            <button
                                onClick={() => {
                                    setOneReviewDelete(item?.id);
                                    setDeleteModal(true);
                                }}
                                className="h-8 bg-red-500 font-medium text-white rounded mt-4"
                            >
                                удалить
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminReviews;
