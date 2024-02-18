import React, { useEffect, useState } from "react";
import TourBlock1 from "./Blocks/TourBlock1";
import TourBlock2 from "./Blocks/TourBlock2";
import TourReviews from "./Sections/TourReviews";
import TourForm from "./Sections/TourForm";
import PriceTable from "./Sections/PriceTable";
import TourGalery from "./Sections/TourGalery";
import PriceModal from "./Elements/PriceModal";
import CalendarModal from "./Elements/CalendarModal";
import OrderForm from "./Elements/OrderForm";
import dayjs from "dayjs";
import { nowDate } from "../../consts";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneTour } from "../../store/reducers/tourReducer";

const TourDetails = () => {
    let dispatch = useDispatch();
    let { id } = useParams();
    let tour = useSelector((item) => item.tours.oneTour);
    useEffect(() => {
        dispatch(getOneTour(id));
    }, []);
    let [priceModal, setPriceModal] = useState(false);
    let [calendar, setCalendar] = useState(false);
    let [formModal, setFormModal] = useState(false);
    const [calendarValue, setCalendarValue] = React.useState(
        dayjs(`${nowDate?.year()}-${tour?.season?.start}-1`)
    );
    return (
        <div>
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
                        calendarValue={calendarValue}
                        setCalendar={setCalendar}
                        setFormModal={setFormModal}
                    />
                </div>
            )}
            <TourBlock1 tour={tour} />
            <TourBlock2 tour={tour} setPriceModal={setPriceModal} />
            <TourForm
                tour={tour}
                setFormModal={setFormModal}
                setCalendar={setCalendar}
                setPriceModal={setPriceModal}
            />
            <PriceTable tour={tour} />
            <div className="content">
                <TourGalery tour={tour} />
                <TourReviews tour={tour} />
            </div>
        </div>
    );
};

export default TourDetails;
