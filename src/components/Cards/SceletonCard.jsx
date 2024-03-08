import { Skeleton } from "@mui/material";
import React from "react";

const SceletonCard = () => {
    return (
        <div className="rounded-[10px] border-none md:border-2 border-gray-300 font-montserrat p-0 md:p-8 cursor-pointer">
            <Skeleton
                className="w-full aspect-video"
                height={"auto"}
                variant="rounded"
                animation="wave"
            />
            <Skeleton
                height={48}
                width={"30%"}
                sx={{ marginTop: "8px" }}
                animation="wave"
            />
            <Skeleton width={"65%"} animation="wave" />
            <Skeleton width={"40%"} animation="wave" />
            <Skeleton width={"50%"} animation="wave" />
        </div>
    );
};

export default SceletonCard;
