import { Skeleton } from "@mui/material";
import React, { memo } from "react";

const TourBlock1 = memo(function TourBlock1({
    tour,
    setGaleryStart,
    setGalery,
}) {
    return (
        <div className="content">
            {tour.galery ? (
                <div className="grid gap-2 md:gap-4 grid-cols-6 md:grid-cols-4 grid-rows-2 mt-8 max-h-[260px] md:max-h-[420px]">
                    <div className="col-span-4 row-span-1 md:col-span-2 md:row-span-2">
                        <img
                            onClick={() => {
                                setGalery(true);
                                setGaleryStart(0);
                            }}
                            className="w-[100%] object-cover h-[100%] rounded-md cursor-pointer"
                            src={tour?.galery[0]}
                            alt=""
                        />
                    </div>
                    <div className="col-span-2 row-span-1 md:col-span-1 md:row-span-1 cursor-pointer">
                        <img
                            onClick={() => {
                                setGalery(true);
                                setGaleryStart(1);
                            }}
                            className="w-[100%] object-cover  h-[100%] rounded-md cursor-pointer"
                            src={tour?.galery[1]}
                            alt=""
                        />
                    </div>
                    <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 cursor-pointer">
                        <img
                            onClick={() => {
                                setGalery(true);
                                setGaleryStart(2);
                            }}
                            className="w-[100%] object-cover  h-[100%] rounded-md cursor-pointer"
                            src={tour?.galery[2]}
                            alt=""
                        />
                    </div>
                    <div className="col-span-4 row-span-2 md:col-span-1 md:row-span-1 cursor-pointer">
                        <img
                            onClick={() => {
                                setGalery(true);
                                setGaleryStart(3);
                            }}
                            className="w-[100%] object-cover  h-[100%] rounded-md"
                            src={tour?.galery[3]}
                            alt=""
                        />
                    </div>
                    <div className="hidden md:block col-span-2 row-span-2 md:col-span-1 md:row-span-1 cursor-pointer">
                        <img
                            onClick={() => {
                                setGalery(true);
                                setGaleryStart(4);
                            }}
                            className="w-[100%] object-cover  h-[100%] rounded-md"
                            src={tour?.galery[4]}
                            alt=""
                        />
                    </div>
                </div>
            ) : (
                <div className="grid gap-2 md:gap-4 grid-cols-6 md:grid-cols-4 grid-rows-2 mt-8 max-h-[260px] md:max-h-[420px]">
                    <div className="col-span-4 row-span-1 md:col-span-2 md:row-span-2">
                        <Skeleton
                            sx={{
                                height: "100%",
                                width: "100%",
                                borderRadius: "6px",
                            }}
                            animation="wave"
                            variant="rectangular"
                        />
                    </div>
                    <div className="col-span-2 row-span-1 md:col-span-1 md:row-span-1 ">
                        <Skeleton
                            sx={{
                                height: "100%",
                                width: "100%",
                                borderRadius: "6px",
                            }}
                            animation="wave"
                            variant="rectangular"
                        />
                    </div>
                    <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 ">
                        <Skeleton
                            sx={{
                                height: "100%",
                                width: "100%",
                                borderRadius: "6px",
                            }}
                            animation="wave"
                            variant="rectangular"
                        />
                    </div>
                    <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 ">
                        <Skeleton
                            sx={{
                                height: "100%",
                                width: "100%",
                                borderRadius: "6px",
                            }}
                            animation="wave"
                            variant="rectangular"
                        />
                    </div>
                    <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 ">
                        <Skeleton
                            sx={{
                                height: "100%",
                                width: "100%",
                                borderRadius: "6px",
                            }}
                            animation="wave"
                            variant="rectangular"
                        />
                    </div>
                </div>
            )}
        </div>
    );
});

export default TourBlock1;
