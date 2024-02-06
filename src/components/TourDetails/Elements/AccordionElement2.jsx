import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../TourDetails.scss";
export default function AccordionElement2({ title, description }) {
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
                        <div className="text-lg text-black">{title}</div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {description.split(";").map((item, index) => (
                        <p className="mt-1" key={index}>
                            {item}
                        </p>
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
