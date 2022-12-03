import React from 'react';
import Navbar from "./Navbar";
import Sidebar from './Sidebar';

export default function DashboardLayout({ className, children }: { className?: string, children: JSX.Element }) {
    return (
        <div className={className}>
            <Navbar />
            <div className="flex flex-nowrap flex-row">
                <div className="w-1/6 p-6 bg-slate-300">
                    <Sidebar />
                </div>
                <div className="flex-grow">
                    {children}
                </div>
            </div>
        </div>
    );
};