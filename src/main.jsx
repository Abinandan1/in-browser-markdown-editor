import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Notification from "./components/Notification.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Notification />
  </>
);
