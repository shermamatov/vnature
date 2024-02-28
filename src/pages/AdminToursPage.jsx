import React from "react";
import AdminTours from "../components/Admin/AdminTours/AdminTours";

const AdminToursPage = () => {
    return (
        <div>
            <img
                className="fixed z-10 brightness-75 top-0 left-0 right-0 h-[100vh] w-[100%] object-cover"
                src="https://oir.mobi/uploads/posts/2021-05/1622302187_45-oir_mobi-p-priroda-kirgizstana-priroda-krasivo-foto-46.jpg"
                alt=""
            />
            <div className="relative z-10 mt-32 min-h-[80vh]">
                <AdminTours />
            </div>
        </div>
    );
};

export default AdminToursPage;
