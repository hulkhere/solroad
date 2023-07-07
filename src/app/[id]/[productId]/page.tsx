import Purchase from "@/components/profile/product/Purchase";
import Wallet from "@/components/wallet";
import { candypay } from "@/utils/candypay";
import prisma from "@/utils/prisma";
import { notFound } from "next/navigation";

const getProduct = async (id: string, productId: string) => {
  return await prisma.product.findFirst({
    where: {
      creator: {
        wallet: id,
      },
      id: productId,
    },
    select: {
      title: true,
      fileKey: true,
      price: true,
      type: true,
      description: true,
    },
  });
};

const Product = async ({
  params: { id, productId },
}: {
  params: { id: string; productId: string };
}) => {
  const product = await getProduct(id, productId);

  if (!product) {
    notFound();
  }

  async function createCheckout(publicKey: string) {
    "use server";

    const user = await prisma.user.findUnique({
      where: {
        wallet: publicKey,
      },
      select: {
        id: true,
      },
    });

    if (!user) {
      await prisma.user.create({
        data: {
          wallet: publicKey,
        },
      });
    }

    const { payment_url } = await candypay.session.create({
      success_url: `/${id}/${productId}`,
      cancel_url: `/${id}/${productId}`,
      tokens: ["usdt"],
      items: [
        {
          name: product!.title,
          quantity: 1,
          price: product!.price,
          image: `https://utfs.io/f/${product!.fileKey}`,
        },
      ],
    });

    return payment_url;
  }

  return (
    <div className="w-full h-full flex justify-center pt-10">
      <div className="w-full max-w-screen-xl ">
        <div className="h-[30rem] w-full overflow-hidden border-2 border-[#222] rounded-lg">
          <img
            src={`https://utfs.io/f/${product.fileKey}`}
            alt=""
            className="object-cover w-full object-center blur-2xl"
          />
        </div>
        <div className="w-full flex justify-between px-3 pt-3">
          <div>
            <div className="text-5xl font-bold max-w-xl">{product.title}</div>
            <div className="mt-3 text-gray-300 max-w-xl text-xl">
              {product.description}
            </div>
          </div>
          <div>
            <Purchase price={product.price} initiateCheckout={createCheckout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
