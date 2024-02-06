import "./App.css";
import MainRout from "./Routes/MainRout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
function App() {
    return (
        <div className="App relative">
            <Header />
            <MainRout />
            <Footer />
        </div>
    );
}

export default App;
