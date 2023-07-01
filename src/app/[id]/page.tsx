import prisma from "@/utils/prisma";
import { notFound } from "next/navigation";

const getProfile = async (id: string) => {
  return await prisma.creator.findUnique({
    where: {
      wallet: id,
    },
    select: {
      products: {
        select: {
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
      <div className="w-full h-16 border-[#222] border-b-2 grid grid-cols-3 items-center px-5">
        <div className="text-xl font-bold">SOLROAD</div>
        <div className="flex items-center justify-center ">
          <div className="max-w-[15rem] truncate">
            {id.slice(0, 8)}...{id.slice(-8)}
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-screen-xl w-full pt-10 h-10">
          <div className="w-full grid grid-cols-3 gap-x-5">
            {profile.products.map(
              ({ title, description, fileKey, price, type }, key) => (
                <button className="w-full border-2 rounded-lg border-[#111]">
                  <div className="relative w-full h-56 object-cover overflow-hidden">
                    <img
                      src={`https://utfs.io/f/${fileKey}`}
                      alt=""
                      className="blur-lg"
                    />
                    <div ></div>
                  </div>
                  <div className="h-14 flex items-center justify-between px-5 w-full rounded bg-[#000]">
                    <div className="truncate max-w-[15rem] text-xl">
                      {title}
                    </div>
                    <div className="text-xl">${price}</div>
                  </div>
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
