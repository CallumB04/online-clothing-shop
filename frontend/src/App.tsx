import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Navbar from "./layout/Navbar/Navbar";
import { useState } from "react";

function App() {
    // state for sidebar visibilities
    const [homeMobileSidebarOpen, setHomeMobileSidebarOpen] =
        useState<boolean>(false);

    // function to open/close mobile sidebar for different pages
    const handleToggleMobileSidebar = (page: string) => {
        switch (page) {
            case "home":
                setHomeMobileSidebarOpen(!homeMobileSidebarOpen);
                break;
        }
    };

    return (
        <BrowserRouter>
            <Navbar toggleMobileSidebar={handleToggleMobileSidebar} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage mobileSidebarOpen={homeMobileSidebarOpen} />
                    }
                />
                <Route path="/shop/:gender?" element={<ShopPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
