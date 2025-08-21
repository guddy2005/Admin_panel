import { useState } from "react";
import {
  User,
  Bell,
  Lock,
  Globe,
  Palette,
  Database,
  Shield,
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
  Eye,
  EyeOff,
  Check,
  Moon,
  Sun,
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const tabs = [
    {
      id: "profile",
      name: "Profile",
      icon: User,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      id: "notifications",
      name: "Notifications",
      icon: Bell,
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: "security",
      name: "Security",
      icon: Lock,
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: "appearance",
      name: "Appearance",
      icon: Palette,
      gradient: "from-purple-500 to-fuchsia-500",
    },
    {
      id: "privacy",
      name: "Privacy",
      icon: Shield,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: "system",
      name: "System",
      icon: Database,
      gradient: "from-gray-500 to-slate-500",
    },
  ];

  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    bio: "Product Manager with 5+ years of experience in building scalable web applications.",
    timezone: "America/New_York",
    language: "en",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    weeklyReports: true,
    securityAlerts: true,
  });

  const [appearance, setAppearance] = useState({
    theme: "light",
    sidebarCollapsed: false,
    compactMode: false,
    showAvatars: true,
  });

  const handleProfileChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field, value) => {
    setNotifications((prev) => ({ ...prev, [field]: value }));
  };

  const handleAppearanceChange = (field, value) => {
    setAppearance((prev) => ({ ...prev, [field]: value }));
  };

  const ToggleSwitch = ({ enabled, onChange, label, description }) => (
    <div className="flex items-center justify-between p-3 sm:p-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-xl transition-all duration-300">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
          enabled
            ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
            : "bg-gray-200"
        }`}
      >
        <span
          className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition duration-300 shadow-lg ${
            enabled ? "translate-x-5 sm:translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );

  const renderProfileSettings = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-white/50">
        <div className="relative self-center sm:self-auto">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-2xl">
            JD
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-xl hover:shadow-2xl border border-white/50 transition-all duration-300 transform hover:scale-110">
            <Camera size={14} className="text-purple-600" />
          </button>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Profile Picture
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Update your profile picture and personal details
          </p>
          <button className="text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors">
            Change Avatar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
            value={profileData.firstName}
            onChange={(e) => handleProfileChange("firstName", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
            value={profileData.lastName}
            onChange={(e) => handleProfileChange("lastName", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Mail size={16} className="inline mr-2 text-purple-500" />
          Email Address
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
          value={profileData.email}
          onChange={(e) => handleProfileChange("email", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone size={16} className="inline mr-2 text-purple-500" />
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
            value={profileData.phone}
            onChange={(e) => handleProfileChange("phone", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin size={16} className="inline mr-2 text-purple-500" />
            Location
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
            value={profileData.location}
            onChange={(e) => handleProfileChange("location", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bio
        </label>
        <textarea
          rows={4}
          className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm resize-none"
          value={profileData.bio}
          onChange={(e) => handleProfileChange("bio", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timezone
          </label>
          <select
            className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
            value={profileData.timezone}
            onChange={(e) => handleProfileChange("timezone", e.target.value)}
          >
            <option value="America/New_York">Eastern Time (ET)</option>
            <option value="America/Chicago">Central Time (CT)</option>
            <option value="America/Denver">Mountain Time (MT)</option>
            <option value="America/Los_Angeles">Pacific Time (PT)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Language
          </label>
          <select
            className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
            value={profileData.language}
            onChange={(e) => handleProfileChange("language", e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Notification Preferences
        </h3>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl">
          <ToggleSwitch
            enabled={notifications.emailNotifications}
            onChange={(value) =>
              handleNotificationChange("emailNotifications", value)
            }
            label="Email Notifications"
            description="Receive notifications via email"
          />
          <div className="border-t border-gray-100"></div>
          <ToggleSwitch
            enabled={notifications.pushNotifications}
            onChange={(value) =>
              handleNotificationChange("pushNotifications", value)
            }
            label="Push Notifications"
            description="Receive push notifications in your browser"
          />
          <div className="border-t border-gray-100"></div>
          <ToggleSwitch
            enabled={notifications.smsNotifications}
            onChange={(value) =>
              handleNotificationChange("smsNotifications", value)
            }
            label="SMS Notifications"
            description="Receive notifications via text message"
          />
          <div className="border-t border-gray-100"></div>
          <ToggleSwitch
            enabled={notifications.marketingEmails}
            onChange={(value) =>
              handleNotificationChange("marketingEmails", value)
            }
            label="Marketing Emails"
            description="Receive promotional and marketing emails"
          />
          <div className="border-t border-gray-100"></div>
          <ToggleSwitch
            enabled={notifications.weeklyReports}
            onChange={(value) =>
              handleNotificationChange("weeklyReports", value)
            }
            label="Weekly Reports"
            description="Receive weekly activity summaries"
          />
          <div className="border-t border-gray-100"></div>
          <ToggleSwitch
            enabled={notifications.securityAlerts}
            onChange={(value) =>
              handleNotificationChange("securityAlerts", value)
            }
            label="Security Alerts"
            description="Receive alerts about security events"
          />
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Password & Security
        </h3>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl p-4 sm:p-6">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  className="w-full px-3 py-2 sm:py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  className="w-full px-3 py-2 sm:py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full px-3 py-2 sm:py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 sm:py-3 px-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm">
              Update Password
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Two-Factor Authentication
        </h3>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-medium text-gray-900">Enable 2FA</p>
              <p className="text-sm text-gray-500">
                Add an extra layer of security to your account
              </p>
            </div>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Theme & Display
        </h3>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl">
          <ToggleSwitch
            enabled={appearance.compactMode}
            onChange={(value) => handleAppearanceChange("compactMode", value)}
            label="Compact Mode"
            description="Use smaller spacing and compact layout"
          />
          <div className="border-t border-gray-100"></div>
          <ToggleSwitch
            enabled={appearance.showAvatars}
            onChange={(value) => handleAppearanceChange("showAvatars", value)}
            label="Show Avatars"
            description="Display user avatars throughout the interface"
          />
          <div className="border-t border-gray-100"></div>
          <ToggleSwitch
            enabled={appearance.sidebarCollapsed}
            onChange={(value) =>
              handleAppearanceChange("sidebarCollapsed", value)
            }
            label="Collapsed Sidebar"
            description="Start with sidebar collapsed by default"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Theme Selection
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            {
              id: "light",
              name: "Light",
              icon: Sun,
              gradient: "from-yellow-400 to-orange-400",
            },
            {
              id: "dark",
              name: "Dark",
              icon: Moon,
              gradient: "from-gray-600 to-gray-800",
            },
            {
              id: "auto",
              name: "Auto",
              icon: Globe,
              gradient: "from-purple-500 to-pink-500",
            },
          ].map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleAppearanceChange("theme", theme.id)}
              className={`p-3 sm:p-4 rounded-2xl border transition-all duration-300 ${
                appearance.theme === theme.id
                  ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg transform scale-105"
                  : "border-gray-200 bg-white/50 hover:bg-white/80 hover:border-purple-300"
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <div
                  className={`p-2 sm:p-3 bg-gradient-to-r ${theme.gradient} rounded-xl shadow-lg`}
                >
                  <theme.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {theme.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Privacy Controls
        </h3>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl">
          <ToggleSwitch
            enabled={true}
            onChange={() => {}}
            label="Profile Visibility"
            description="Make your profile visible to other users"
          />
          <div className="border-t border-gray-100"></div>
          <ToggleSwitch
            enabled={false}
            onChange={() => {}}
            label="Data Collection"
            description="Allow anonymous data collection for analytics"
          />
          <div className="border-t border-gray-100"></div>
          <ToggleSwitch
            enabled={true}
            onChange={() => {}}
            label="Activity Tracking"
            description="Track your activity for personalized experience"
          />
        </div>
      </div>
    </div>
  );

  const renderSystemSettings = () => (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          System Information
        </h3>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl p-4 sm:p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Version</span>
              <span className="text-sm font-medium text-gray-900">2.4.1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Last Updated</span>
              <span className="text-sm font-medium text-gray-900">
                March 15, 2024
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Storage Used</span>
              <span className="text-sm font-medium text-gray-900">
                2.3 GB of 10 GB
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Danger Zone
        </h3>
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-200 shadow-xl p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-red-800">Delete Account</h4>
              <p className="text-sm text-red-600 mb-3">
                Permanently delete your account and all associated data.
              </p>
              <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return renderProfileSettings();
      case "notifications":
        return renderNotificationSettings();
      case "security":
        return renderSecuritySettings();
      case "appearance":
        return renderAppearanceSettings();
      case "privacy":
        return renderPrivacySettings();
      case "system":
        return renderSystemSettings();
      default:
        return renderProfileSettings();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-2 sm:p-4 lg:p-6">
      
      <div className="mb-4 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        
        <div className="w-full lg:w-80">
          
          <div className="lg:hidden mb-4">
            <select
              className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>

          
          <div className="hidden lg:block bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50">
            <div className="p-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105"
                        : "text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-gray-800"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        activeTab === tab.id
                          ? "bg-white/20"
                          : `bg-gradient-to-r ${tab.gradient}/10`
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="font-medium">{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      
        <div className="flex-1">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-4 sm:p-6 lg:p-8">
            {renderTabContent()}

            
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-end">
              <button className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm">
                Cancel
              </button>
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm flex items-center justify-center space-x-2">
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
