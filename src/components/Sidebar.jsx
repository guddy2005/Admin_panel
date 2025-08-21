import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  BarChart3,
  Settings,
  FileText,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
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
      className={`bg-gradient-to-b from-gray-800 to-gray-900 text-white transition-all duration-500 ease-in-out ${
        isCollapsed ? "w-16" : "w-72"
      } h-full flex flex-col shadow-2xl`}
      style={{
        transform: "none",
        borderRadius: isCollapsed ? "12px 0 0 0" : "0",
      }}
    >
      <div className="relative h-12 bg-gray-700 flex items-center justify-center border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleCollapse}
            className={`p-1 rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 ${
              isCollapsed ? "bg-blue-600 shadow-lg" : "bg-gray-500"
            }`}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            <ChevronRight
              size={20}
              className={`transition-transform duration-500 ${
                isCollapsed ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
          {!isCollapsed && (
            <div className="text-sm font-medium text-gray-300 animate-fade-in">
              Control Panel
            </div>
          )}
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto pt-2 px-2 sidebar-scrollbar">
        <ul className="space-y-2">
          {navigationItems.map((item, index) => (
            <li
              key={item.name}
              className="transform transition-all duration-300"
              style={{
                animationDelay: `${index * 50}ms`,
                opacity: isCollapsed ? 0.8 : 1,
              }}
            >
              <NavLink to={item.href}>
                {({ isActive }) => (
                  <div
                    className={`flex items-center transition-all duration-300 rounded-lg group relative border-l-4 ${
                      isCollapsed ? "p-3 justify-center" : "py-4"
                    } ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md border-l-blue-400"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white border-l-transparent hover:border-l-gray-500"
                    }`}
                  >
                    <div
                      className={`transition-all duration-300 ${isActive ? "animate-pulse" : ""}`}
                    >
                      <item.icon
                        size={isCollapsed ? 28 : 30}
                        className={isCollapsed ? "px-1" : "pl-2"}
                      />
                    </div>

                    {!isCollapsed && (
                      <span className="ml-4 font-medium transition-all duration-300 animate-fade-in">
                        {item.name}
                      </span>
                    )}
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={` border-t border-gray-700 `}>
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
