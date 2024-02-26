import React from "react";
import AccordionElement2 from "../Elements/AccordionElement2";
import { useSelector } from "react-redux";

const TourImportant = ({ tour }) => {
    let lang = useSelector((item) => item.tours.lang);
    function checkerLangImportant() {
        return lang === "rus" ? tour?.important : tour?.importantEng;
    }
    function checkAccordion() {
        // let acc =
    }
    return (
        <div id="importantAnchor">
            <h2 className="block md:hidden mt-8 text-2xl font-semibold md:text-3xl md:font-bold">
                {lang === "rus" ? "Важно знать" : "Important"}
            </h2>
            <div className="p-4 md:mt-16 mt-4 rounded-[10px] bg-[#c0d6f4]">
                {checkerLangImportant()?.map((item, index) => (
                    <div key={index}>
                        <AccordionElement2 item={item} />
                        {checkerLangImportant()?.length - 1 !== index && (
                            <div className="w-full border border-[#00499F] opacity-80"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourImportant;
