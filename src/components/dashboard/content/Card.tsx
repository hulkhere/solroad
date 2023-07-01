const Card = ({
  title,
  description,
  fileKey,
}: {
  title: string;
  description: string;
  fileKey: string;
}) => {
  return (
    <button className="w-full border-2 rounded-lg border-[#111]">
      <div className="w-full h-40 object-cover overflow-hidden">
        <img src={`https://utfs.io/f/${fileKey}`} alt="" />
      </div>
      <div className="h-14 flex items-center justify-between px-5 w-full rounded bg-[#000]">
        <div className="truncate max-w-[15rem]">{title}</div>
      </div>
    </button>
  );
};

export default Card;
