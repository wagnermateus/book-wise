import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const userId = String(req.query.id);
  try {
    const userData = await prisma.user.findUnique({
      select: {
        id: true,
        name: true,
        avatar_url: true,
        created_at: true,
      },
      where: {
        id: userId,
      },
    });

    const userRatings = await prisma.user.findMany({
      select: {
        ratings: {
          select: {
            book: {
              select: {
                name: true,
                author: true,
                cover_url: true,
                id: true,
                total_pages: true,
              },
            },
            created_at: true,
            id: true,
            rate: true,
            description: true,
          },
        },
      },
      where: {
        id: userId,
      },
    });

    return res.status(200).json({ userData, userRatings });
  } catch (error) {
    console.log(error);
  }
}
