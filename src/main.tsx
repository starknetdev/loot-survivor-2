import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StarknetProvider } from "@/provider";
import { connectors } from "@/lib/connectors";
import { DojoProvider } from "./DojoContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StarknetProvider connectors={connectors}>
      <DojoProvider>
        <App />
      </DojoProvider>
    </StarknetProvider>
  </React.StrictMode>
);
