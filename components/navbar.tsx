import React from "react";
import Link from "next/link";
import Button2 from "../components/button2";

type Props = {};

const Navbar = ({}: Props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-purple-500 to-pink-500 p-3 w-full">
      <div className="inline-flex items-center p-2 mr-4 ">
        <img src="/logo.png" className="h-16 w-16 mr-8" />
        <span className="text-2xl text-white font-bold uppercase tracking-[0.5em]">
          Fidessio
        </span>
      </div>
      <div className="inline-flex items-center justify-self-end pr-2 mr-4">
        <Button2 text='Connect Wallet'/>
        
      </div>
    </nav>
  );
};

export default Navbar;
