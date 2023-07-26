import React from "react";

export default function ParticipationList() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-95percent"></div>
      <div className="w-full h-5percent flex justify-between items-center">
        <button className="bg-white rounded-full w-14 h-14 relative right-6 top-2 text-xl">
          ?
        </button>
        <p className="mr-5 text-2xl mb-1"></p>
      </div>
    </div>
  );
}
