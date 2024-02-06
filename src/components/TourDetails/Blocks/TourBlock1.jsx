import React from "react";
import { tour } from "../../../consts";

const TourBlock1 = () => {
    return (
        <div className="content">
            <div className="grid gap-4 grid-cols-4 grid-rows-2 mt-8 max-h-[420px]">
                <div className="col-span-2 row-span-2">
                    <img
                        className="w-[100%] object-cover h-[100%] rounded-md"
                        src={tour.galery[0]}
                        alt=""
                    />
                </div>
                <div className="col-span-1 row-span-1 ">
                    <img
                        className="w-[100%] object-cover  h-[100%] rounded-md"
                        src={tour.galery[1]}
                        alt=""
                    />
                </div>
                <div className="col-span-1 row-span-1 ">
                    <img
                        className="w-[100%] object-cover  h-[100%] rounded-md"
                        src={tour.galery[2]}
                        alt=""
                    />
                </div>
                <div className="col-span-1 row-span-1 ">
                    <img
                        className="w-[100%] object-cover  h-[100%] rounded-md"
                        src={tour.galery[3]}
                        alt=""
                    />
                </div>
                <div className="col-span-1 row-span-1 ">
                    <img
                        className="w-[100%] object-cover  h-[100%] rounded-md"
                        src={tour.galery[4]}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default TourBlock1;
