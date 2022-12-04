import React from "react";
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Button from "../components/Button";

type Props = {};

export default function index({ }: Props) {
  return (
    <div className="h-screen bg-white-900 overflow-y-hidden">
      <Navbar />
      <div className="flex items-center mx-10 my-20">
        <div className="flex flex-col items-center w-1/2">
          <h1 className="text-6xl text-purple-700">Decentralized, anonymous, secure and efficient credential  issuance protocol </h1>
          <p className="my-12 text-gray-600">
            Proof of community with ZK proof
          </p>
          <Link href="/dashboard"><Button text="Launch app 🚀" /></Link>
        </div>
        <div>
          <img src="/panda.png"/>
        </div>
      </div>
    </div>
  );
}
