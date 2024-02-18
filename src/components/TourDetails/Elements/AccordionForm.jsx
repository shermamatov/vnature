import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../TourDetails.scss";
export default function AccordionForm({ item }) {
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
                    padding: "0px",
                    marginTop: "0",
                    backgroundColor: "transparent",
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
                        <div className="text-lg text-black font-medium ">
                            {item?.title}
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="list-disc px-2 -mt-4">
                        {item?.desc?.split(";").map((item, index) => (
                            <li className="mt-1 font-medium" key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
