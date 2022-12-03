import React from "react";
import Button from "../../components/Button";
import Layout from "../../components/DashboardLayout";

type Props = {};

export default function create({ }: Props) {
  return (
    <Layout>
      <div className="flex mr-20">
        <div className="flex flex-col w-full">
          <div className="flex justify-between mt-8 mx-8">
            <span className="text-2xl font-bold">Create Campaign</span>
            <span className="text-2xl font-bold">Discord</span>
          </div>
          <form>
            <div className="mt-8 mx-8 flex flex-col">
              <span className="font-semibold">Campaign Name</span>
              <input
                type="text"
                className="my-2 rounded-lg h-10 border-rose-200 border-2"
                placeholder="Name"
              />
              <div className="flex justify-between my-2">
                <div className="">
                  <span className="font-semibold">Start Date: </span>
                  <input type="date"></input>
                </div>
                <div className="">
                  <span className="font-semibold">End Date: </span>
                  <input type="date"></input>
                </div>
              </div>
              <div className="mt-12 flex flex-col">
                <span className="font-semibold">Details:- </span>
                <textarea
                  rows={4}
                  className="border-rose-200 border-2 rounded-lg"
                />
              </div>
              <div className="my-6 flex flex-col ">
                <span className="font-semibold">Requirements for Claim:- </span>
                <div className="flex items-center my-4 justify-between">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-md font-medium text-gray-900 "
                    >
                      Follow Twitter
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-md font-medium text-gray-900 "
                    >
                      Join Discord
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-md font-medium text-gray-900 "
                    >
                      Share Tweets
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-md font-medium text-gray-900 "
                    >
                      WorldCoin KYC
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-md font-medium text-gray-900 "
                    >
                      Discord Activity
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-md font-medium text-gray-900 "
                    >
                      Enable Push Protocol
                    </label>
                  </div>
                </div>
                <div className="my-6 flex flex-col">
                  <span className="font-semibold mb-4">Filter users:- </span>
                  <select className="border-rose-300 border-2 rounded-lg items h-12">
                    <option selected>Active users within 30 days.</option>
                    <option>Active users within 60 days.</option>
                    <option>Active users within 120 days.</option>
                  </select>
                </div>
                <Button text="Launch Campaign" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
