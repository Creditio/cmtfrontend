import React from "react";
import Card from "../components/card";
import Navbar from "../components/navbar";

type Props = {};

export default function dashboard({}: Props) {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="flex flex-col items-center bg-gray-200 h-screen w-48 ">
          <span className="mt-8 hover:text-blue-600">Dashboard</span>
          <span className="mt-4 hover:text-blue-600">Campaign</span>
        </div>
        <div className="flex flex-col w-full mx-10 my-10">
          <div className="flex justify-between">
            <span className="text-4xl font-light mx-6 my-6">Dashboard</span>
            <span className="text-4xl font-light mx-6 my-6">Wallet ID</span>
          </div>
          <div className="my-10 grid grid-cols-3 gap-4">
            <Card/>
            <Card/>
            <Card/> 
            <Card/> 
          </div>
        </div>
      </div>
    </div>
  );
}
