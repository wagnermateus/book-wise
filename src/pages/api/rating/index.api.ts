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
    const rating = await prisma.rating.findMany({
      select: {
        user: {
          select: {
            avatar_url: true,
            name: true,
          },
        },
        book: {
          select: {
            author: true,
            cover_url: true,
            name: true,
            summary: true,
          },
        },
        rate: true,
        description: true,
        created_at: true,
      },
      orderBy: {
        created_at: "desc",
      },
      take: 3,
    });

    return res.status(200).json(rating);
  } catch (err) {
    console.log(err);
  }
}
