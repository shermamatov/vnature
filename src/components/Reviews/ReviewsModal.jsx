import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import {
    addReview,
    getOneTour,
    getTours,
} from "../../store/reducers/tourReducer";
import { nowDate } from "../../consts";
import countryList from "react-select-country-list";
import Select from "react-select";

const ReviewsModal = ({
    setReviewSuccess,
    setReviewsModal,
    setLoader,
    isTour = false,
    tour = null,
}) => {
    const options = useMemo(() => countryList().getLabels(), []);
    let tours = useSelector((item) => item.tours.tours);
    let oneTour = useSelector((item) => item.tours.oneTour);
    let lang = useSelector((item) => item.tours.lang);
    let dispatch = useDispatch();

    let [tourId, setTourId] = useState("");
    let [name, setName] = useState("");
    let [reviewDesc, setReviewDesc] = useState("");
    let [country, setCountry] = useState("");
    let [from, setFrom] = useState("");

    let [countriesRus, setCountriesRus] = useState([]);
    let [countriesEng, setCountriesEng] = useState([]);

    let [nameChecker, setNameChecker] = useState(false);
    let [reviewDescChecker, setReviewDescChecker] = useState(false);
    let [countryChecker, setCountryChecker] = useState(false);
    let [fromChecker, setFromChecker] = useState(false);
    let [tourIdChecker, setTourIdChecker] = useState(false);

    const selectRef = useRef(null);
    const inputRefs = useRef([]);

    const handleKeyDown = (e, index) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const nextIndex = index + 1;
            if (index === 2) {
                inputRefs.current[3].focus();
            } else if (nextIndex < inputRefs.current.length) {
                inputRefs.current[nextIndex].focus();
            } else {
                inputRefs.current[0].focus(); // Focus on the first input field
            }
        }
    };

    const addInputRef = (ref, index) => {
        if (ref && !inputRefs.current.includes(ref)) {
            inputRefs.current.push(ref);
            if (index === inputRefs.current.length - 1) {
                ref.onkeydown = (e) => handleKeyDown(e, index);
            }
        }
    };
    // let [checker, setChecker] = useState(false);

    const changeHandler = (value) => {
        setCountry(value);
        setCountryChecker(false);
    };

    function submitHandler() {
        if (!name) {
            setNameChecker(true);
        }
        if (!reviewDesc) {
            setReviewDescChecker(true);
        }
        if (!country) {
            setCountryChecker(true);
        }
        if (!from) {
            setFromChecker(true);
        }
        if (!tourId) {
            setTourIdChecker(true);
        }
        if (name && tourId && reviewDesc && country && from) {
            dataConstructor();
        }
    }

    function dataConstructor() {
        let obj = {
            name,
            reviewDesc,
            country: country.label,
            review_from: from,
            tourId,
            date_create: nowDate.format("YYYY-MM-DD"),
            isAccepted: false,
            tourName: oneTour?.title,
            tourNameEng: oneTour?.titleEng,
        };
        dispatch(addReview(obj, setReviewSuccess, setLoader));
        setReviewsModal(false);
        setLoader(true);
    }

    useEffect(() => {
        dispatch(getTours());
        isTour && setTourId(tour?.id);

        fetch("https://namaztimes.kz/ru/api/country?type=json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data.map((item) => console.log(item)));
                let arr = [];
                for (let i in data) {
                    arr.push({ label: data[i], value: data[i] });
                }
                setCountriesRus(arr);
                // Здесь вы можете обрабатывать полученные данные
            })
            .catch((error) => {
                console.error(
                    "There has been a problem with your fetch operation:",
                    error
                );
            });

        let select = document.getElementById("react-select-2-input");
        select?.addEventListener("keydown", (key) => handleKeyDown(key, 2));
    }, []);

    useEffect(() => {
        if (countriesEng.length === 0) {
            let arr = [];
            for (let i in options) {
                arr.push({ label: options[i], value: options[i] });
            }
            setCountriesEng(arr);
        }
    }, [options]);

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

    useEffect(() => {
        country && inputRefs.current[2].focus();
    }, [country]);

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-md p-4 font-montserrat w-[90%] max-w-screen-mob"
        >
            <h2 className="text-2xl font-medium">
                {lang === "rus" ? "Оставить отзыв" : "Leave a review"}{" "}
            </h2>
            {tourIdChecker && (
                <label className="text-red-500 text-xs" htmlFor="nameInput">
                    {lang === "rus"
                        ? "пожалуйста выберите тур*"
                        : "please select tour*"}
                </label>
            )}
            <select
                ref={(ref) => addInputRef(ref, 0)}
                value={tourId}
                onChange={(e) => {
                    setTourId(e.target.value);
                    setTourIdChecker(false);
                }}
                className={`select_remove_arrow ${
                    tourIdChecker ? "text-red-500" : "text-[#00499F] "
                } font-normal w-full`}
            >
                <option value="">
                    {" "}
                    {lang === "rus" ? "Выбрать тур" : "Select Tour"}
                </option>
                {tours?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                        {lang === "rus" ? item?.title : item?.titleEng}
                    </option>
                ))}
            </select>
            <div className="mt-4">
                {nameChecker && (
                    <label className="text-red-500 text-xs" htmlFor="nameInput">
                        {lang === "rus"
                            ? "пожалуйста введите свое имя*"
                            : "Please enter your name*"}
                    </label>
                )}
                <input
                    ref={(ref) => addInputRef(ref, 1)}
                    onChange={(e) => {
                        setName(e.target.value);
                        setNameChecker(false);
                    }}
                    className={`border ${
                        nameChecker ? "border-red-500" : "border-[#00499F]"
                    } w-full h-10 pl-2 mb-3`}
                    placeholder={
                        lang === "rus" ? "Фамилия Имя Отчество" : "Name"
                    }
                    type="text"
                    id="nameInput"
                />

                {countryChecker && (
                    <label
                        className="text-red-500 text-xs"
                        htmlFor="datePicker"
                    >
                        {lang === "rus"
                            ? "пожалуйста выберите свою страну*"
                            : "Please select your country*"}
                    </label>
                )}
                <Select
                    ref={(ref) => addInputRef(ref, 2)}
                    // ref={selectRef}
                    className="mb-3"
                    options={lang === "rus" ? countriesRus : countriesEng}
                    value={country}
                    onChange={changeHandler}
                    placeholder={
                        lang === "rus" ? "Ваша страна" : "Your country"
                    }
                />
                {fromChecker && (
                    <label className="text-red-500 text-xs" htmlFor="nameInput">
                        {lang === "rus"
                            ? "пожалуйста выберите как вы узнали про нас?*"
                            : "Please select how did you know about us?*"}
                    </label>
                )}
                <select
                    ref={(ref) => addInputRef(ref, 3)}
                    // defaultValue={" "}
                    onChange={(e) => {
                        setFrom(e.target.value);
                        setFromChecker(false);
                    }}
                    className={`border ${
                        fromChecker ? "border-red-500" : "border-[#00499F] "
                    } w-full h-10 pl-2 mb-3 select_remove_arrow`}
                    id="nameInput"
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
                {reviewDescChecker && (
                    <label
                        className="text-red-500 text-xs"
                        htmlFor="datePicker"
                    >
                        {lang === "rus"
                            ? "Пожалуйста опишите свое впечатление*"
                            : "Please describe your experience*"}
                    </label>
                )}
                <textarea
                    ref={(ref) => addInputRef(ref, 4)}
                    onChange={(e) => {
                        setReviewDesc(e.target.value);
                        setReviewDescChecker(false);
                    }}
                    className={`border ${
                        reviewDescChecker
                            ? "border-red-500"
                            : "border-[#00499F]"
                    }  w-full min-h-24 pl-2 mb-3`}
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
                        ref={(ref) => addInputRef(ref, 5)}
                        onClick={() => submitHandler()}
                        className={`w-[80%] bg-[#0FA03F] text-white h-10 mt-4`}
                    >
                        {lang === "rus" ? "Отправить отзыв" : "Submit a review"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewsModal;
