import React, { useEffect } from "react";
import HomePage from "../pages/HomePage";
import TourDetailsPage from "../pages/TourDetailsPage";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import ReviewsPage from "../pages/ReviewsPage";
import ToursListPage from "../pages/ToursListPage";
import AddTourPage from "../pages/AddTourPage";
import AdminPage from "../pages/AdminPage";
import EditTourPage from "../pages/EditTourPage";
import AuthPage from "../pages/AuthPage";
import { useDispatch, useSelector } from "react-redux";
import { authListener } from "../store/reducers/tourReducer";
import { admin } from "../consts";

const MainRout = () => {
    let user = useSelector((item) => item.tours.user);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(authListener());
    }, []);
    const userRoutes = [
        { link: "/", element: <HomePage />, id: 1 },
        { link: "/tour/:name/:id", element: <TourDetailsPage />, id: 2 },
        { link: "/about", element: <AboutUsPage />, id: 3 },
        { link: "/contacts", element: <ContactUsPage />, id: 4 },
        { link: "/reviews", element: <ReviewsPage />, id: 5 },
        { link: "/tours", element: <ToursListPage />, id: 6 },
        { link: "/auth", element: <AuthPage />, id: 10 },
    ];
    let privateRoutes = [
        { link: "/admin/add", element: <AddTourPage />, id: 7 },
        { link: "/admin", element: <AdminPage />, id: 8 },
        { link: "/admin/edit/:id", element: <EditTourPage />, id: 9 },
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
                {user === admin &&
                    privateRoutes.map((item) => (
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
