import React from "react";

const Sidebar = () => {
    return <div className="border-r-4  h-full p-16">
        <ul className="list-none">
            <li className="text-blue-700 text-lg mb-16">Dashboard</li>
            <li className="text-gray-500 text-lg mb-16">Campaign</li>
            <li className="text-gray-500 text-lg">Notification</li>
        </ul>
    </div>;
}

export default Sidebar;