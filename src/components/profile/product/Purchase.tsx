"use client";

import Loader from "@/components/ui/Loader";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";

const Purchase = ({
  price,
  initiateCheckout,
}: {
  price: number;
  initiateCheckout: (value: string) => Promise<string>;
}) => {
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const [intent, setIntent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    (async () => {
      if (publicKey && intent) {
        setIsLoading(true);
        const url = await initiateCheckout(publicKey.toString());
        window.location.href = url;
      }
    })();
  }, [publicKey, intent]);

  return (
    <button
      onClick={async () => {
        setVisible(true);
        setIntent(true);
      }}
      className="mt-2 px-8 min-w-[12rem] bg-white h-12 flex text-black items-center justify-center rounded"
    >
      {!isLoading ? (
        <div className="text-lg font-semibold">${price} - Purchase</div>
      ) : (
        <Loader className="w-5 h-5" />
      )}
    </button>
  );
};

export default Purchase;
