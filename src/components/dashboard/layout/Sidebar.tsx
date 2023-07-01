"use client";
import {
  ArrowTopRightOnSquareIcon,
  ChartBarIcon,
  HomeIcon,
  VideoCameraIcon,
} from "@heroicons/react/20/solid";
import { useWallet } from "@solana/wallet-adapter-react";
import Link from "next/link";
import { RefAttributes, useEffect, useState } from "react";

const Sidebar = () => {
  const { publicKey } = useWallet();

  const [nav, setNav] = useState([
    {
      icon: ChartBarIcon,
      label: "Analytics",
      href: "/dashboard/analytics",
      active: false,
    },
    {
      icon: VideoCameraIcon,
      label: "Content",
      href: "/dashboard/content",
      active: false,
    },
    {
      icon: ArrowTopRightOnSquareIcon,
      label: "Profile",
      href: `/${publicKey?.toString()}`,
      active: false,
      newPage: true,
    },
  ]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const updatedNav = nav.map((item) => {
      if (currentPath.startsWith(`${item.href}`)) {
        return { ...item, active: true };
      }
      return { ...item, active: false };
    });
    setNav(updatedNav);
  }, []);

  return (
    <div className="w-56 flex flex-col gap-y-3">
      {nav.map(({ label, icon: Icon, active, href, newPage }, key) => (
        <Link href={href} key={key} target={newPage ? "_blank" : undefined}>
          <button
            className={`${
              active
                ? "bg-white text-black"
                : "bg-[#111] text-white hover:bg-[#222]"
            } flex items-center w-full h-12 rounded transition-all border border-[#333]`}
            key={label}
          >
            <Icon className="ml-3.5 w-5 h-5" />
            <div className="ml-3 text-lg">{label}</div>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
