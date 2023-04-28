import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import ABI from '../../utilities/abi.json';

async function getTransfers() {
    const contractAddress = '0xf5d0613B45Eb051A0b8e593ba75f6a60215FdC92';
    const provider = new ethers.providers.WebSocketProvider('wss://eth-goerli.g.alchemy.com/v2/9YaZvhzbpfnZdiYbHdKnfzXEfiCchGll');

    const contract = new ethers.Contract(contractAddress, ABI, provider);

    contract.on('Transfer', async (from, to, value, event) => {
        
        let transferEvent ={
            from: from,
            to: to,
            value: value,
            eventData: event,
        }
        console.log(JSON.stringify(transferEvent, null, 4))

        let tx = event["transactionHash"];
        let txinfo = await provider.getTransaction(tx);

        console.log(tx);
        console.log(txinfo);
    })
}

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    getTransfers();

    console.log(req.body)
    res.json({ status: 200, data: "OK" });

}