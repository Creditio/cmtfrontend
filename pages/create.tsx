import React from "react";
import Link from "next/link";

type Props = {};

export default function create({}: Props) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center bg-gray-200 h-screen w-48 ">
        <span className="mt-8 hover:text-blue-600">Dashboard</span>
        <span className="mt-4 hover:text-blue-600">Campaign</span>
      </div>
      <div className="flex flex-col w-full">
      <div className="flex justify-between mt-8 mx-8">
        <span className="text-2xl font-bold">Create Campaign</span>
        <span className="text-2xl font-bold">Discord</span>
      </div>
      <div className="mt-8 mx-8 ">
        <span className="font-semibold">Campaign Name</span>
      </div>
      </div>
    </div>
  );
}
