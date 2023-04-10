import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const bookId = String(req.query.bookid);

  try {
    const book = await prisma.book.findUnique({
      select: {
        id: true,
        name: true,
        author: true,
        cover_url: true,
        total_pages: true,

        ratings: {
          select: {
            user: {
              select: {
                avatar_url: true,
                name: true,
                id: true,
              },
            },
            created_at: true,
            description: true,
            rate: true,
          },
        },
        _count: {
          select: {
            ratings: true,
          },
        },
        categories: {
          select: {
            category: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      where: {
        id: bookId,
      },
    });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
  }
}
