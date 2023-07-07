import prisma from "@/utils/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

const getProfile = async (id: string) => {
  return await prisma.creator.findUnique({
    where: {
      wallet: id,
    },
    select: {
      products: {
        select: {
          id: true,
          title: true,
          description: true,
          fileKey: true,
          price: true,
          type: true,
        },
      },
    },
  });
};

const Profile = async ({ params: { id } }: { params: { id: string } }) => {
  const profile = await getProfile(id);
  console.log(profile);

  if (!profile) {
    notFound();
  }

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center">
        <div className="max-w-screen-xl w-full pt-10 h-10">
          <div className="w-full grid grid-cols-3 gap-x-5">
            {profile.products.map(
              (
                { title, description, fileKey, price, type, id: productId },
                key
              ) => (
                <Link href={`/${id}/${productId}`}>
                  <button className="w-full border-2 rounded-lg border-[#222] overflow-hidden">
                    <div className="relative w-full h-56 object-cover overflow-hidden">
                      <img
                        src={`https://utfs.io/f/${fileKey}`}
                        alt=""
                        className="blur-lg"
                      />
                    </div>
                    <div className="h-14 flex items-center justify-between px-5 w-full bg-[#000] border-t-2 border-[#222]">
                      <div className="truncate max-w-[15rem] text-xl">
                        {title}
                      </div>
                      <div className="text-xl">${price}</div>
                    </div>
                  </button>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
