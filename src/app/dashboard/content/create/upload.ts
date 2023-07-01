"use server";

import prisma from "@/utils/prisma";

export const upload = async ({
  publicKey,
  title,
  description,
  type,
  fileKey,
}: {
  publicKey: string;
  title: string;
  description: string;
  type: "IMAGE" | "VIDEO" | "PDF" | "LINK";
  fileKey: string;
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
    },
  });
};
