"use server";

import prisma from "@/utils/prisma";

export const login = async (publicKey: string) => {
  const creatorExists = await prisma.creator.findUnique({
    where: {
      wallet: publicKey,
    },
    select: {
      id: true,
    },
  });

  if (!creatorExists) {
    await prisma.creator.create({
      data: {
        username: "beta",
        wallet: publicKey,
      },
    });
  }
};
