import React from "react";
import { tour } from "../../../consts";
import AccordionElement2 from "../Elements/AccordionElement2";

const TourImportant = () => {
    return (
        <div id="importantAnchor">
            <div className="p-4 mt-16 rounded-[10px] bg-gradient-to-b from-[#c0d6f4] to-[#acd0ff]/[0.15]">
                {tour.important.map((item, index) => (
                    <div key={index}>
                        <AccordionElement2 item={item} />
                        {tour.important.length - 1 !== index && (
                            <div className="w-full border border-[#00499F] opacity-40"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourImportant;
