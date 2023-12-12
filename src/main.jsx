import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
