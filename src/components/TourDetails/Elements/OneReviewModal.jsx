import React from "react";
import { Avatar } from "@mui/material";

const OneReviewModal = ({ item }) => {
    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name = "timur shermamatov") {
        let nameArr = name?.split(" ");
        if (nameArr.length > 1) {
            return {
                sx: {
                    bgcolor: stringToColor(name),
                },
                children: `${nameArr[0][0]}${nameArr[1][0]}`,
            };
        } else {
            return {
                sx: {
                    bgcolor: stringToColor(name),
                },
                children: `${nameArr[0][0]}${nameArr[0][0]}`,
            };
        }
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-screen-sm w-[90%] m-auto"
        >
            <div key={Math.random()} className="px-2 ">
                <div className="rounded-[10px] bg-[#C0D6F4] p-4">
                    <div className="flex items-center avatar_parent">
                        <Avatar {...stringAvatar(item?.name)} />
                        <div className="ml-2 md:ml-4 flex flex-col">
                            <h3 className="text-sm md:text-lg font-medium">
                                {item?.name}
                            </h3>
                            <p className="md:text-sm text-xs font-semibold opacity-60">
                                {item?.country}
                            </p>
                        </div>
                    </div>
                    <p className="mt-4  text-xs md:text-base font-medium">
                        {item?.reviewDesc}
                    </p>
                    <div className="flex justify-end mt-4">
                        <p>{item?.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneReviewModal;
