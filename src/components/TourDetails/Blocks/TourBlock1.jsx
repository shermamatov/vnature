import { Skeleton } from "@mui/material";
import React, { memo } from "react";

const TourBlock1 = memo(function TourBlock1({
    tour,
    setGaleryStart,
    setGalery,
}) {
    let width = window.innerWidth;
    return (
        <div className="content">
            {tour?.gallery?.length > 0 && tour ? (
                width > 768 ? (
                    <div className="flex justify-between mt-8">
                        <div className="w-[64%] mr-2 aspect-video h-auto">
                            <img
                                onClick={() => {
                                    setGalery(true);
                                    setGaleryStart(0);
                                }}
                                className="w-[100%] object-cover h-[100%] rounded-md cursor-pointer "
                                src={tour?.gallery[0]?.imgUrl}
                                alt=""
                            />
                        </div>
                        <div className="w-[36%] grid grid-cols-2 gap-2 relative">
                            <div className="col-span-1 aspect-square">
                                <img
                                    onClick={() => {
                                        setGalery(true);
                                        setGaleryStart(1);
                                    }}
                                    className="w-[100%] object-cover h-[100%] rounded-md cursor-pointer  "
                                    src={tour?.gallery[1]?.imgUrl}
                                    alt=""
                                />
                            </div>
                            <div className="col-span-1 aspect-square">
                                <img
                                    onClick={() => {
                                        setGalery(true);
                                        setGaleryStart(2);
                                    }}
                                    className="w-[100%] object-cover h-[100%] rounded-md cursor-pointer "
                                    src={tour?.gallery[2]?.imgUrl}
                                    alt=""
                                />
                            </div>
                            <div className="col-span-1 aspect-square">
                                <img
                                    onClick={() => {
                                        setGalery(true);
                                        setGaleryStart(3);
                                    }}
                                    className="w-[100%] object-cover  h-[100%] rounded-md"
                                    src={tour?.gallery[3]?.imgUrl}
                                    alt=""
                                />
                            </div>
                            <div className="col-span-1 aspect-square">
                                <img
                                    onClick={() => {
                                        setGalery(true);
                                        setGaleryStart(4);
                                    }}
                                    className="w-[100%] object-cover  h-[100%] rounded-md"
                                    src={tour?.gallery[4]?.imgUrl}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-between flex-wrap mt-8">
                        <div className="w-[65%] pr-2 aspect-video">
                            <img
                                onClick={() => {
                                    setGalery(true);
                                    setGaleryStart(0);
                                }}
                                className="w-[100%] object-cover h-[100%] rounded-md cursor-pointer  "
                                src={tour?.gallery[0]?.imgUrl}
                                alt=""
                            />
                        </div>
                        <div className="w-[35%] aspect-square">
                            <img
                                onClick={() => {
                                    setGalery(true);
                                    setGaleryStart(1);
                                }}
                                className="w-[100%] object-cover h-[100%] rounded-md cursor-pointer "
                                src={tour?.gallery[1]?.imgUrl}
                                alt=""
                            />
                        </div>
                        <div className="w-[35%] pt-2 aspect-square">
                            <img
                                onClick={() => {
                                    setGalery(true);
                                    setGaleryStart(2);
                                }}
                                className="w-[100%] object-cover  h-[100%] rounded-md"
                                src={tour?.gallery[2]?.imgUrl}
                                alt=""
                            />
                        </div>
                        <div className="w-[65%] pt-2 pl-2 aspect-video">
                            <img
                                onClick={() => {
                                    setGalery(true);
                                    setGaleryStart(3);
                                }}
                                className="w-[100%] object-cover  h-[100%] rounded-md"
                                src={tour?.gallery[3]?.imgUrl}
                                alt=""
                            />
                        </div>
                    </div>
                )
            ) : width > 768 ? (
                <div className="flex justify-between mt-8">
                    <div className="w-[64%] mr-2 aspect-video h-auto">
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
                    <div className="w-[36%] grid grid-cols-2 gap-2 relative">
                        <div className="col-span-1 aspect-square">
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
                        <div className="col-span-1 aspect-square">
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
                        <div className="col-span-1 aspect-square">
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
                        <div className="col-span-1 aspect-square">
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
                </div>
            ) : (
                <div className="flex justify-between flex-wrap mt-8">
                    <div className="w-[65%] pr-2 aspect-video">
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
                    <div className="w-[35%] aspect-square">
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
                    <div className="w-[35%] pt-2 aspect-square">
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
                    <div className="w-[65%] pt-2 pl-2 aspect-video">
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
