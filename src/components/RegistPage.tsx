import React from "react";

export default function RegistPage() {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center ">
      <div className="w-1/3 h-full flex-col">
        <div className="w-full h-1/6 mt-20">
          <p className="w-full h-full font-semibold text-6xl flex justify-center items-center">
            Battle-Q
          </p>
        </div>
        <div className="w-full h-4/6 flex flex-col items-center">
          <div className="w-5/6 h-10percent mb-12 flex">
            <input
              type="email"
              className="w-full h-full border-black-200 rounded-l-xl text-2xl bg-white pl-4"
              placeholder="&#128100; 아이디 (예:battleq@naver.com)"
              autoComplete="off"
            />
            <button className="w-1/6 h-full bg-white flex justify-center items-center rounded-r-xl">
              <img
                src="images/duplicateCheckFalse.png"
                alt="check"
                className="w-1/2 h-1/2"
              />
            </button>
          </div>
          <div className="w-5/6 h-10percent mb-5 flex">
            <input
              required
              type="password"
              className="w-full h-full border-black-200 rounded-l-xl text-2xl bg-white pl-4"
              placeholder="&#128274; 비밀번호"
              autoComplete="off"
            />
          </div>
          <div className="w-5/6 h-10percent mb-5 flex">
            <input
              type="text"
              className="w-full h-full border-black-200 rounded-l-xl text-2xl bg-white pl-4"
              placeholder="&#128587; 이름"
              autoComplete="off"
            />
          </div>
          <div className="w-5/6 h-10percent mb-12 flex">
            <input
              type="text"
              className="w-full h-full border-black-200 rounded-l-xl text-2xl bg-white pl-4 "
              placeholder="&#128055; 닉네임"
              autoComplete="off"
            />
            <button className="w-1/6 h-full bg-white flex justify-center items-center rounded-r-xl">
              <img
                src="images/duplicateCheckFalse.png"
                alt="check"
                className="w-1/2 h-1/2"
              />
            </button>
          </div>

          <div className="w-full h-1/6 flex justify-center items-center">
            <button className="w-3/4 h-1/2 text-4xl font-semibold rounded-lg bg-violet-400 text-white">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
