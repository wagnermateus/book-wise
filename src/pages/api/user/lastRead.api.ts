import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth].api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  const session = await getServerSession(req, res, authOptions);
  const userId = session?.user.id;

  const lastRead = await prisma.user.findFirst({
    select: {
      ratings: {
        select: {
          book: {
            select: {
              name: true,
              author: true,
              cover_url: true,
              summary: true,
            },
          },
          rate: true,
          created_at: true,
        },
        orderBy: {
          created_at: "desc",
        },
        take: 1,
      },
    },
    where: {
      id: userId,
    },
  });
  return res.status(200).json(lastRead);
}
