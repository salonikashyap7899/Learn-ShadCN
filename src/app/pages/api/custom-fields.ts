import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    jobs: ["Position", "Department", "Start Date"],
    inventory: ["SKU", "Quantity", "Location"],
    customers: ["Company Name", "Contact Email", "Status"],
  });
}
              