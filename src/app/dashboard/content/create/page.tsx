"use client";

import Description from "@/components/dashboard/content/create/Description";
import Submit from "@/components/dashboard/content/create/Submit";
import Title from "@/components/dashboard/content/create/Title";
import Type from "@/components/dashboard/content/create/Type";
import Upload from "@/components/dashboard/content/create/Upload";
import { useUploadThing } from "@/utils/upload";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { upload } from "./upload";
import Price from "@/components/dashboard/content/create/Price";

const create = () => {
  const [title, setTitle] = useState<string>("Untitled Post");
  const [description, setDescription] = useState<string>();
  const [type, setType] = useState<"IMAGE" | "VIDEO" | "PDF" | "LINK">("IMAGE");
  const [price, setPrice] = useState<number>(1);
  const [file, setFile] = useState<File>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { publicKey } = useWallet();

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: async (res) => {
      await upload({
        publicKey: publicKey!.toString(),
        title,
        description: description!,
        type,
        fileKey: res![0].fileKey,
        price,
      });

      window.location.href = "/dashboard/content";
    },
    onUploadError: () => {
      toast.error("An error occured");
      setIsLoading(false);
    },
  });

  const save = async () => {
    if (!title) return toast.error("Enter a title");
    if (!description) return toast.error("Enter a description");
    if (!file) return toast.error("Upload a " + type);

    setIsLoading(true);
    await startUpload([file]);
  };

  return (
    <div className="flex flex-col">
      <Title title={title} setTitle={setTitle} />
      <Description description={description} setDescription={setDescription} />
      <Price price={price} setPrice={setPrice} />
      <Type type={type} setType={setType} />
      <Upload type={type} file={file} setFile={setFile} />
      <Submit save={save} isLoading={isLoading} />
    </div>
  );
};

export default create;
