import React from "react";
import AddTour from "../components/Admin/Add/AddTour";

const AddTourPage = () => {
    return (
        <div>
            <img
                className="fixed z-10 brightness-75 top-0 left-0 right-0 h-[100vh] w-[100%] object-cover"
                src="https://oir.mobi/uploads/posts/2021-05/1622302187_45-oir_mobi-p-priroda-kirgizstana-priroda-krasivo-foto-46.jpg"
                alt=""
            />
            <div className="relative z-10 mt-32">
                <AddTour />
            </div>
        </div>
    );
};

export default AddTourPage;
