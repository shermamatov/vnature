import React from "react";
import AccordionForm from "../Elements/AccordionForm";
import { useSelector } from "react-redux";
import AccordionElement2 from "../Elements/AccordionElement2";

const TourIncludeSection = ({ tour }) => {
    let lang = useSelector((item) => item.tours.lang);
    function checkerLangOptional() {
        return lang === "rus" ? tour?.optional : tour?.optionalEng;
    }
    return (
        <div className="mt-16 md:w-[60%] w-full p-4 rounded-[10px]  bg-[#c0d6f4]">
            {checkerLangOptional()?.map((item, index) => (
                <div key={index}>
                    <AccordionElement2 item={item} />
                    {checkerLangOptional()?.length - 1 !== index && (
                        <div className="w-full border border-[#00499F] opacity-80"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TourIncludeSection;
