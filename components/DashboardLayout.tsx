import React from 'react';
import Navbar from "./Navbar";
import Sidebar from './Sidebar';

export default function DashboardLayout({ className, children }: { className?: string, children: JSX.Element }) {
    return (
        <div className={(className || "") + "h-screen overflow-y-hidden"}>
            <Navbar />
            <div className="flex flex-nowrap flex-row gap-x-12 h-full">
                <div className="w-1/6">
                    <Sidebar />
                </div>
                <div className="grow">
                    {children}
                </div>
            </div>
        </div>
    );
};