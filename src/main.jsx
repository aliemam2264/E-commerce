import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { products } from "./assets/frontend_assets/assets.js";
import ScrollToTop from "./components/ScrollToTop.jsx";

export const AllData = createContext();

const currency = "$";

const value = {
  products: products,
  currency: currency,
};

createRoot(document.getElementById("root")).render(
  <AllData.Provider value={value}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </AllData.Provider>
);
