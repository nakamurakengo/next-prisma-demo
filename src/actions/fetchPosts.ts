"use server";

import prisma from "@/lib/prisma";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchPosts = async () => {
  await delay(1000);
  const posts = await prisma.post.findMany();
  return posts;
};

export default fetchPosts;
