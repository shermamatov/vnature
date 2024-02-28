import { useEffect } from "react";
import "./App.css";
import MainRout from "./Routes/MainRout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AlertModal from "./components/Alert/AlertModal";
import { useDispatch, useSelector } from "react-redux";
import { reduxTypes } from "./store/reducers/tourReducer";
import Aos from "aos";
function App() {
    let cookies = useSelector((item) => item.tours.cookies);
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
            <Header />
            <MainRout />
            {cookies && <AlertModal />}
            <Footer />
        </div>
    );
}

export default App;
