import { toast } from "react-hot-toast";

const Type = ({
  type,
  setType,
}: {
  type: string;
  setType: (value: "IMAGE" | "VIDEO" | "PDF" | "LINK") => void;
}) => {
  const types = [
    { value: "IMAGE", label: "Image" },
    { value: "VIDEO", label: "Video" },
    { value: "PDF", label: "PDF" },
    { value: "LINK", label: "Link" },
  ];

  return (
    <div className="mt-4 bg-[#111] border border-[#333] rounded h-12 p-1.5 text-sm flex gap-x-2 w-full max-w-lg">
      {types.map((item) => (
        <button
          key={item.value}
          className={`h-full w-full rounded border border-[#444] ${
            type === item.value ? "bg-white text-black" : "bg-[#222] text-white"
          }`}
          onClick={
            () => toast("Coming S   oon")
            // setType(item.value as "IMAGE" | "VIDEO" | "PDF" | "LINK")
          }
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Type;
