import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Navbar from "./layout/Navbar/Navbar";
import { useState } from "react";
import BasketDropdown from "./layout/BasketDropdown/BasketDropdown";
import ClearBasketPopup from "./components/ClearBasketPopup/ClearBasketPopup";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import ItemPage from "./pages/Item/ItemPage";
import Toaster from "./layout/Toaster/Toaster";

function App() {
    // Layout Visibilities
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
        useState<boolean>(false);
    const [isBasketDropdownOpen, setIsBasketDropdownOpen] =
        useState<boolean>(false);

    // Popup Visibilities
    const [isClearBasketPopupOpen, setIsClearBasketPopupOpen] =
        useState<boolean>(false);

    const toggleMobileSidebar = () => {
        setIsMobileSidebarOpen(!isMobileSidebarOpen);
    };

    return (
        <BrowserRouter>
            {/* Layout Elements */}
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
                openClearBasketPopup={() => setIsClearBasketPopupOpen(true)}
            />
            <Toaster />
            {/* Popups */}
            {isClearBasketPopupOpen && (
                <ClearBasketPopup
                    closePopup={() => setIsClearBasketPopupOpen(false)}
                />
            )}
            {/* Router */}
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
                <Route
                    path="/item/:id"
                    element={
                        <ItemPage isMobileSidebarOpen={isMobileSidebarOpen} />
                    }
                />
                {/* If no existing route matches the URL, show 404 Not Found */}
                <Route
                    path="*"
                    element={
                        <NotFoundPage
                            isMobileSidebarOpen={isMobileSidebarOpen}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
