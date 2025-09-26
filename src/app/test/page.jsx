import React from "react";

export default function page() {
  return (
    <div className="min-h-screen">
      <div className="border-gray-700 relative flex p-3 border-2">
        <div className="w-[200px] h-[200px] bg-red-400 z-10"></div>
       <div className="w-[200px] h-[200px] bg-green-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"></div>
        <div className="w-[200px] h-[200px] bg-cyan-300"></div>
      </div>
    </div>
  );
}
