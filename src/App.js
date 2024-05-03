import { useEffect } from "react";
import "./App.css";
import MainRout from "./Routes/MainRout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AlertModal from "./components/Alert/AlertModal";
import { useDispatch, useSelector } from "react-redux";
import { reduxTypes } from "./store/reducers/tourReducer";
import Aos from "aos";
import { Alert } from "@mui/material";
function App() {
    let cookies = useSelector((item) => item.tours.cookies);
    let loader = useSelector((item) => item.tours.loader);
    let error = useSelector((item) => item.tours.error);
    let dispatch = useDispatch();
    useEffect(() => {
        if (!localStorage.getItem("lang")) {
            localStorage.setItem("lang", "eng");
        }
        if (!localStorage.getItem("cookies")) {
            localStorage.setItem("cookies", "true");
        } else {
            dispatch({
                type: reduxTypes.SET_COOKIES,
                payload: JSON.parse(localStorage.getItem("cookies")),
            });
        }
        Aos.init();
    }, []);
    return (
        <div className="App relative">
            {loader && (
                <div className="fixed z-30 top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center">
                    <div className="loaderAdmin"></div>
                </div>
            )}
            {error.isError && (
                <div
                    onClick={() => dispatch({ type: reduxTypes.CLOSE_ERROR })}
                    className="fixed z-30 top-0 bottom-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex justify-center items-center"
                >
                    <div>
                        <Alert
                            variant="filled"
                            severity="error"
                            onClose={() =>
                                dispatch({ type: reduxTypes.CLOSE_ERROR })
                            }
                        >
                            Упс что-то пошло не так, код ошибки -{" "}
                            {error.errorMess.response.status}
                        </Alert>
                    </div>
                </div>
            )}
            <Header />
            <MainRout />
            {cookies && <AlertModal />}
            <Footer />
        </div>
    );
}

export default App;
