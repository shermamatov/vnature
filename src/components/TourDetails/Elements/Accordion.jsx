import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../TourDetails.scss";
export default function AccordionElement({
    item,
    isModal = false,
    setModal = null,
    setOneItem = null,
}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion
                className="accordion"
                style={{
                    boxShadow: "none",
                    padding: `${isModal ? "0 10px" : "0px"}`,
                    marginTop: `${isModal ? "10px" : "0"}`,
                }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <div className="flex items-center">
                        {/* <div className="rounded-[8px] text-[8px] md:text-sm bg-[#177aee] md:py-2 py-1 md:px-8 px-3 text-white">
                            День {item?.day}
                        </div> */}
                        <button className="rounded-[8px] text-[8px] h-6 w-16 bg-[#177aee] text-white">
                            День {item?.day}
                        </button>
                        <div className="text-xs md:text-lg text-black ml-4 md:ml-8">
                            {item?.dayTitle}
                        </div>
                        {isModal && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setModal(true);
                                        setOneItem(item);
                                    }}
                                    className="px-4 bg-purple-500 text-white rounded-md ml-4 h-full"
                                >
                                    изменить
                                </button>
                            </>
                        )}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {item?.dayDesc?.split(";")?.map((item, index) => (
                        <p className="md:text-sm text-xs mt-2" key={index}>
                            {item}
                        </p>
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
