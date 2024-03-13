import React, { useEffect, useState } from "react";
import TourBlock1 from "./Blocks/TourBlock1";
import TourBlock2 from "./Blocks/TourBlock2";
import PriceModal from "./Elements/PriceModal";
import CalendarModal from "./Elements/CalendarModal";
import OrderForm from "./Elements/OrderForm";
import dayjs from "dayjs";
import { nowDate } from "../../consts";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneTour } from "../../store/reducers/tourReducer";
import OrderSuccess from "./Elements/OrderSuccess";
import OrderError from "./Elements/OrderError";
import Galery from "./Elements/Galery";
import ReviewsModal from "../Reviews/ReviewsModal";
import ReviewSuccess from "../Reviews/ReviewSuccess";
import HotelModal from "./Elements/HotelModal";

const TourDetails = () => {
    let tour = useSelector((item) => item.tours.oneTour);

    let [section, setSection] = useState(1);
    let [priceModal, setPriceModal] = useState(false);
    let [calendar, setCalendar] = useState(false);
    let [formModal, setFormModal] = useState(false);
    let [orderSuccess, setOrderSuccess] = useState(false);
    let [orderError, setOrderError] = useState(false);
    let [galery, setGalery] = useState(false);
    let [loader, setLoader] = useState(false);
    let [reviewsModal, setReviewsModal] = useState(false);
    let [reviewSuccess, setReviewSuccess] = useState(false);
    let [hotelModal, setHotelModal] = useState(false);
    let [galeryStart, setGaleryStart] = useState(0);

    const [calendarValue, setCalendarValue] = React.useState(
        dayjs(`${nowDate?.year()}-${tour?.season?.start}-1`)
    );

    let dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(getOneTour(id));
    }, []);

    return (
        <div>
            {galery && (
                <div
                    onClick={() => setGalery(false)}
                    className="fixed z-30 top-0 bottom-0 left-0 right-0 backdrop-brightness-[.3] backdrop-blur-sm"
                >
                    <div className="relative w-full h-full">
                        <Galery
                            galeryStart={galeryStart}
                            galery={tour?.galery}
                            setGalery={setGalery}
                        />
                        <div
                            onClick={() => setGalery(false)}
                            className="absolute top-14 md:top-5 right-5"
                        >
                            <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 relative cursor-pointer"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.9997 12.5L12.4999 14L7.99972 9.5L3.49978 14L1.99975 12.5L6.49987 7.99998L1.99975 3.49999L3.49978 1.99999L7.99972 6.49998L12.4999 1.99999L13.9997 3.49999L9.49977 7.99998L13.9997 12.5Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
            {calendar && (
                <CalendarModal
                    tour={tour}
                    setCalendarValue={setCalendarValue}
                    setCalendar={setCalendar}
                />
            )}
            {priceModal && (
                <div
                    onClick={() => setPriceModal(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex justify-center items-center"
                >
                    <PriceModal tour={tour} setPriceModal={setPriceModal} />
                </div>
            )}
            {formModal && (
                <div
                    onClick={() => setFormModal(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex justify-center "
                >
                    <OrderForm
                        tour={tour}
                        setLoader={setLoader}
                        calendarValue={calendarValue}
                        setCalendar={setCalendar}
                        setFormModal={setFormModal}
                        setOrderError={setOrderError}
                        setOrderSuccess={setOrderSuccess}
                        setHotelModal={setHotelModal}
                        setCalendarValue={setCalendarValue}
                    />
                </div>
            )}
            {orderSuccess && (
                <div
                    onClick={() => setOrderSuccess(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex justify-center items-center"
                >
                    <OrderSuccess setOrderSuccess={setOrderSuccess} />
                </div>
            )}
            {orderError && (
                <div
                    onClick={() => setOrderError(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex justify-center items-center"
                >
                    <OrderError setOrderError={setOrderError} />
                </div>
            )}
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
                        isTour={true}
                        tour={tour}
                    />
                </div>
            )}
            {reviewSuccess && (
                <div
                    onClick={() => setReviewSuccess(false)}
                    className="fixed z-30 top-0 bottom-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex justify-center items-center"
                >
                    <ReviewSuccess setReviewSuccess={setReviewSuccess} />
                </div>
            )}
            {hotelModal && (
                <div
                    onClick={() => setHotelModal(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex justify-center items-center"
                >
                    <HotelModal setHotelModal={setHotelModal} />
                </div>
            )}
            <>
                <TourBlock1
                    setGalery={setGalery}
                    setGaleryStart={setGaleryStart}
                    tour={tour}
                />
                <TourBlock2
                    section={section}
                    setSection={setSection}
                    tour={tour}
                    setPriceModal={setPriceModal}
                    setCalendar={setCalendar}
                    setFormModal={setFormModal}
                    setGalery={setGalery}
                    setGaleryStart={setGaleryStart}
                    setReviewsModal={setReviewsModal}
                    setHotelModal={setHotelModal}
                />
            </>
        </div>
    );
};

export default TourDetails;
