import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../../lib/mongodb'
import fetch from 'node-fetch';

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    const db = await connectDb();
    const { id }:any = req.query;

    const tokenId = await db.collection("Metadata").find({ tokenId: parseInt(id) }).toArray();
    const tokenData = tokenId[0].image;

    const response = await fetch(tokenData);

    if (!response.ok) {
      return res.status(response.status).end();
    }

    const imageBuffer = await response.buffer();
    const contentType = response.headers.get('content-type') as string;

    if (tokenData!=null) {
        switch (req.method) {
            case "GET":
                res.setHeader('Content-Type', contentType);
                res.send(imageBuffer);
                break;
        }
    }
    else {
        res.json({ status: 404, data: "Token doesn't exists" });
    }
}