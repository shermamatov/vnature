import React from "react";
import AccordionElement2 from "../Elements/AccordionElement2";
import { useSelector } from "react-redux";

const TourImportant = ({ tour }) => {
    let lang = useSelector((item) => item.tours.lang);
    function checkerLangImportant() {
        return lang === "rus" ? tour?.important : tour?.importantEng;
    }
    return (
        <div id="importantAnchor">
            <div className="p-4 mt-16 rounded-[10px] bg-gradient-to-b from-[#c0d6f4] to-[#acd0ff]/[0.15]">
                {checkerLangImportant()?.map((item, index) => (
                    <div key={index}>
                        <AccordionElement2 item={item} />
                        {checkerLangImportant()?.length - 1 !== index && (
                            <div className="w-full border border-[#00499F] opacity-40"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourImportant;
