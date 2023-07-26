export const ChatMessage = () => {
  return (
    <div className="pb-3">
      <p className="text-red-700 text-2xl"></p>
      <p className="text-black text-2xl"></p>
    </div>
  );
};

export const ChatWindow = () => {
  return <></>;
};

export const ChatInputBox = () => {
  return (
    <div className="w-full h-10percent flex justify-center items-center bg-white rounded-l-2xl">
      <input className="w-85percent h-full bg-white text-2xl text-black focus:outline-none pl-1 border-2 border-black rounded-2xl" />
      <button className="w-15percent h-full text-center text-2xl text-black rounded-r-lg rounded-tr-lg rounded-l-full">
        보내기
      </button>
    </div>
  );
};
