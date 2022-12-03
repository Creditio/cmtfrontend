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
      console.log(channelData);
      if (!channelData) {
        setError('Channel doesn\'t exist');
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
        <form className='flex flex-col p-16'>
          <span className='font-semibold my-2'>Subject</span>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)}
            className="my-2 rounded-lg h-10 border-rose-200 border-2" />
          <span className='font-semibold my-2'>Media</span>
          <input type="text" value={media} onChange={(e) => setMedia(e.target.value)}
            className="my-2 rounded-lg h-10 border-rose-200 border-2" />
          <span className='font-semibold my-2'>CTA Link</span>
          <input type="text" value={link} onChange={(e) => setLink(e.target.value)}
            className="my-2 rounded-lg h-10 border-rose-200 border-2" />
          <span className='font-semibold my-2'>Notification Message</span>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}
            className="my-2 rounded-lg h-10 border-rose-200 border-2" />

          <Button text="Send Notification" onClick={sendNotification} />
        </form>
      </>
    </Layout>
  )
}