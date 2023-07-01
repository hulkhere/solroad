import Loader from "@/components/ui/Loader";

const Submit = ({
  save,
  isLoading,
}: {
  save: () => void;
  isLoading: boolean;
}) => {
  return (
    <button
      className="mt-5 w-full max-w-lg px-5 h-12 bg-white text-black rounded flex items-center justify-center"
      onClick={() => {
        !isLoading && save();
      }}
    >
      {isLoading ? <Loader className="w-5 h-5 text-black" /> : "Save"}
    </button>
  );
};

export default Submit;
