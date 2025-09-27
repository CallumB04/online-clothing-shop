import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
