import React from "react";
import ForClient from "../components/ForClient/ForClient";
import { useSelector } from "react-redux";
import ForClientEng from "../components/ForClient/ForClientEng";

const ForClientPage = () => {
    let lang = useSelector((item) => item.tours.lang);

    return <div>{lang === "rus" ? <ForClient /> : <ForClientEng />}</div>;
};

export default ForClientPage;
