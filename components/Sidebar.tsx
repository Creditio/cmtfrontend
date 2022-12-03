import React from "react";
import Link from "next/link";

const Sidebar = () => {
    return <div className="border-r-4  h-full p-16">
        <ul className="list-none">
            <Link href="/dashboard">
            <li className="text-gray-500 hover:text-blue-700 text-lg mb-16">Dashboard</li>
            </Link>
            <Link href="/dashboard/campaign">
            <li className="text-gray-500 hover:text-blue-700 text-lg mb-16">Campaign</li>
            </Link>
            <Link href="/dashboard/notification">
            <li className="text-gray-500 hover:text-blue-700 text-lg">Notification</li>
            </Link>
        </ul>
    </div>;
}

export default Sidebar;