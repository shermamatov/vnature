import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../TourDetails.scss";
export default function AccordionElement2({
    item,
    itemEng = {},
    isModal = false,
    deleteFunction = null,
    setModal = null,
    setOneItem = null,
    setOneItemEng = null,
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
                    backgroundColor: `${isModal ? "white" : "transparent"}`,
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
                        <div className="text-sm md:text-lg text-black">
                            {item?.importantTitle}
                        </div>
                        {isModal && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteFunction(item.id);
                                    }}
                                    className="px-4 bg-red-500 text-white rounded-md ml-6 h-full"
                                >
                                    удалить
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setModal(true);
                                        setOneItem(item);
                                        setOneItemEng(itemEng);
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
                    <div className="-mt-4">
                        {item?.importantDesc.split(";").map((item, index) => (
                            <div
                                className="md:text-sm text-xs mt-2 "
                                key={index}
                            >
                                {item?.split("!!").length === 1 ? (
                                    <p>{item?.split("!!")[0]}</p>
                                ) : (
                                    <p>
                                        <strong>{item?.split("!!")[0]}</strong>
                                        {item?.split("!!")[1]}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
