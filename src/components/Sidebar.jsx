import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  BarChart3,
  Settings,
  FileText,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({ isCollapsed, setIsCollapsed, setIsOpen }) => {
  const navigationItems = [
    { name: "Dashboard", href: "/home", icon: Home },
    { name: "Users", href: "/home/users", icon: Users },
    { name: "Analytics", href: "/home/analytics", icon: BarChart3 },
    { name: "Orders", href: "/home/orders", icon: ShoppingCart },
    { name: "Reports", href: "/home/reports", icon: FileText },
    { name: "Settings", href: "/home/settings", icon: Settings },
  ];

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`bg-gradient-to-b from-gray-800 to-gray-900 text-white transition-all duration-500 ease-in-out
        h-screen flex flex-col shadow-2xl
        w-72 ${isCollapsed ? "md:w-16" : "md:w-72"}`}
    >
      {/* Header */}
      <div className="relative h-12 bg-gray-700 flex items-center justify-between px-3 border-b border-gray-600">
        <div className="flex items-center space-x-2">
          {/* Collapse button → only on desktop */}
          <button
            onClick={toggleCollapse}
            className={`hidden md:flex p-1 rounded-full hover:bg-gray-600 transition-all duration-300 ${
              isCollapsed ? "bg-blue-600 shadow-lg" : "bg-gray-500"
            }`}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            <ChevronRight
              size={20}
              className={`${isCollapsed ? "rotate-0" : "rotate-180"}`}
            />
          </button>

          
          {!isCollapsed && (
            <div className="hidden md:block text-sm font-medium transition-all duration-300  text-gray-300">
              Control Panel
            </div>
          )}
        </div>

        {/* Close btn → only on mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto pt-2 px-2 sidebar-scrollbar">
      <ul className="space-y-2">
  {navigationItems.map((item) => (
    <li key={item.name}>
      <NavLink
        to={item.href}
        end={item.href === "/home"}   // 👈 sirf Dashboard ke liye exact match
      >
        {({ isActive }) => (
          <div
            onClick={() => setIsOpen(false)} // close sidebar on mobile
            className={`flex items-center transition-all duration-300 rounded-lg border-l-4 ${
              isCollapsed ? "p-3 justify-center" : "py-4"
            } ${
              isActive
                ? "bg-blue-600 text-white shadow-md border-l-blue-400"
                : "text-gray-300 hover:bg-gray-700 hover:text-white border-l-transparent hover:border-l-gray-500"
            }`}
          >
            <item.icon size={isCollapsed ? 28 : 30} className="pl-2" />
            {!isCollapsed && (
              <span className="ml-4 hidden md:inline">{item.name}</span>
            )}
            <span className="ml-4 md:hidden">{item.name}</span>
          </div>
        )}
      </NavLink>
    </li>
  ))}
</ul>

      </nav>

      {/* Footer */}
      <div className="border-t border-gray-700 p-3">
        {!isCollapsed ? (
          <div className="text-center text-xs text-gray-400 animate-fade-in">
            <p>© 2024 Admin Dashboard</p>
            <p className="mt-1">Made with ❤️</p>
          </div>
        ) : (
          <div className="flex justify-center"></div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
