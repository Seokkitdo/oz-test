// src/pages/api/contentsData.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { apis } from "./protoSportsToto/\bprotoService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const params = req.query.params as string; // 쿼리 파라미터로부터 params를 얻음
    const response = await apis.getContentsDatas(params);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
}
