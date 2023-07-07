"use client";

const Dashboard = ({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-16 border-[#222] border-b-2 grid grid-cols-3 items-center px-5">
        <div className="text-xl font-bold">SOLROAD</div>
        <div className="flex items-center justify-center ">
          <div className="max-w-[15rem] truncate">
            {id.slice(0, 8)}...{id.slice(-8)}
          </div>
        </div>
        <div></div>
      </div>
      {children}
    </div>
  );
};

export default Dashboard;
