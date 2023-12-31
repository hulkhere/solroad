import { cookies } from "next/headers";
import { upload } from "./create/upload";
import prisma from "@/utils/prisma";
import Card from "@/components/dashboard/content/Card";
import { PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const getContent = async () => {
  const publicKey = cookies().get("publicKey")?.value;
  return await prisma.product.findMany({
    where: {
      creator: {
        wallet: publicKey,
      },
    },
    select: {
      title: true,
      description: true,
      fileKey: true,
    },
  });
};

const Content = async () => {
  const content = await getContent();

  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <div className="text-5xl">CONTENT</div>
        <Link href="/dashboard/content/create">
          <button className="bg-white h-12 px-5 rounded text-black flex items-center font-bold">
            <PlusIcon className="w-5 h-5 mr-2" />
            Create
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-8">
        {content.map(
          (
            {
              title,
              description,
              fileKey,
            }: {
              title: string;
              description: string;
              fileKey: string;
            },
            key: number
          ) => (
            <Card
              title={title}
              description={description}
              fileKey={fileKey}
              key={key}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Content;
