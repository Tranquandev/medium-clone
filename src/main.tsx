import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import TanstackQuery from "@/providers/TanstackQuery.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <TanstackQuery>
        <App />
      </TanstackQuery>
    </NextUIProvider>
  </React.StrictMode>
);
