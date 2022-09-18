import {Link, Switch, Route, Routes, BrowserRouter} from "react-router-dom";
import './styles.css';
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import {CryptocurrenciesTitle} from "./components/Cryptocurrencies"
import CryptoDetails from "./components/CryptoDetails"
import News from "./components/News"
import Footer from "./components/Footer"
import TopSlider from "./components/TopSlider";




function App() {
    return (
        <BrowserRouter>
            <div className="whole-project">
                <TopSlider />
                <div className="navbar-page">
                <Navbar />
                    <Routes>
                        <Route path="/" exact element={<Homepage />}/>
                        <Route path="/cryptocurrencies" element={<CryptocurrenciesTitle />}/>
                        <Route path="/crypto/:coinId" element={<CryptoDetails />}/>
                        <Route path="/news" element={<News count={12}/>}/>
                    </Routes>
                {/* <Footer /> */}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
