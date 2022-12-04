import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";
import { useRouter } from 'next/router';
import axios from "axios";
import QRCode from "react-qr-code";

const API_URL = "https://confimo-po261b08cfc3a580f8d7f6ab67c49c714312176127-authority.stackos.io";

type Props = {};

export default function claim({ }: Props) {
    const router = useRouter();
    const { slug } = router.query;
    const [username, setUsername] = useState('');

    const [data, setData] = useState<JSX.Element | undefined>(undefined);

    const issueClaim = async () => {
        if (username == '') {
            alert("Please enter a username");
            return;
        }

        // /api/polygonId/generateJWT -> username: Parshwa
        // /api/polygonId/createOffer -> Authorization: token
        // Create the above two POST requests with axios

        const reqJWT = await axios.post(`${API_URL}/api/polygonId/generateJWT`, { username });
        const jwtToken = reqJWT.data.data.url.split("token=")[1];
        const reqOffer = await axios.post(`${API_URL}/api/polygonId/createOffer`, {}, {
            headers: {
                "Authorization": `${jwtToken}`
            }
        });
        const offer = reqOffer.data;

        setData(
            <div>
                <div style={{ height: "auto", margin: "24px auto", maxWidth: 256, width: "100%" }}>
                    <QRCode
                        size={512}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={JSON.stringify(offer.data.qrcode)}
                        viewBox={`0 0 256 256`}
                    />
                </div>
                <div className="text-center">
                    <span className="font-bold">Reputation:</span> {offer.data.reputation.currentRep}
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center">
            <Navbar />

            <div className='p-16'>
                <span className="text-4xl font-light">Claim Reputation</span>
                <form className='flex mt-8 flex-col'>
                    <span className='font-semibold my-2'>Discord Username</span>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                        className="my-2 rounded-lg h-10 border-rose-200 border-2" />

                    <Button text="Issue Claim" onClick={issueClaim} className="self-center" />
                </form>

                {data}
            </div>
        </div>
    );
};