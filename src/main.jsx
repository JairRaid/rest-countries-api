import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CountryContextProvider from "./components/CountryContextProvider.jsx";
import { ThemeProvider } from "./store/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <CountryContextProvider>
      <App />
    </CountryContextProvider>
  </ThemeProvider>
);
