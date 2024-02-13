import React, { useState } from "react";
import TourBlock1 from "./Blocks/TourBlock1";
import TourBlock2 from "./Blocks/TourBlock2";
import TourReviews from "./Sections/TourReviews";
import TourForm from "./Sections/TourForm";
import PriceTable from "./Sections/PriceTable";
import TourGalery from "./Sections/TourGalery";
import PriceModal from "./Elements/PriceModal";

const TourDetails = () => {
    let [priceModal, setPriceModal] = useState(false);

    return (
        <div>
            {priceModal && (
                <div
                    onClick={() => setPriceModal(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex justify-center items-center"
                >
                    <PriceModal setModal={setPriceModal} />
                </div>
            )}
            <TourBlock1 />
            <TourBlock2 setModal={setPriceModal} />
            <TourForm setModal={setPriceModal} />
            <PriceTable />
            <div className="content">
                <TourGalery />
                <TourReviews />
            </div>
        </div>
    );
};

export default TourDetails;
