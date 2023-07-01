"use client";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      {children}
    </div>
  );
};

export default Dashboard;
