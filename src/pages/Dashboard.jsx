import { BarChart3, Users, ShoppingCart, TrendingUp } from "lucide-react";
import{Link} from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      name: "Total Users",
      value: "2,847",
      change: "+12%",
      changeType: "positive",
      icon: Users,
    },
    {
      name: "Total Orders",
      value: "1,234",
      change: "+8%",
      changeType: "positive",
      icon: ShoppingCart,
    },
    {
      name: "Revenue",
      value: "$45,678",
      change: "+23%",
      changeType: "positive",
      icon: TrendingUp,
    },
    {
      name: "Analytics",
      value: "98.2%",
      change: "-2%",
      changeType: "negative",
      icon: BarChart3,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-2 sm:p-4 lg:p-6">
      <div className="mb-4 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          Welcome back! Here's what's happening with your dashboard today.
        </p>
        <div className="mt-4 p-3 sm:p-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border border-purple-200 rounded-2xl backdrop-blur-sm">
          <p className="text-purple-800 text-xs sm:text-sm">
            <span className="font-semibold">💡 Tip:</span> Click the arrow
            button at the top of the sidebar to toggle between collapsed and
            expanded states with smooth weight animations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const gradients = [
            "from-blue-500 via-purple-500 to-pink-500",
            "from-green-500 via-teal-500 to-blue-500",
            "from-purple-500 via-fuchsia-500 to-pink-500",
            "from-orange-500 via-red-500 to-pink-500",
          ];
          const bgGradients = [
            "from-blue-50 to-purple-50",
            "from-green-50 to-teal-50",
            "from-purple-50 to-fuchsia-50",
            "from-orange-50 to-red-50",
          ];

          return (
            <div
              key={stat.name}
              className={`bg-gradient-to-br ${bgGradients[index % 4]} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-white/50 transform hover:scale-105`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600">
                    {stat.name}
                  </p>
                  <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`p-2 sm:p-3 bg-gradient-to-r ${gradients[index % 4]} rounded-xl shadow-lg`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div className="mt-3 sm:mt-4">
                <span
                  className={`text-xs sm:text-sm font-medium ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-xs sm:text-sm text-gray-600 ml-1">
                  from last month
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Recent Activity
            </h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  action: "New user registered",
                  time: "2 minutes ago",
                  type: "user",
                },
                {
                  action: "Order #1234 completed",
                  time: "5 minutes ago",
                  type: "order",
                },
                {
                  action: "System backup completed",
                  time: "1 hour ago",
                  type: "system",
                },
                {
                  action: "New report generated",
                  time: "2 hours ago",
                  type: "report",
                },
              ].map((activity, index) => {
                const colors = {
                  user: "bg-gradient-to-r from-green-400 to-green-500",
                  order: "bg-gradient-to-r from-blue-400 to-blue-500",
                  system: "bg-gradient-to-r from-yellow-400 to-yellow-500",
                  report: "bg-gradient-to-r from-purple-400 to-purple-500",
                };

                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-2 sm:p-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-xl transition-all duration-300"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${colors[activity.type]}`}
                    />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Quick Actions
            </h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <button   className="p-3 sm:p-4 border-2 border-dashed border-purple-300 rounded-2xl hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300 transform hover:scale-105 group">
                <Link to="/users">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 group-hover:text-purple-500 mx-auto mb-2" />
                <span className="text-xs sm:text-sm text-purple-600 group-hover:text-purple-700 font-medium">
                  Add User
                </span>
                </Link>
              </button>
              <button className="p-3 sm:p-4 border-2 border-dashed border-blue-300 rounded-2xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 transform hover:scale-105 group">
                  <Link to="/Orders">
                <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:text-blue-500 mx-auto mb-2" />
                <span className="text-xs sm:text-sm text-blue-600 group-hover:text-blue-700 font-medium">
                  New Order
                </span>
                  </Link>
              </button>
              <button className="p-3 sm:p-4 border-2 border-dashed border-green-300 rounded-2xl hover:border-green-400 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all duration-300 transform hover:scale-105 group">
               <Link to="/reports" >
                <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 group-hover:text-green-500 mx-auto mb-2" />
                <span className="text-xs sm:text-sm text-green-600 group-hover:text-green-700 font-medium">
                  View Reports
                </span>
                </Link>
              </button>
              <button className="p-3 sm:p-4 border-2 border-dashed border-pink-300 rounded-2xl hover:border-pink-400 hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 transition-all duration-300 transform hover:scale-105 group">
                <Link to="/analytics">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 group-hover:text-pink-500 mx-auto mb-2" />
                <span className="text-xs sm:text-sm text-pink-600 group-hover:text-pink-700 font-medium">
                  Analytics
                </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
