import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

const DashboardLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        {children}
        {modal}
      </div>
    </div>
  );
};

export default DashboardLayout;
