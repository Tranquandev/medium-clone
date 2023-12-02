import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from "@nextui-org/react";
import TanstackQuery from "@/providers/TanstackQuery.tsx";
import { ToastContainer } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <TanstackQuery>
        <App />
      </TanstackQuery>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        draggable
      />
    </NextUIProvider>
  </React.StrictMode>
);
