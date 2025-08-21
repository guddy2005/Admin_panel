import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Package,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const orders = [
    {
      id: "#ORD-001",
      customer: "John Smith",
      email: "john.smith@email.com",
      product: "Premium Dashboard License",
      amount: "$299.00",
      status: "completed",
      date: "2024-01-15",
      paymentMethod: "Credit Card",
      items: 1,
    },
    {
      id: "#ORD-002",
      customer: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      product: "Basic Plan Subscription",
      amount: "$49.99",
      status: "processing",
      date: "2024-01-14",
      paymentMethod: "PayPal",
      items: 1,
    },
    {
      id: "#ORD-003",
      customer: "Mike Davis",
      email: "mike.davis@email.com",
      product: "Enterprise Package",
      amount: "$999.00",
      status: "shipped",
      date: "2024-01-13",
      paymentMethod: "Bank Transfer",
      items: 3,
    },
    {
      id: "#ORD-004",
      customer: "Emily Wilson",
      email: "emily.wilson@email.com",
      product: "Monthly Subscription",
      amount: "$19.99",
      status: "pending",
      date: "2024-01-12",
      paymentMethod: "Credit Card",
      items: 1,
    },
    {
      id: "#ORD-005",
      customer: "Robert Brown",
      email: "robert.brown@email.com",
      product: "Pro Plan License",
      amount: "$149.00",
      status: "cancelled",
      date: "2024-01-11",
      paymentMethod: "Credit Card",
      items: 1,
    },
  ];

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "pending", label: "Pending" },
    { value: "processing", label: "Processing" },
    { value: "shipped", label: "Shipped" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ];

  const getStatusConfig = (status) => {
    const configs = {
      pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock },
      processing: { color: "bg-blue-100 text-blue-800", icon: Package },
      shipped: { color: "bg-purple-100 text-purple-800", icon: Truck },
      completed: { color: "bg-green-100 text-green-800", icon: CheckCircle },
      cancelled: { color: "bg-red-100 text-red-800", icon: AlertCircle },
    };
    return (
      configs[status] || { color: "bg-gray-100 text-gray-800", icon: Clock }
    );
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getOrderStats = () => {
    const total = orders.length;
    const completed = orders.filter((o) => o.status === "completed").length;
    const processing = orders.filter(
      (o) => o.status === "processing" || o.status === "pending",
    ).length;
    const totalRevenue = orders
      .filter((o) => o.status === "completed")
      .reduce(
        (sum, order) => sum + parseFloat(order.amount.replace("$", "")),
        0,
      );

    return { total, completed, processing, totalRevenue };
  };

  const stats = getOrderStats();

  return (
    <div className="p-6">
    
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">
              Orders
            </h1>
            <p className="text-gray-600 mt-2">
              Manage and track customer orders
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.completed}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Processing</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.processing}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Truck className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                ${stats.totalRevenue.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search orders by ID, customer, or product..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <select
              className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[160px]"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => {
                const statusConfig = getStatusConfig(order.status);
                const StatusIcon = statusConfig.icon;

                return (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600">
                        {order.id}
                      </div>
                      <div className="text-xs text-gray-500">
                        {order.items} item(s)
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {order.customer}
                      </div>
                      <div className="text-sm text-gray-500">{order.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {order.product}
                      </div>
                      <div className="text-xs text-gray-500">
                        {order.paymentMethod}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">
                        {order.amount}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig.color}`}
                      >
                        <StatusIcon size={12} className="mr-1" />
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 p-1">
                          <Eye size={16} />
                        </button>
                        <button className="text-green-600 hover:text-green-900 p-1">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-900 p-1">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Package size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No orders found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
