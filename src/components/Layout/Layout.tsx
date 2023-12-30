import { Outlet } from "react-router-dom";
import Toasts from "../Toasts/Toasts";
import "./Layout.scss";
import LayoutSidebar from "./components/LayoutSidebar/LayoutSidebar";
import LayoutTopNavbar from "./components/LayoutTopNavbar";

export default function Layout() {
  return (
    <>
      <LayoutTopNavbar />
      <div className="layout">
        <aside className="layout__sidebar px-2">
          <LayoutSidebar />
        </aside>
        <main className="w-100 px-2">
          <Outlet />
          <Toasts />
        </main>
      </div>
    </>
  );
}
