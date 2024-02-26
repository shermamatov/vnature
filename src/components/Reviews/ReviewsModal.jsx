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

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-md p-4 font-montserrat w-[90%] max-w-screen-mob"
        >
            <h2 className="text-2xl font-medium">Оставить отзыв</h2>
            <select
                value={tourId}
                onChange={(e) => setTourId(e.target.value)}
                className="select_remove_arrow text-[#00499F] font-normal w-full"
            >
                <option value="">Выбрать тур</option>
                {tours?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                        {item?.title}
                    </option>
                ))}
            </select>
            <div className="mt-4">
                <input
                    onChange={(e) => setName(e.target.value)}
                    className="border border-[#00499F] w-full h-10 pl-2"
                    placeholder="Фамилия  Имя Отчество"
                    type="text"
                />
                <input
                    onChange={(e) => setReviewDesc(e.target.value)}
                    className="border border-[#00499F] w-full h-10 pl-2 mt-3"
                    placeholder="Ваше впечатление о туре"
                    type="text"
                />
                <select
                    defaultValue={" "}
                    onChange={(e) => setFrom(e.target.value)}
                    className="border border-[#00499F] w-full h-10 pl-2 mt-3 select_remove_arrow"
                >
                    <option value={"Другое"}>Как вы узнали про нас?</option>
                    <option value="Инстаграм">Инстаграм</option>
                    <option value="Фейсбук">Фейсбук</option>
                    <option value="ВКонтакте">ВКонтакте</option>
                    <option value="Тик ток">Тик ток</option>
                    <option value="Телеграм">Телеграм</option>
                    <option value="Через знакомых">Через знакомых</option>
                    <option value="Другое">Другое</option>
                </select>
                <input
                    onChange={(e) => setCountry(e.target.value)}
                    className="border border-[#00499F] w-full h-10 pl-2 mt-3"
                    placeholder="Ваша страна"
                    type="text"
                />
                <p className="text-[10px] text-center underline mt-4">
                    Все отзывы публикуются с сохранением авторской орфографии и
                    пунктуации.
                </p>
                <div className="flex justify-center">
                    <button
                        onClick={() => checker && dataConstructor()}
                        className={`w-[80%] ${
                            checker ? "bg-[#0FA03F]" : "bg-gray-500"
                        }  text-white h-10 mt-4`}
                    >
                        Отправить отзыв
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewsModal;
