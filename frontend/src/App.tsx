import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Navbar from "./layout/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
