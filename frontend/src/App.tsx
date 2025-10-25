import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Navbar from "./layout/Navbar/Navbar";
import { useState } from "react";
import BasketDropdown from "./layout/BasketDropdown/BasketDropdown";

function App() {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
        useState<boolean>(false);
    const [isBasketDropdownOpen, setIsBasketDropdownOpen] =
        useState<boolean>(false);

    const toggleMobileSidebar = () => {
        setIsMobileSidebarOpen(!isMobileSidebarOpen);
    };

    return (
        <BrowserRouter>
            <Navbar
                isMobileSidebarOpen={isMobileSidebarOpen}
                toggleMobileSidebar={toggleMobileSidebar}
                toggleBasketDropdown={() =>
                    setIsBasketDropdownOpen(!isBasketDropdownOpen)
                }
            />

            <BasketDropdown
                open={isBasketDropdownOpen}
                closeBasketDropdown={() => setIsBasketDropdownOpen(false)}
            />

            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage isMobileSidebarOpen={isMobileSidebarOpen} />
                    }
                />
                <Route
                    path="/shop/:gender?"
                    element={
                        <ShopPage isMobileSidebarOpen={isMobileSidebarOpen} />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
