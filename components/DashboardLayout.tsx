import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({
  className,
  children,
}: {
  className?: string;
  children: JSX.Element;
}) {
  return (
    <div className={(className || "") + "h-screen overflow-y-hidden"}>
      <Navbar />
      <div className="flex flex-nowrap flex-row h-full">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="grow overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
}
