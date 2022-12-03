import React from "react";
import Button from "../../components/button";
import Layout from "../../components/DashboardLayout";

type Props = {};

export default function claim({}: Props) {
  return (
    <Layout>
      <div className="mb-40 flex flex-col">
        <div className="mx-10 my-6 flex flex-col">
          <span className="font-semibold text-xl">Connect a Profile</span>
          <span className="text-md my-4">
            You have to connect below services to get rewards
          </span>
          <div className="flex mx-10">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md mx-4">
              <div className="flex justify-end px-2 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/twitter.png"
                  alt="Twitter image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                  Twitter
                </h5>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Connect
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md mx-4">
              <div className="flex justify-end px-2 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/discord.png"
                  alt="Discord image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                  Discord
                </h5>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="text-md mx-10 my-4">
          You have to connect below services to get additional rewards
        </span>
        <div className="flex mx-10 my-4">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md mx-4">
            <div className="flex justify-end px-2 pt-4"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/worldcoin.png"
                alt="Twitter image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900">
                Worldcoin
              </h5>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md mx-4">
            <div className="flex justify-end px-2 pt-4"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/lens.jpeg"
                alt="Discord image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900">
                Lens Protocol
              </h5>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md mx-4">
            <div className="flex justify-end px-2 pt-4"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/ens.png"
                alt="Discord image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900">ENS</h5>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <Button text="Submit"/>
        </div>
      </div>
      
    </Layout>
  );
}
