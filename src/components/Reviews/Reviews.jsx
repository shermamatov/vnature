import React, { useEffect, useState } from "react";
import "../../App.css";
import shapka from "../../assets/shapka_banner.JPG";
import { useDispatch, useSelector } from "react-redux";
import ReviewSuccess from "./ReviewSuccess";
import ReviewsModal from "./ReviewsModal";
import { getInitials, getReviews } from "../../store/reducers/tourReducer";
import { useNavigate } from "react-router-dom";
const Reviews = () => {
    let lang = useSelector((item) => item.tours.lang);
    let reviews = useSelector((item) => item.tours.reviews);
    // let oneTour = useSelector((item) => item.tours.oneTour);
    let [loader, setLoader] = useState(false);
    let [reviewsModal, setReviewsModal] = useState(false);
    let [reviewSuccess, setReviewSuccess] = useState(false);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(getReviews());
    }, []);

    return (
        <>
            {loader && (
                <div className="fixed z-30 top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center">
                    <div className="loaderAdmin"></div>
                </div>
            )}
            {reviewsModal && (
                <div
                    onClick={() => setReviewsModal(false)}
                    className="fixed z-30 top-0 bottom-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex justify-center items-center"
                >
                    <ReviewsModal
                        setReviewsModal={setReviewsModal}
                        setReviewSuccess={setReviewSuccess}
                        setLoader={setLoader}
                        isTour={false}
                    />
                </div>
            )}
            {reviewSuccess && (
                <div
                    onClick={() => setReviewSuccess(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex justify-center items-center"
                >
                    <ReviewSuccess setReviewSuccess={setReviewSuccess} />
                </div>
            )}
            <div className="relative">
                <img
                    className="absolute brightness-[.60] top-0 left-0 right-0 h-[25vh] md:h-[50vh] w-[100%] object-cover object-bottom"
                    src={shapka}
                    alt=""
                />
                <div className="font-montserrat content relative z-10">
                    <div className="h-[25vh] md:h-[50vh] whiteTextImportant">
                        <div className="h-full flex justify-center items-center flex-col">
                            <h1
                                data-aos="fade-down"
                                className="text-center text-2xl md:text-4xl  text-white mt-6"
                            >
                                <span className="font-medium text-center text-white">
                                    {lang === "rus"
                                        ? " Отзывы О Путешествиях с"
                                        : "Travel Reviews with"}
                                </span>
                                <span className="font-cunia font-bold text-center capitalize text-white ml-2">
                                    VNATURE
                                </span>
                            </h1>
                        </div>
                    </div>
                    <p
                        data-aos="fade-right"
                        className="text-black text-xl md:text-2xl font-medium text-start mt-16 max-w-screen-lg w-[100%] m-auto"
                    >
                        {lang === "rus"
                            ? "Спасибо всем, кто возвращаясь из путешествия, делится с нами впечатлениями! Ваши отзывы помогают нам улучшать сервис и делать следующие поездки еще интереснее. Мы уверены, что лучшие решения приходят благодаря сочетанию нашего видения и ваших ожиданий."
                            : "Thanks to everyone who comes back from the trip, share with us impressions! Your feedback helps us improve the service and make the next trips even more interesting. We are sure that the best solutions come from a combination of our vision and your expectations."}
                    </p>
                    <p
                        data-aos="fade-right"
                        className=" text-base md:text-xl mt-16 font-normal text-center text-black"
                    >
                        {lang === "rus"
                            ? "Все отзывы публикуются с сохранением авторской орфографии и пунктуации."
                            : "All reviews are published with original spelling and punctuation."}
                    </p>
                    <div className="mt-16 md:mt-24">
                        {reviews?.map((item, index) => (
                            <div
                                data-aos="fade-right"
                                key={index}
                                className="flex flex-col mt-8 max-w-[768px] m-auto"
                            >
                                <div className="flex items-center">
                                    <div className="w-14 h-14 md:w-20 md:h-20 font-semibold bg-[#00499F] rounded-full flex justify-center items-center text-white border-8 border-[#A0CCFF]">
                                        {getInitials(item?.name)}
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold ml-4">
                                            {item?.name}
                                        </p>
                                        <p className="text-base font-medium ml-4 text-[#00499F]">
                                            {item?.country}
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-4">
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
                                <p className="mt-4 text-lg">
                                    {item?.reviewDesc}
                                </p>
                                <div className="h-[1px] bg-[#999999] blur-[1px] mt-8"></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => setReviewsModal(true)}
                            className="max-w-[240px] w-[70%] mt-8 text-white h-10 rounded-[5px] bg-[#00499f]"
                        >
                            {lang === "rus"
                                ? "Оставить отзыв"
                                : "Leave a review"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;
