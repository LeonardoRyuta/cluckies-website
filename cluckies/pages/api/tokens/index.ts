import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../../lib/mongodb'

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  const db = await connectDb()
  switch (req.method) {
    case "GET":
      const allItems = await db.collection("Metadata").find({}).toArray();
      res.json(allItems);
      break;
  }
}