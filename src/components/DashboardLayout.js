import React from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaUsers,
  FaFileAlt,
  FaBell,
  FaMoneyBill,
  FaClipboardList,
  FaEnvelope,
} from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm p-6 hidden md:block">
        <h2 className="text-xl font-bold text-purple-600 mb-6">KarateStudio</h2>
        <nav className="space-y-4 text-sm text-gray-700">
          <a href="#" className="flex items-center gap-2 hover:text-purple-600">
            <FaHome /> Home
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-purple-600">
            <FaClipboardList /> Programs
          </a>
          <a href="#" className="flex items-center gap-2 font-semibold text-purple-700">
            <FaCalendarAlt /> Events
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-purple-600">
            <FaUsers /> Memberships
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-purple-600">
            <FaFileAlt /> Documents
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-purple-600">
            <FaMoneyBill /> Payments
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-purple-600">
            <FaUsers /> People
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-purple-600">
            <FaBell /> Notifications
          </a>
        </nav>

        <div className="mt-10 pt-6 border-t text-xs text-gray-500">
          <p className="font-medium">Varun D</p>
          <p>varun.it22@bitsathy.ac.in</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
