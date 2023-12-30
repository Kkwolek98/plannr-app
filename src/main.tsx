import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastProvider } from "./hooks/useToast.tsx";
import routes from "./routes/routes.tsx";
import "./styles/styles.scss";

const router = createBrowserRouter(routes);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement || document.createElement("div"));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  </React.StrictMode>
);
