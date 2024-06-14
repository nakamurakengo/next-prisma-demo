"use server";

import prisma from "@/lib/prisma";

const createPost = async (data: { title: string }) => {
  const post = await prisma.post.create({
    data,
  });
  return post;
};

export default createPost;
