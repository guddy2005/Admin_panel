import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="h-screen flex bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 relative overflow-hidden">
      {/* Sidebar */}
      <div className={`relative z-30 ${isCollapsed ? "" : "md:relative"}`}>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Mobile overlay */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity duration-300"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 overflow-auto relative z-10">
        <div className="min-h-screen">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
