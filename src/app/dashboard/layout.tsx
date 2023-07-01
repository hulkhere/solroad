"use client";
import React, { useEffect } from "react";
import ConnectWallet from "@/components/dashboard/ConnectWallet";
import Header from "@/components/dashboard/layout/Header";
import Sidebar from "@/components/dashboard/layout/Sidebar";
import { Provider } from "@/components/wallet/Provider";
import { useWallet } from "@solana/wallet-adapter-react";
import { UploadButton } from "@uploadthing/react";
import { cookies } from "next/headers";
import { setCookie } from "cookies-next";

type DashboardProps = {
  children: React.ReactNode;
};

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      setCookie("publicKey", publicKey.toString());
    }
  }, [publicKey]);

  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      {!publicKey ? (
        <ConnectWallet />
      ) : (
        <div className="w-full flex-grow flex justify-center pt-10 gap-x-12">
          <Sidebar />
          <div className="w-full max-w-screen-lg">
            {React.Children.map(children, (child) =>
              React.isValidElement(child)
                ? React.cloneElement(child, {
                    publicKey: publicKey.toString(),
                  } as React.Attributes)
                : child
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
