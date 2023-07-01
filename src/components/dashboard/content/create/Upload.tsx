import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { useDropzone } from "react-dropzone";
import type { FileWithPath } from "react-dropzone";

import { useCallback } from "react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import toast from "react-hot-toast";

const Upload = ({
  type,
  file,
  setFile,
}: {
  type: string;
  file?: File;
  setFile: (value: File) => void;
}) => {
  const onDrop = useCallback(async (acceptedFiles: FileWithPath[]) => {
    const file = acceptedFiles[0];

    if (file.size <= 4 * 1024 * 1024) {
      setFile(file);
      return;
    } else {
      toast.error("File over 4MB");
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(["image"]),
  });

  return (
    <div className="w-full max-w-lg mt-2">
      {!file ? (
        <button
          className="relative w-full h-48 bg-[#111] rounded-lg border border-[#333] flex flex-col items-center justify-center p-3"
          onClick={() => {}}
          {...getRootProps()}
        >
          <input
            type="file"
            className="bg-white w-full h-full"
            {...getInputProps()}
          />
          <ArrowUpOnSquareIcon className="w-8 h-8 text-slate-200" />
          <div className="text-sm mt-1.5 text-slate-200">Upload</div>
        </button>
      ) : (
        <div className="p-3 bg-[#111] rounded-lg border border-[#333] flex items-center justify-center">
          {type === "IMAGE" ? (
            <img
              src={URL.createObjectURL(file)}
              alt=""
              className="object-contain"
            />
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
};

export default Upload;
