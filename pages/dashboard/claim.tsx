import React from 'react'
import Layout from "../../components/DashboardLayout";

type Props = {}

export default function claim({}: Props) {
  return (
    <Layout>
        <div className="mx-10 my-10 flex flex-col">
            <span className='font-semibold text-xl'>Connect a Profile</span>
            <span className='text-md my-4'>You have to connect below services to get rewards</span>
        </div>
    </Layout>
  )
}