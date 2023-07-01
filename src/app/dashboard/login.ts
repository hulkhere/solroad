"use server";

import prisma from "@/utils/prisma";

const login = async (publicKey: string) => {
  const creatorExists = prisma.creator.findUnique({
    where: {
      wallet: publicKey,
    },
    select: {
      id: true,
    },
  });

  if(!creatorExists) {
    await prisma.creator.create({
        data: {
            
        }
    })
  }
};
