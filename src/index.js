import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TrackerProvider } from "./context/GeneralContext";

ReactDOM.render(
  <React.StrictMode>
    <TrackerProvider>
      <App />
    </TrackerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
