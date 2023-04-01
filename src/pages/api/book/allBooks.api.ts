import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const allBooks = await prisma.book.findMany({
      select: {
        id: true,
        name: true,
        author: true,
        cover_url: true,

        ratings: {
          select: {
            rate: true,
          },
          orderBy: {
            rate: "desc",
          },
          take: 1,
        },
      },
    });
    return res.status(200).json(allBooks);
  } catch (error) {
    console.log(error);
  }
}
