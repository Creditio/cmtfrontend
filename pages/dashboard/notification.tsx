import React from 'react'
import Layout from "../../components/DashboardLayout";
import Button from "../../components/button";

type Props = {}

export default function notification({}: Props) {
  return (
    <Layout>
        <form className='flex flex-col'>
        <span className='font-semibold my-2'>Subject</span>
        <input type="text" className='border-rose-200'/>
        <span className='font-semibold my-2'>Media</span>
        <input type="text" className='border-rose-200'/>

        <span className='font-semibold my-2'>CTA Link</span>
        <input type="text" className='border-rose-200'/>

        <span className='font-semibold my-2'>Notification Message</span>
        <input type="text" className='border-rose-200'/>

        <Button text="Send Notification"/>
        </form>
    </Layout>
  )
}