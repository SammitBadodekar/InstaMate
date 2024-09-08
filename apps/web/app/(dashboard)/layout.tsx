import React from "react";
import Sidebar from "./sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
