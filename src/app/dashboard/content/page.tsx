import { cookies } from "next/headers";
import { upload } from "./create/upload";
import prisma from "@/utils/prisma";
import Card from "@/components/dashboard/content/Card";
import { PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const getContent = async () => {
  const publicKey = cookies().get("publicKey")!.value;
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
  console.log(content);

  return (
    <div>
      <div className="w-full flex justify-between">
        <div></div>
        <Link href="/dashboard/content/create">
          <button className="bg-white h-12 px-5 rounded text-black flex items-center font-bold">
            <PlusIcon className="w-5 h-5 mr-2" />
            Create
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {content.map((item, key) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
