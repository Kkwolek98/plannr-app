import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/useAuthContext.tsx";
import { ToastProvider } from "./contexts/useToast.tsx";
import routes from "./routes/routes.tsx";
import "./styles/styles.scss";

const router = createBrowserRouter(routes);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement || document.createElement("div"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
