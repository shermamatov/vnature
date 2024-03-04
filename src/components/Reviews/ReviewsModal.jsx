import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import {
    addReview,
    getOneTour,
    getTours,
} from "../../store/reducers/tourReducer";
import { nowDate } from "../../consts";

const ReviewsModal = ({
    setReviewSuccess,
    setReviewsModal,
    setLoader,
    isTour = false,
    tour = null,
}) => {
    let tours = useSelector((item) => item.tours.tours);
    let oneTour = useSelector((item) => item.tours.oneTour);
    let lang = useSelector((item) => item.tours.lang);
    let dispatch = useDispatch();

    let [tourId, setTourId] = useState("");
    let [name, setName] = useState("");
    let [reviewDesc, setReviewDesc] = useState("");
    let [country, setCountry] = useState("");
    let [from, setFrom] = useState("");

    let [checker, setChecker] = useState(false);

    function dataConstructor() {
        let obj = {
            name,
            reviewDesc,
            country,
            from,
            tourId,
            date: nowDate.format("DD/MM/YYYY"),
            isAccepted: false,
            tourName: oneTour?.title,
            tourNameEng: oneTour?.titleEng,
        };
        dispatch(addReview(obj, setReviewSuccess, setLoader));
        setReviewsModal(false);
        setLoader(true);
    }

    useEffect(() => {
        if (name && tourId && reviewDesc && country && from) {
            setChecker(true);
        } else {
            setChecker(false);
        }
    }, [name, tourId, reviewDesc, country, from]);

    useEffect(() => {
        dispatch(getTours());
        isTour && setTourId(tour?.id);
    }, []);

    useEffect(() => {
        !isTour && dispatch(getOneTour(tourId));
    }, [tourId]);

    useEffect(() => {
        const tx = document.getElementById("autoTextarea");
        tx?.setAttribute(
            "style",
            "height:" + tx.scrollHeight + "px;overflow-y:hidden;"
        );
        tx?.addEventListener("input", OnInput, false);
        function OnInput() {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
        }
    }, [reviewDesc]);

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-md p-4 font-montserrat w-[90%] max-w-screen-mob"
        >
            <h2 className="text-2xl font-medium">
                {lang === "rus" ? "Оставить отзыв" : "Leave a review"}{" "}
            </h2>
            <select
                value={tourId}
                onChange={(e) => setTourId(e.target.value)}
                className="select_remove_arrow text-[#00499F] font-normal w-full"
            >
                <option value="">Выбрать тур</option>
                {tours?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                        {lang === "rus" ? item?.title : item?.titleEng}
                    </option>
                ))}
            </select>
            <div className="mt-4">
                <input
                    onChange={(e) => setName(e.target.value)}
                    className="border border-[#00499F] w-full h-10 pl-2"
                    placeholder={
                        lang === "rus" ? "Фамилия Имя Отчество" : "Name"
                    }
                    type="text"
                />
                <input
                    onChange={(e) => setCountry(e.target.value)}
                    className="border border-[#00499F] w-full h-10 pl-2 mt-3"
                    placeholder={
                        lang === "rus" ? "Ваша страна" : "Your country"
                    }
                    type="text"
                />

                <select
                    defaultValue={" "}
                    onChange={(e) => setFrom(e.target.value)}
                    className="border border-[#00499F] w-full h-10 pl-2 mt-3 select_remove_arrow"
                >
                    <option value={"Другое"}>
                        {lang === "rus"
                            ? "Как вы узнали про нас?"
                            : "How did you know about us?"}
                    </option>
                    <option value="Инстаграм">
                        {lang === "rus" ? "Инстаграм" : "Instagram"}
                    </option>
                    <option value="Фейсбук">
                        {lang === "rus" ? "Фейсбук" : "Facebook"}
                    </option>
                    <option value="ВКонтакте">
                        {lang === "rus" ? "ВКонтакте" : "VKontakte"}
                    </option>
                    <option value="Тик ток">
                        {lang === "rus" ? "Тик ток" : "Tik Tok"}
                    </option>
                    <option value="Телеграм">
                        {lang === "rus" ? "Телеграм" : "Telegram"}
                    </option>
                    <option value="Через знакомых">
                        {lang === "rus" ? "Через знакомых" : "From friends"}
                    </option>
                    <option value="Другое">
                        {lang === "rus" ? "Другое" : "Other"}
                    </option>
                </select>
                {/* <input
                    onChange={(e) => setReviewDesc(e.target.value)}
                    className="border border-[#00499F] w-full h-10 pl-2 mt-3"
                    placeholder={
                        lang === "rus"
                            ? "Ваше впечатление о туре"
                            : "Your impression of the tour"
                    }
                    type="text"
                /> */}
                <textarea
                    onChange={(e) => setReviewDesc(e.target.value)}
                    className="border border-[#00499F] w-full min-h-24 pl-2 mt-3"
                    placeholder={
                        lang === "rus"
                            ? "Ваше впечатление о туре"
                            : "Your impression of the tour"
                    }
                    type="text"
                    id="autoTextarea"
                ></textarea>
                <p className="text-xs font-semibold text-center underline mt-4">
                    {lang === "rus"
                        ? "Все отзывы публикуются с сохранением авторской орфографии и пунктуации."
                        : "All reviews are published with original spelling and. punctuation."}
                </p>
                <div className="flex justify-center">
                    <button
                        onClick={() => checker && dataConstructor()}
                        className={`w-[80%] ${
                            checker ? "bg-[#0FA03F]" : "bg-gray-500"
                        }  text-white h-10 mt-4`}
                    >
                        {lang === "rus" ? "Отправить отзыв" : "Submit a review"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewsModal;
