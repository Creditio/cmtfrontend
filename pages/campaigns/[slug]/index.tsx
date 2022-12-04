import React from "react";
import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

export default function campaign({}: Props) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="justify-center flex flex-col mt-12 w-1/2">
        <img src="/campaign.png" />
        <span className="mt-4 font-bold text-2xl">
          ETH India referral rewards
        </span>
        <div className="flex">
          <div className="flex flex-col w-1/2 my-4 mx-4">
            <span className="mt-4 font-semibold text-lg my-2">
              About ETH India
            </span>
            <span>
              ETHIndia is a hackathon — a movement with the goal of inspiring
              and fostering a community of builders promoting technological
              advancements for Ethereum. Its a place where the leading minds in
              the Ethereum ecosystem are uniting with 1500+ builders from around
              the globe to build decentralized applications for the future. And
              we invite you to be one of them.
            </span>
            <span className="mt-4 font-semibold text-lg my-2">
              Task Requirements
            </span>
            <ul className="bg-gray-200 p-4 mb-6">
              <li className="flex mx-2 my-2">
                <img className="h-6 w-6 mr-2" src="/tick.png" />
                Follow @twitter
              </li>
              <li className="flex mx-2 my-2">
                <img className="h-6 w-6 mr-2" src="/tick.png" />
                Like and Retweets @twitter
              </li>
              <li className="flex mx-2 my-2">
                <img className="h-6 w-6 mr-2" src="/tick.png" />
                Join Discord
              </li>
              <li className="flex mx-2 my-2">
                <img className="h-6 w-6 mr-2" src="/tick.png" />
                Verify on Supercoin
              </li>
            </ul>
            <Link href={`/campaigns/${slug}/claim`}>
              <Button text="Claim Rewards" />
            </Link>
          </div>
          <div className="flex flex-col my-4">
            <span className="mt-4 font-semibold text-lg my-2">Project</span>
            <div className="flex items-center">
              <img src="/logo.png" className="w-8 h-8 my-4"></img>
              <span className="mx-4 font-bold text-lg">Eth India</span>
            </div>
            <span className="font-bold text-md my-4">Campaign Period</span>
            <span className="font-light text-gray-700 my-1">
              From:Thu,November 17,2022
            </span>
            <span className="font-light text-gray-700 my-1">
              End:Thu,December 17,2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
