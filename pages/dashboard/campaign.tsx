import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Link from "next/link";

type Props = {};

export default function campaign({}: Props) {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="justify-center flex flex-col mt-12 w-1/2">
        <img src="/campaign.png" />
        <span className="mt-4 font-bold text-2xl">
          Contributed user rewards
        </span>
        <div className="flex">
          <div className="flex flex-col w-1/2 my-4 mx-4">
            <span className="mt-4 font-semibold text-lg my-2">
              Campaign Details
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              laudantium atque, illo animi dolorum dignissimos vero voluptatum
              illum suscipit ullam officiis quos itaque minus optio veritatis,
              provident unde quibusdam voluptas?
            </span>
            <span className="mt-4 font-semibold text-lg my-2">
              Task Requirements
            </span>
            <ul className="bg-gray-200 p-4 mb-6">
              <li className="flex mx-2">
                <img className="h-6 w-6" src="/tick.png" />
                Follow @twitter
              </li>
              <li className="flex mx-2">
                <img className="h-6 w-6" src="/tick.png" />
                Like and Retweets @twitter
              </li>
              <li className="flex mx-2">
                <img className="h-6 w-6" src="/tick.png" />
                Join Discord
              </li>
              <li className="flex mx-2">
                <img className="h-6 w-6" src="/tick.png" />
                Verify on Supercoin
              </li>
            </ul>
            <Link href="/dashboard/claim">
            <Button text="Claim Rewards" />
            </Link>
          </div>
          <div className="flex flex-col my-4">
            <span className="mt-4 font-semibold text-lg my-2">Project</span>
            <div className="flex items-center">
              <img src="/logo.png" className="w-8 h-8 my-4"></img>
              <span className="mx-4 font-bold text-md">Eth India</span>
            </div>
            <span className="font-bold text-md my-4">Campaign Period</span>
            <span className="font-light text-gray-700">From:Thu,November 17,2022</span>
            <span className="font-light text-gray-700">End:Thu,December 17,2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}
