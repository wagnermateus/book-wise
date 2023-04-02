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
    const mostPopularBooks = await prisma.book.findMany({
      select: {
        author: true,
        name: true,
        cover_url: true,
        id: true,

        ratings: {
          select: {
            rate: true,
          },
        },
      },
      orderBy: {
        ratings: {
          _count: "desc",
        },
      },
      take: 3,
    });

    return res.status(201).json(mostPopularBooks);
  } catch (error) {
    console.log(error);
  }
}
