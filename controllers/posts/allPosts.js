import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default async (req: Request, res: Response): Promise<void> => {
  const posts = await prisma.post.findMany();
  const test = "テスト文字列";

  res.render("posts/allPosts", { posts, test });
}