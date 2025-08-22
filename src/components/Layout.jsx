import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // desktop collapse
  const [isOpen, setIsOpen] = useState(false); // mobile open/close

  return (
    <div className="h-screen flex bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 relative overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed md:relative z-30 transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <Sidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          setIsOpen={setIsOpen}
        />
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 overflow-auto relative z-10">
        <div className="min-h-screen">
          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-3 m-2 bg-indigo-600 text-white rounded-lg shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
