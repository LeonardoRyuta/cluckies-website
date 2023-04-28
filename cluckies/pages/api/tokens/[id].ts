import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../../lib/mongodb'

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    const db = await connectDb();
    const { id } = req.query;

    const tokenId = await db.collection("Metadata").find({ tokenId: parseInt(id) }).toArray();
    const tokenData = tokenId[0];

    if (tokenData!=null) {
        switch (req.method) {
            case "GET":
                res.json(tokenData);
                break;
        }
    }
    else {
        res.json({ status: 404, data: "Token doesn't exists" });
    }
}