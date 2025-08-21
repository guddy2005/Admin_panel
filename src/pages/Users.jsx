import { useState } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Filter,
  MoreVertical,
  UserPlus,
  Download,
} from "lucide-react";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      role: "Admin",
      location: "New York, NY",
      joinDate: "2023-01-15",
      lastActive: "2024-01-15",
      status: "active",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      department: "Engineering",
      projects: 12,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 234-5678",
      role: "Manager",
      location: "Los Angeles, CA",
      joinDate: "2023-02-20",
      lastActive: "2024-01-14",
      status: "active",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      department: "Marketing",
      projects: 8,
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike.davis@email.com",
      phone: "+1 (555) 345-6789",
      role: "User",
      location: "Chicago, IL",
      joinDate: "2023-03-10",
      lastActive: "2024-01-10",
      status: "inactive",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      department: "Sales",
      projects: 5,
    },
    {
      id: 4,
      name: "Emily Wilson",
      email: "emily.wilson@email.com",
      phone: "+1 (555) 456-7890",
      role: "User",
      location: "Miami, FL",
      joinDate: "2023-04-05",
      lastActive: "2024-01-15",
      status: "active",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      department: "Design",
      projects: 15,
    },
    {
      id: 5,
      name: "Robert Brown",
      email: "robert.brown@email.com",
      phone: "+1 (555) 567-8901",
      role: "Manager",
      location: "Seattle, WA",
      joinDate: "2023-05-12",
      lastActive: "2024-01-12",
      status: "active",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      department: "Operations",
      projects: 20,
    },
    {
      id: 6,
      name: "Lisa Anderson",
      email: "lisa.anderson@email.com",
      phone: "+1 (555) 678-9012",
      role: "User",
      location: "Austin, TX",
      joinDate: "2023-06-18",
      lastActive: "2024-01-13",
      status: "active",
      avatar:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      department: "HR",
      projects: 7,
    },
    {
      id: 7,
      name: "David Martinez",
      email: "david.martinez@email.com",
      phone: "+1 (555) 789-0123",
      role: "User",
      location: "Phoenix, AZ",
      joinDate: "2023-07-22",
      lastActive: "2024-01-08",
      status: "pending",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      department: "Finance",
      projects: 3,
    },
    {
      id: 8,
      name: "Jennifer Taylor",
      email: "jennifer.taylor@email.com",
      phone: "+1 (555) 890-1234",
      role: "Manager",
      location: "Denver, CO",
      joinDate: "2023-08-15",
      lastActive: "2024-01-11",
      status: "active",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      department: "Legal",
      projects: 6,
    },
  ];

  const roleOptions = [
    { value: "all", label: "All Roles" },
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "User", label: "User" },
  ];

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "pending", label: "Pending" },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleColor = (role) => {
    switch (role) {
      case "Admin":
        return "bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-red-200";
      case "Manager":
        return "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-200";
      case "User":
        return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200";
      default:
        return "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200";
      case "inactive":
        return "bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-red-200";
      case "pending":
        return "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIndicator = (status) => {
    const baseClasses = "w-2 h-2 rounded-full";
    switch (status) {
      case "active":
        return `${baseClasses} bg-gradient-to-r from-green-400 to-green-500`;
      case "inactive":
        return `${baseClasses} bg-gradient-to-r from-red-400 to-red-500`;
      case "pending":
        return `${baseClasses} bg-gradient-to-r from-yellow-400 to-yellow-500`;
      default:
        return `${baseClasses} bg-gradient-to-r from-gray-400 to-gray-500`;
    }
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId],
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map((user) => user.id));
    }
  };

  const getUserStats = () => {
    const total = users.length;
    const active = users.filter((u) => u.status === "active").length;
    const pending = users.filter((u) => u.status === "pending").length;
    const thisMonth = users.filter((u) => {
      const joinDate = new Date(u.joinDate);
      const now = new Date();
      return (
        joinDate.getMonth() === now.getMonth() &&
        joinDate.getFullYear() === now.getFullYear()
      );
    }).length;

    return { total, active, pending, thisMonth };
  };

  const stats = getUserStats();

  const AddUserModal = () => {
    if (!showAddModal) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl max-w-md w-full border border-white/50">
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Add New User
            </h3>
          </div>
          <div className="p-4 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm">
                <option value="User">User</option>
                <option value="Manager">Manager</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm">
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Design">Design</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Legal">Legal</option>
                <option value="Operations">Operations</option>
              </select>
            </div>
          </div>
          <div className="p-4 sm:p-6 border-t border-gray-100 flex flex-col sm:flex-row justify-end gap-2 sm:gap-3">
            <button
              onClick={() => setShowAddModal(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium"
            >
              Cancel
            </button>
            <button
              onClick={() => setShowAddModal(false)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-2 sm:p-4 lg:p-6">
      
      <div className="mb-4 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Users
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Manage your team members and their permissions
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button className="bg-white/80 backdrop-blur-sm border border-white/50 hover:bg-white/90 text-gray-700 px-3 sm:px-4 py-2 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105">
              <Download size={16} className="sm:w-5 sm:h-5" />
              <span>Export</span>
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 sm:px-4 py-2 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus size={16} className="sm:w-5 sm:h-5" />
              <span>Add User</span>
            </button>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        {[
          {
            label: "Total Users",
            value: stats.total,
            icon: UserPlus,
            gradient: "from-blue-500 via-purple-500 to-pink-500",
            bgGradient: "from-blue-50 to-purple-50",
          },
          {
            label: "Active Users",
            value: stats.active,
            icon: () => (
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
            ),
            gradient: "from-green-500 via-teal-500 to-blue-500",
            bgGradient: "from-green-50 to-teal-50",
          },
          {
            label: "Pending",
            value: stats.pending,
            icon: () => (
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
            ),
            gradient: "from-yellow-500 via-orange-500 to-red-500",
            bgGradient: "from-yellow-50 to-orange-50",
          },
          {
            label: "New This Month",
            value: stats.thisMonth,
            icon: Calendar,
            gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
            bgGradient: "from-purple-50 to-fuchsia-50",
          },
        ].map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.bgGradient} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-3 sm:p-6 border border-white/50 transform hover:scale-105`}
            >
              <div className="flex items-center">
                <div
                  className={`p-2 sm:p-3 bg-gradient-to-r ${stat.gradient} rounded-xl shadow-lg`}
                >
                  {typeof IconComponent === "function" && IconComponent.name ? (
                    <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  ) : (
                    <IconComponent />
                  )}
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                  <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search users by name, email, or department..."
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 sm:gap-3">
              <select
                className="flex-1 sm:flex-none px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm min-w-[120px] text-sm"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                {roleOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                className="flex-1 sm:flex-none px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm min-w-[120px] text-sm"
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

          {selectedUsers.length > 0 && (
            <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border border-purple-200 rounded-2xl backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-sm text-purple-800 font-medium">
                  {selectedUsers.length} user(s) selected
                </span>
                <div className="flex gap-2 sm:gap-3">
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors">
                    Bulk Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors">
                    Delete Selected
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      
      <div className="block lg:hidden">
        <div className="space-y-3 sm:space-y-4">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-4 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleSelectUser(user.id)}
                  className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <div className="flex-shrink-0 relative">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={user.avatar}
                    alt={user.name}
                  />
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 ${getStatusIndicator(user.status)}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {user.name}
                    </h3>
                    <div className="flex space-x-1">
                      <button className="text-blue-600 hover:text-blue-800 p-1">
                        <Edit size={14} />
                      </button>
                      <button className="text-red-600 hover:text-red-800 p-1">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-1 space-y-1">
                    <p className="text-xs text-gray-600 flex items-center">
                      <Mail size={10} className="mr-1" />
                      {user.email}
                    </p>
                    <p className="text-xs text-gray-600 flex items-center">
                      <MapPin size={10} className="mr-1" />
                      {user.location}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full border ${getRoleColor(user.role)}`}
                      >
                        {user.role}
                      </span>
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full border ${getStatusColor(user.status)}`}
                      >
                        {user.status.charAt(0).toUpperCase() +
                          user.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    <span>
                      {user.department} • {user.projects} projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="hidden lg:block bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200/50">
            <thead className="bg-gradient-to-r from-gray-50 to-purple-50/30">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={
                      selectedUsers.length === filteredUsers.length &&
                      filteredUsers.length > 0
                    }
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role & Department
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50">
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-pink-50/50 transition-all duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 relative">
                        <img
                          className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-md"
                          src={user.avatar}
                          alt={user.name}
                        />
                        <div
                          className={`absolute -bottom-0.5 -right-0.5 ${getStatusIndicator(user.status)} border border-white`}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <MapPin size={12} className="mr-1" />
                          {user.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center mb-1">
                      <Mail size={12} className="mr-2 text-gray-400" />
                      {user.email}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Phone size={12} className="mr-2 text-gray-400" />
                      {user.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-2">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getRoleColor(user.role)}`}
                      >
                        {user.role}
                      </span>
                      <span className="text-xs text-gray-500">
                        {user.department}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(user.status)}`}
                    >
                      {user.status.charAt(0).toUpperCase() +
                        user.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Last active</span>
                      <span>
                        {new Date(user.lastActive).toLocaleDateString()}
                      </span>
                      <span className="text-xs text-gray-500">
                        {user.projects} projects
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 p-1 transition-colors">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900 p-1 transition-colors">
                        <Trash2 size={16} />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 p-1 transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No users found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>

      {/* Empty State for Mobile */}
      {filteredUsers.length === 0 && (
        <div className="block lg:hidden text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No users found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search criteria or filters
          </p>
        </div>
      )}

    
      {filteredUsers.length > 0 && (
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm text-gray-700 text-center sm:text-left">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">{filteredUsers.length}</span> of{" "}
            <span className="font-medium">{filteredUsers.length}</span> results
          </div>
          <div className="flex items-center justify-center space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
              Previous
            </button>
            <button className="px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 border border-purple-600 rounded-xl hover:from-purple-700 hover:to-pink-700 shadow-lg">
              1
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
              Next
            </button>
          </div>
        </div>
      )}

      <AddUserModal />
    </div>
  );
};

export default Users;
