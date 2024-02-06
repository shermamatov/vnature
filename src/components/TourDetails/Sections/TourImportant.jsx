import React from "react";
import { tour } from "../../../consts";
import AccordionElement2 from "../Elements/AccordionElement2";

const TourImportant = () => {
    return (
        <div>
            <div className="p-4 rounded-[10px] bg-gradient-to-b from-[#c0d6f4] to-[#acd0ff]/[0.15]">
                {tour.importantKnow.map((item, index) => (
                    <>
                        <AccordionElement2
                            title={item.split("||")[0]}
                            description={item.split("||")[1]}
                        />
                        {tour.importantKnow.length - 1 !== index && (
                            <div className="w-full border border-[#00499F] opacity-40"></div>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default TourImportant;
