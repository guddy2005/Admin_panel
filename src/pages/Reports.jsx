import { useState } from "react";
import {
  Calendar,
  Download,
  FileText,
  BarChart3,
  PieChart,
  TrendingUp,
  Filter,
} from "lucide-react";

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState("sales");
  const [dateRange, setDateRange] = useState("30d");

  const reportTypes = [
    {
      id: "sales",
      name: "Sales Report",
      description: "Revenue, orders, and conversion metrics",
      icon: TrendingUp,
      color: "bg-green-500",
    },
    {
      id: "users",
      name: "User Analytics",
      description: "User registration, activity, and retention",
      icon: BarChart3,
      color: "bg-blue-500",
    },
    {
      id: "traffic",
      name: "Traffic Report",
      description: "Website visits, sources, and engagement",
      icon: PieChart,
      color: "bg-purple-500",
    },
    {
      id: "financial",
      name: "Financial Summary",
      description: "Income, expenses, and profit analysis",
      icon: FileText,
      color: "bg-yellow-500",
    },
  ];

  const dateRanges = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
    { value: "custom", label: "Custom range" },
  ];

  const recentReports = [
    {
      name: "Monthly Sales Report - December 2024",
      type: "Sales",
      date: "2024-01-01",
      format: "PDF",
      size: "2.4 MB",
    },
    {
      name: "User Activity Report - Q4 2024",
      type: "Analytics",
      date: "2023-12-28",
      format: "Excel",
      size: "1.8 MB",
    },
    {
      name: "Traffic Summary - Week 52",
      type: "Traffic",
      date: "2023-12-25",
      format: "PDF",
      size: "956 KB",
    },
    {
      name: "Financial Report - December 2024",
      type: "Financial",
      date: "2023-12-20",
      format: "PDF",
      size: "3.1 MB",
    },
  ];

  const reportData = {
    sales: {
      summary: [
        {
          label: "Total Revenue",
          value: "$125,847",
          change: "+12.5%",
          positive: true,
        },
        { label: "Orders", value: "1,234", change: "+8.2%", positive: true },
        {
          label: "Average Order Value",
          value: "$102.00",
          change: "+3.8%",
          positive: true,
        },
        {
          label: "Conversion Rate",
          value: "3.4%",
          change: "-0.2%",
          positive: false,
        },
      ],
      charts: [
        "Revenue trends over time",
        "Top-selling products",
        "Sales by region",
        "Customer acquisition channels",
      ],
    },
    users: {
      summary: [
        {
          label: "New Users",
          value: "2,847",
          change: "+15.3%",
          positive: true,
        },
        {
          label: "Active Users",
          value: "18,234",
          change: "+6.7%",
          positive: true,
        },
        {
          label: "User Retention",
          value: "68.5%",
          change: "+2.1%",
          positive: true,
        },
        { label: "Churn Rate", value: "4.2%", change: "-0.8%", positive: true },
      ],
      charts: [
        "User registration trends",
        "User activity heatmap",
        "Demographic breakdown",
        "Feature usage statistics",
      ],
    },
    traffic: {
      summary: [
        {
          label: "Page Views",
          value: "456,789",
          change: "+18.9%",
          positive: true,
        },
        {
          label: "Unique Visitors",
          value: "89,234",
          change: "+12.4%",
          positive: true,
        },
        {
          label: "Bounce Rate",
          value: "34.2%",
          change: "-3.1%",
          positive: true,
        },
        {
          label: "Session Duration",
          value: "3m 42s",
          change: "+0.8%",
          positive: true,
        },
      ],
      charts: [
        "Traffic sources breakdown",
        "Popular pages ranking",
        "Geographic distribution",
        "Device and browser stats",
      ],
    },
    financial: {
      summary: [
        {
          label: "Total Income",
          value: "$284,567",
          change: "+22.1%",
          positive: true,
        },
        {
          label: "Total Expenses",
          value: "$158,432",
          change: "+8.9%",
          positive: false,
        },
        {
          label: "Net Profit",
          value: "$126,135",
          change: "+38.7%",
          positive: true,
        },
        {
          label: "Profit Margin",
          value: "44.3%",
          change: "+5.2%",
          positive: true,
        },
      ],
      charts: [
        "Income vs expenses trend",
        "Expense categories breakdown",
        "Profit margin analysis",
        "Cash flow projection",
      ],
    },
  };

  const currentReport = reportData[selectedReport];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
            <p className="text-gray-600 mt-2">
              Generate and download comprehensive business reports
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Download size={20} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {reportTypes.map((report) => {
          const Icon = report.icon;
          return (
            <button
              key={report.id}
              onClick={() => setSelectedReport(report.id)}
              className={`p-6 rounded-lg border-2 transition-all text-left ${
                selectedReport === report.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`p-2 ${report.color} rounded-lg`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{report.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{report.description}</p>
            </button>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex items-center space-x-2">
            <Calendar size={20} className="text-gray-400" />
            <span className="text-sm font-medium text-gray-700">
              Date Range:
            </span>
          </div>
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            {dateRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-400" />
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Advanced Filters
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {currentReport.summary.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600">
                {metric.label}
              </p>
              <span
                className={`text-sm font-medium ${
                  metric.positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Report Preview
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                <BarChart3 size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {reportTypes.find((r) => r.id === selectedReport)?.name}
                </h3>
                <p className="text-gray-500 mb-4">
                  Preview will be generated based on selected filters
                </p>
                <div className="space-y-2">
                  {currentReport.charts.map((chart, index) => (
                    <div
                      key={index}
                      className="text-left bg-gray-50 p-3 rounded"
                    >
                      <p className="text-sm font-medium text-gray-700">
                        • {chart}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Reports
              </h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <FileText size={16} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {report.name}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                        <span>{report.type}</span>
                        <span>
                          {new Date(report.date).toLocaleDateString()}
                        </span>
                        <span>{report.format}</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 p-2">
                    <Download size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
