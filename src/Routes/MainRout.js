import React from "react";
import HomePage from "../pages/HomePage";
import TourDetailsPage from "../pages/TourDetailsPage";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import ReviewsPage from "../pages/ReviewsPage";
import ToursListPage from "../pages/ToursListPage";
import AddTourPage from "../pages/AddTourPage";

const MainRout = () => {
    const userRoutes = [
        { link: "/", element: <HomePage />, id: 1 },
        { link: "/tour/:name/:id", element: <TourDetailsPage />, id: 2 },
        { link: "/about", element: <AboutUsPage />, id: 3 },
        { link: "/contacts", element: <ContactUsPage />, id: 4 },
        { link: "/reviews", element: <ReviewsPage />, id: 5 },
        { link: "/tours", element: <ToursListPage />, id: 6 },
        { link: "/admin/add", element: <AddTourPage />, id: 7 },
        // { link: "/edit/:id", element: <EditPage />, id: 5 },
    ];
    return (
        <div>
            <Routes>
                {userRoutes.map((item) => (
                    <Route
                        path={item.link}
                        element={item.element}
                        key={item.id}
                    />
                ))}
            </Routes>
        </div>
    );
};

export default MainRout;
