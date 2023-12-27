import { Outlet } from "react-router-dom";
import "./Layout.scss";
import LayoutSidebar from "./components/LayoutSidebar";
import LayoutTopNavbar from "./components/LayoutTopNavbar";

export default function Layout() {
  return (
    <>
      <LayoutTopNavbar />
      <div className="layout">
        <aside className="layout__sidebar px-2">
          <LayoutSidebar />
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
