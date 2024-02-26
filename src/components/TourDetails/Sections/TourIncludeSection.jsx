import React from "react";
import AccordionForm from "../Elements/AccordionForm";
import { useSelector } from "react-redux";

const TourIncludeSection = ({ tour }) => {
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div className="mt-16 md:w-[60%] w-full p-4 rounded-[10px]  bg-[#c0d6f4]">
            {/* className=" mt-16 " */}
            <div>
                <AccordionForm
                    item={{
                        title:
                            lang === "rus"
                                ? "Включено в стоимость"
                                : "Included in price",
                        desc: lang === "rus" ? tour?.include : tour?.includeEng,
                    }}
                />
                <div className="w-full my-2 border border-[#00499F] opacity-40"></div>
                {/* <div className="w-full mt-2 mb-2 h-[2px] opacity-50 bg-[#00499f]"></div> */}
                <div className="">
                    <AccordionForm
                        item={{
                            title:
                                lang === "rus"
                                    ? "Оплатить дополнительно"
                                    : "Price does not include",
                            desc:
                                lang === "rus"
                                    ? tour?.notInclude
                                    : tour?.notIncludeEng,
                        }}
                    />
                </div>
                {/* <div className="w-full mt-2 mb-2 h-[2px] opacity-50 bg-[#00499f]"></div> */}
            </div>
        </div>
    );
};

export default TourIncludeSection;
