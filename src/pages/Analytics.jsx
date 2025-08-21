import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Clock,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  const periods = [
    { value: "1d", label: "24H" },
    { value: "7d", label: "7D" },
    { value: "30d", label: "30D" },
    { value: "90d", label: "90D" },
  ];

  const analyticsData = {
    overview: [
      {
        title: "Page Views",
        value: "125,847",
        change: "+12.5%",
        changeType: "positive",
        icon: Eye,
        description: "Total page views this period",
      },
      {
        title: "Unique Visitors",
        value: "23,456",
        change: "+8.2%",
        changeType: "positive",
        icon: Users,
        description: "Unique visitors this period",
      },
      {
        title: "Avg. Session Duration",
        value: "3m 42s",
        change: "-2.1%",
        changeType: "negative",
        icon: Clock,
        description: "Average time spent on site",
      },
      {
        title: "Bounce Rate",
        value: "34.2%",
        change: "-5.3%",
        changeType: "positive",
        icon: TrendingDown,
        description: "Percentage of single-page sessions",
      },
    ],
    topPages: [
      { path: "/dashboard", views: 15420, percentage: 23.5 },
      { path: "/users", views: 12340, percentage: 18.8 },
      { path: "/analytics", views: 9876, percentage: 15.1 },
      { path: "/orders", views: 8765, percentage: 13.4 },
      { path: "/settings", views: 6543, percentage: 10.0 },
    ],
    trafficSources: [
      {
        source: "Direct",
        visitors: 8543,
        percentage: 36.4,
        gradient: "from-blue-500 to-blue-600",
      },
      {
        source: "Search Engines",
        visitors: 6789,
        percentage: 28.9,
        gradient: "from-green-500 to-green-600",
      },
      {
        source: "Social Media",
        visitors: 4321,
        percentage: 18.4,
        gradient: "from-purple-500 to-purple-600",
      },
      {
        source: "Referrals",
        visitors: 2876,
        percentage: 12.3,
        gradient: "from-yellow-500 to-yellow-600",
      },
      {
        source: "Email",
        visitors: 934,
        percentage: 4.0,
        gradient: "from-pink-500 to-pink-600",
      },
    ],
    devices: [
      {
        device: "Desktop",
        percentage: 65.4,
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        device: "Mobile",
        percentage: 28.7,
        gradient: "from-green-500 to-emerald-500",
      },
      {
        device: "Tablet",
        percentage: 5.9,
        gradient: "from-purple-500 to-fuchsia-500",
      },
    ],
    recentActivity: [
      {
        time: "2 min ago",
        event: "New user registration from New York",
        type: "user",
      },
      {
        time: "5 min ago",
        event: "Page view: /dashboard from organic search",
        type: "view",
      },
      {
        time: "8 min ago",
        event: "User session ended (duration: 4m 23s)",
        type: "session",
      },
      {
        time: "12 min ago",
        event: "Social media referral from Twitter",
        type: "referral",
      },
      {
        time: "15 min ago",
        event: "API request from mobile app",
        type: "api",
      },
    ],
  };

  const getEventIcon = (type) => {
    const iconProps = "w-3 h-3 sm:w-4 sm:h-4";
    switch (type) {
      case "user":
        return <Users className={`${iconProps} text-green-500`} />;
      case "view":
        return <Eye className={`${iconProps} text-blue-500`} />;
      case "session":
        return <Clock className={`${iconProps} text-purple-500`} />;
      case "referral":
        return <Globe className={`${iconProps} text-yellow-500`} />;
      case "api":
        return <BarChart3 className={`${iconProps} text-red-500`} />;
      default:
        return <BarChart3 className={`${iconProps} text-gray-500`} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-2 sm:p-4 lg:p-6">
    
      <div className="mb-4 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Analytics
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Track your website performance and user behavior
            </p>
          </div>

          
          <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl p-1 border border-white/50 shadow-lg">
            {periods.map((period) => (
              <button
                key={period.value}
                onClick={() => setSelectedPeriod(period.value)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
                  selectedPeriod === period.value
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        {analyticsData.overview.map((stat, index) => {
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
              key={stat.title}
              className={`bg-gradient-to-br ${bgGradients[index % 4]} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-white/50 transform hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div
                  className={`p-2 sm:p-3 bg-gradient-to-r ${gradients[index % 4]} rounded-xl shadow-lg`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  {stat.changeType === "positive" ? (
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                  )}
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      stat.changeType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
    
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50">
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Top Pages
            </h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {analyticsData.topPages.map((page, index) => (
                <div
                  key={page.path}
                  className="flex items-center justify-between p-2 sm:p-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {page.path}
                      </p>
                      <p className="text-xs text-gray-500">
                        {page.views.toLocaleString()} views
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 sm:w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${page.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 w-8 sm:w-10 text-right">
                      {page.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50">
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Traffic Sources
            </h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {analyticsData.trafficSources.map((source) => (
                <div
                  key={source.source}
                  className="flex items-center justify-between p-2 sm:p-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 bg-gradient-to-r ${source.gradient} rounded-full shadow-lg`}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {source.source}
                      </p>
                      <p className="text-xs text-gray-500">
                        {source.visitors.toLocaleString()} visitors
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {source.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50">
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Device Usage
            </h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-4 sm:space-y-6">
              {analyticsData.devices.map((device) => (
                <div key={device.device}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      {device.device}
                    </span>
                    <span className="text-sm font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {device.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`bg-gradient-to-r ${device.gradient} h-3 rounded-full transition-all duration-700 shadow-lg`}
                      style={{ width: `${device.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

    
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50">
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Real-time Activity
              </h2>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse shadow-lg" />
                <span className="text-xs font-medium text-green-600">Live</span>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-3">
              {analyticsData.recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-2 sm:p-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {getEventIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 font-medium">
                      {activity.event}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
