import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "../TourDetails.scss";
import { nowDate } from "../../../consts";
export default function CalendarModal({ setCalendar, setCalendarValue, tour }) {
    let [months, setMonths] = React.useState([]);
    React.useEffect(() => {
        let arr = [];
        for (
            let i = parseInt(tour?.season.start);
            i <= parseInt(tour?.season.end);
            i++
        ) {
            arr.push(i);
        }
        setMonths(arr);
        // const b = a.add(7, "day");
    }, []);
    document.querySelectorAll(".MuiPickersDay-root").forEach((item) => {
        item.addEventListener("click", function (e) {
            setCalendar(false);
        });
    });
    return (
        <div
            onClick={() => setCalendar(false)}
            className={`fixed z-30 top-0 bottom-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex justify-center ${
                months?.length < 4 && "items-center"
            }`}
        >
            <div className="overflow-scroll py-44 md:py-8 hiddenScrollBar grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {months?.map((item, index) => (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        key={index}
                        className="calendar bg-white rounded-md"
                    >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DateCalendar"]}>
                                <DemoItem label="Controlled calendar">
                                    <DateCalendar
                                        defaultValue={dayjs(
                                            `${nowDate?.year()}-${item}-1`
                                        )}
                                        onChange={(newValue) =>
                                            setCalendarValue(newValue)
                                        }
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                ))}
            </div>
        </div>
    );
}
