"use server";

import prisma from "@/utils/prisma";

export const upload = async ({
  publicKey,
  title,
  description,
  type,
  fileKey,
  price,
}: {
  publicKey: string;
  title: string;
  description: string;
  type: "IMAGE" | "VIDEO" | "PDF" | "LINK";
  fileKey: string;
  price: number;
}) => {
  await prisma.product.create({
    data: {
      title,
      description,
      type,
      fileKey,
      creator: {
        connect: {
          wallet: publicKey,
        },
      },
      price,
    },
  });
};
