import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const description = req.body.description;

  const rate = req.body.rate;

  const bookId = req.body.bookid;

  const userId = req.body.userid;

  try {
    await prisma.rating.create({
      data: {
        rate: rate,
        description: description,
        book_id: bookId,
        user_id: userId,
      },
    });

    return res.status(201);
  } catch (err) {
    console.log(err);
  }
}
