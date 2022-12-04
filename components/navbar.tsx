import Link from "next/link";
import React from "react";
import ButtonConnect from "./ButtonConnect";

type Props = {};

const Navbar = ({}: Props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-3 w-full border-b-4">
      <Link href="/">
        <div className="inline-flex items-center p-2 mr-4 ">
          <img src="/Confimo_logo_wide.png" className="w-48 mr-8" />
        </div>
      </Link>
      <div className="inline-flex items-center justify-self-end pr-2 mr-4">
        <ButtonConnect text="Connect Wallet" />
      </div>
    </nav>
  );
};

export default Navbar;
