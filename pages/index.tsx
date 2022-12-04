import React from "react";
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Button from "../components/Button";

type Props = {};

export default function index({ }: Props) {
  return (
    <div className="h-screen bg-white-900 ">
      <Navbar />
      <div className="flex items-center mx-10 my-20">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-purple-700">Unlocking possibilities in Web3 using verified claims.</h1>
          <p className="my-12 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
            nobis culpa. Consectetur, earum placeat, sunt fuga veniam deleniti
            magni quaerat quae incidunt libero consequuntur distinctio
            accusantium possimus quia sed facere.
          </p>
          <Link href="/dashboard"><Button text="Launch app 🚀" /></Link>
        </div>
        <img src="/main.png" className="w-1/2 rounded-xl" />
      </div>
    </div>
  );
}
