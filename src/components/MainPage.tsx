import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function MainPage() {
  const [pin, setPin] = useState<string>("");
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleChangePin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]{0,6}$/;
    if (regex.test(e.target.value)) {
      setPin(e.target.value);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col bg-gray-100">
      <div className="w-50percent h-70percent flex flex-col justify-end items-center pb-24">
        <img className="w-full h-full" src="images/bqLogo.png" alt="" />
      </div>
      <div className="w-30percent h-20percent flex flex-col justify-start items-center">
        <div className="w-45percent h-20percent flex justify-center items-end">
          <input
            type="text"
            className="w-96 h-20 rounded-2xl text-center text-2xl font-extrabold"
            placeholder="Game PIN"
            onChange={handleChangePin}
            maxLength={6}
          />
        </div>

        {pin.length === 6 && (
          <button className="mt-3 text-center text-white w-36 h-20 bg-gradient-to-r from-indigo-600 rounded-full font-medium text-2xl">
            입장
          </button>
        )}
        {!email && (
          <div className="w-45percent h-10percent mt-4 flex justify-center items-start">
            <button
              className="w-12 h-8 text-black cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <span className="text-black"> | </span>
            <button
              className="text-black w-12 h-8 cursor-pointer"
              onClick={() => navigate("/regist")}
            >
              Regist
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
