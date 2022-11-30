import Navbar from "./Navbar";
import NFTTile from "./NFTTile";
import axios from "axios";
import PatientRecordJSON from "../PatientRecord.json";
import { useState } from "react";




export default function WelcomePage() {



    const sampleData = [
        {
            "name": "DOCTOR#1",
            "description": "View my Records",
            "website":"http://axieinfinity.io",
            "image":"https://gateway.pinata.cloud/ipfs/QmWHaj89ugvHYNfyG6f1fTuyq5zwwP6gZGhzYrt1YTSvgZ",
            "price":"0.03ETH",
            "currentlySelling":"True",
            "address":"0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
        },
        {
            "name": "PATIENT#1",
            "description": "View my Reports",
            "website":"http://axieinfinity.io",
            "image":"https://gateway.pinata.cloud/ipfs/QmcGAQs1w3tbFCyZLs2cGJxZCEVVpHUYke5Z6Hc4jh28gT",
            "price":"0.03ETH",
            "currentlySelling":"True",
            "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
        },
        {
            "name": "PATIENT#2",
            "description": "View my prescriptions",
            "website":"http://axieinfinity.io",
            "image":"https://gateway.pinata.cloud/ipfs/QmV754ptpVb3DXTigwvuHpFVJx9qGBmDccJPy5rbxUQkhs",
            "price":"0.03ETH",
            "currentlySelling":"True",
            "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
        },
    ];

const [data, updateData] = useState(sampleData);


async function getAllRecord() {

    //Fetch all the details of every NFT from the contract and display
    const response = await fetch(sampleData);
    const data = await response.json();
    console.log(data);
}
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col place-items-center mt-20">
                <div className="md:text-xl font-bold text-[#008753]">
                    PATIENTS AND DOCTORS DECENTRALIZED HEALTH PORTAL
                </div>
                <div className="flex mt-5 justify-between flex-wrap max-w-screen-xl text-[#404040] text-center">
                    {data.map((value, index) => {
                        return <NFTTile data={value} key={index}></NFTTile>;
                    })}
                </div>
            </div>            
        </div>
    );
    
    }
