import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../TourDetails.scss";
import { useSelector } from "react-redux";
export default function AccordionElement({
    item,
    itemEng = null,
    isModal = false,
    setModal = null,
    setOneItem = null,
    setOneItemEng = null,
    deleteFunction = null,
    index = 1,
}) {
    const [expanded, setExpanded] = React.useState(false);
    let lang = useSelector((item) => item.tours.lang);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function checkAccordion() {
        let accordion = document.querySelectorAll(".accordionDay");
        accordion.forEach((item) => {
            if (item.classList.contains("Mui-expanded")) {
                item.classList.add("activeAccordion");
            } else {
                item.classList.remove("activeAccordion");
            }
        });
    }

    React.useEffect(() => {
        checkAccordion();
    }, [expanded]);

    return (
        <div>
            <Accordion
                className="accordionDay"
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
                        <button className="accordionBtn rounded-[8px] text-[8px] md:text-[12px] h-6 md:h-8 md:w-20 min-w-16 bg-[#00499F] text-white">
                            {lang === "rus" ? "День" : "Day"} {index}
                        </button>
                        <div className="text-xs md:text-lg text-black ml-4 md:ml-8">
                            {item?.title}
                        </div>
                        {isModal && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteFunction(item?.id, itemEng?.id);
                                    }}
                                    className="px-4 bg-red-500 text-white rounded-md ml-4 h-full"
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
                    {item?.desc?.split(";")?.map((item, index) => (
                        <div className="md:text-sm text-xs mt-2" key={index}>
                            {/* {item} */}
                            {/* {item?.split("!!")?.map((item, index) => ( */}
                            {item?.split("!!").length === 1 ? (
                                <p>{item?.split("!!")[0]}</p>
                            ) : (
                                <p>
                                    <span className="font-medium">
                                        {item?.split("!!")[0]}
                                    </span>
                                    {item?.split("!!")[1]}
                                </p>
                            )}
                            {/* // ))} */}
                        </div>
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
