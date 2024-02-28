import React from "react";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import { useSelector } from "react-redux";
import PrivacyPolicyEng from "../components/PrivacyPolicy/PrivacyPolicyEng";

const PrivacyPolicyPage = () => {
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div>{lang === "rus" ? <PrivacyPolicy /> : <PrivacyPolicyEng />}</div>
    );
};

export default PrivacyPolicyPage;
