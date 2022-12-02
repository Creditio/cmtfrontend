import React from "react";
import Navbar from "../components/navbar";
import Button from "../components/button"

type Props = {};

export default function index({}: Props) {
  return (
    <div className="h-screen bg-white-900 ">
      <Navbar />
      <div className="flex items-center mx-16 my-16">
      <div className="flex flex-col items-center ">
          <span className="ml-16 text-2xl text-purple-500 font-bold  uppercase tracking-wide leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
            nobis culpa. Consectetur, earum placeat, sunt fuga veniam deleniti
            magni quaerat quae incidunt libero consequuntur distinctio
            accusantium possimus quia sed facere.
          </span>
          <Button text="Launch App"/>
        </div>
        <img src="/main.png" className="w-1/2 rounded-xl" />
      </div>
    </div>
  );
}
