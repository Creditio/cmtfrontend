import React from 'react';
import Card from "../../components/card";
import Layout from "../../components/DashboardLayout";

type Props = {}

export default function dashboard({ }: Props) {
  return (
    <Layout>
      <div className="flex flex-col mx-10">
          <div className="flex justify-between">
            <span className="text-4xl font-light mx-6 my-6">Dashboard</span>
            <span className="text-4xl font-light mx-6 my-6">Wallet ID</span>
          </div>
          <div className="my-10 grid grid-cols-3 gap-4">
            <Card/>
            <Card/>
            <Card/> 
            <Card/> 
          </div>
        </div>
    </Layout>
  )
}