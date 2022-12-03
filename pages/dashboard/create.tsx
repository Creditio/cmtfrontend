import React from "react";
import Button from "../../components/Button";
import Layout from "../../components/DashboardLayout";

type Props = {};

export default function create({ }: Props) {
  return (
    <Layout>
      <div className="p-16">
        <span className="text-4xl mb-12 font-light">Create Campaign</span>
        <form>
          <div className="mt-8 flex flex-col">
            <div className="my-2 flex flex-col">
              <span className="font-semibold">Campaign Name</span>
              <input
                type="text"
                className="my-2 rounded-lg h-10 border-rose-200 border-2"
                placeholder="Name"
              />
            </div>

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

            <div className="my-2 flex flex-col">
              <span className="font-semibold">Details:</span>
              <textarea
                rows={4}
                className="border-rose-200 border-2 rounded-lg"
              />
            </div>

            <div className="my-2 flex flex-col">
              <span className="font-semibold">Requirements for Claim:</span>
              <div className="flex items-center mt-1 justify-between">
                <div className="flex items-center">
                  <input
                    id="follow-twitter-check"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="follow-twitter-check"
                    className="ml-2 text-md font-medium text-gray-900 "
                  >
                    Follow Twitter
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="join-discord-check"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="join-discord-check"
                    className="ml-2 text-md font-medium text-gray-900 "
                  >
                    Join Discord
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="share-tweet-chexk"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="share-tweet-chexk"
                    className="ml-2 text-md font-medium text-gray-900 "
                  >
                    Share Tweets
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="worldcoin-check"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="worldcoin-check"
                    className="ml-2 text-md font-medium text-gray-900 "
                  >
                    WorldCoin KYC
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="discord-activity-check"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="discord-activity-check"
                    className="ml-2 text-md font-medium text-gray-900"
                  >
                    Discord Activity
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="push-check"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="push-check"
                    className="ml-2 text-md font-medium text-gray-900"
                  >
                    Enable Push Protocol
                  </label>
                </div>
              </div>
            </div>
            <div className="my-2 flex flex-col">
              <span className="font-semibold mb-4">Filter users:</span>
              <select className="border-rose-300 border-2 rounded-lg items h-12">
                <option selected>Active users within 30 days</option>
                <option>Active users within 60 days</option>
                <option>Active users within 120 days</option>
              </select>
            </div>
            <Button text="Launch Campaign" />
          </div>
        </form>
      </div >
    </Layout >
  );
}
