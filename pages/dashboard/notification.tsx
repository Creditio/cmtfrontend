import React, { useEffect, useState } from 'react'
import Layout from "../../components/DashboardLayout";
import Button from "../../components/Button";
import * as PushAPI from "@pushprotocol/restapi";
import { useAccount, useSigner } from 'wagmi';

type Props = {}

export default function notification({ }: Props) {
  const [subject, setSubject] = useState('');
  const [media, setMedia] = useState('');
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const { address, isConnected } = useAccount();
  useEffect(() => {
    if (!isConnected) {
      setError('Please connect your wallet');
    } else {
      setError('');
    }
  }, [address, isConnected]);

  const { data: signer } = useSigner({
    onError(error) {
      alert(`Error in getting signer: ${error}`);
      console.log('Error', error);
    },
  });

  useEffect(() => {
    if (!address) return;
    (async () => {
      const channelData = await PushAPI.channels.getChannel({
        channel: `eip155:80001:${address}`,
        env: 'staging',
      });
      if (!channelData) {
        setError('Please create a channel first');
      }
    })();
  }, []);

  const sendNotification = async () => {
    if (message == '') {
      setError('Please enter a message');
      return;
    } else {
      setError('');
    }

    if (error != '') {
      alert("Please fix the errors before sending");
      return;
    }

    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 1, // to all
        identityType: 2, // direct payload
        notification: {
          title: subject,
          body: message,
        },
        payload: {
          title: subject,
          body: message,
          cta: link,
          img: media,
        },
        channel: `eip155:80001:${address}`,
        env: 'staging'
      });

      // apiResponse?.status === 204, if sent successfully!
      console.log('API repsonse: ', apiResponse);
      if (apiResponse?.status !== 204) alert("error in sending");
      else alert("Notification sent!");
    } catch (err) {
      console.error('Error: ', err);
    }

  };

  return (
    <Layout>
      <>
        {error && <div className="text-red-500">{error}</div>}
        <form className='flex flex-col'>
          <span className='font-semibold my-2'>Subject</span>
          <input type="text" value={subject} className='border-rose-200' onChange={(e) => setSubject(e.target.value)} />
          <span className='font-semibold my-2'>Media</span>
          <input type="text" value={media} className='border-rose-200' onChange={(e) => setMedia(e.target.value)} />
          <span className='font-semibold my-2'>CTA Link</span>
          <input type="text" value={link} className='border-rose-200' onChange={(e) => setLink(e.target.value)} />
          <span className='font-semibold my-2'>Notification Message</span>
          <input type="text" value={message} className='border-rose-200' onChange={(e) => setMessage(e.target.value)} />

          <Button text="Send Notification" onClick={sendNotification} />
        </form>
      </>
    </Layout>
  )
}