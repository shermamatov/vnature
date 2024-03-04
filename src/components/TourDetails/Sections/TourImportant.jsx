import React from "react";
import AccordionElement2 from "../Elements/AccordionElement2";
import { useSelector } from "react-redux";
import AccordionForm from "../Elements/AccordionForm";

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
                <div className="w-full h-[2px] opacity-80 bg-[#00499f]"></div>
                <AccordionForm
                    item={{
                        title:
                            lang === "rus"
                                ? "Включено в стоимость"
                                : "Included in price",
                        desc: lang === "rus" ? tour?.include : tour?.includeEng,
                    }}
                />
                <div className="w-full border border-[#00499F] opacity-80"></div>
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
            </div>
        </div>
    );
};

export default TourImportant;
