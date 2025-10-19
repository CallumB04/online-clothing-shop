import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Navbar from "./layout/Navbar/Navbar";
import { useState } from "react";

function App() {
    // state for mobile sidebar visibility
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
        useState<boolean>(false);

    const toggleMobileSidebar = () => {
        setIsMobileSidebarOpen(!isMobileSidebarOpen);
    };

    return (
        <BrowserRouter>
            <Navbar
                isMobileSidebarOpen={isMobileSidebarOpen}
                toggleMobileSidebar={toggleMobileSidebar}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage isMobileSidebarOpen={isMobileSidebarOpen} />
                    }
                />
                <Route path="/shop/:gender?" element={<ShopPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
