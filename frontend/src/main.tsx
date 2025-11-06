import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BasketProvider } from "./context/BasketContext.tsx";
import { ToasterProvider } from "./context/ToasterContext.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ToasterProvider>
            <BasketProvider>
                <App />
            </BasketProvider>
        </ToasterProvider>
    </StrictMode>
);
