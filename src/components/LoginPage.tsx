import React from "react";

export default function LoginPage() {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center ">
      <div className="w-1/3 h-full flex-col">
        <div className="w-full h-1/6 mt-20">
          <p className="w-full h-full font-semibold text-6xl flex justify-center items-center">
            Battle-Q
          </p>
        </div>
        <div className="w-full h-4/6 flex flex-col items-center">
          <input
            type="email"
            className="w-full h-10percent border-black-200 rounded-xl text-3xl bg-white pl-4 mb-10"
            placeholder="아이디 예) Battle-Q@naver.com"
            autoComplete="off"
          />
          <input
            type="password"
            className="w-full h-10percent border-gray-200 rounded-xl bg-white mb-4 text-3xl pl-4"
            placeholder="비밀번호"
            autoComplete="off"
          />
          <div className="w-4/5 h-8 flex justify-end">
            <a href="/regist" className="w-28 h-6 border-b-2 border-blue-500">
              <small className="text-blue-500">계정이 없으신가요?</small>
            </a>
          </div>
          <div className="w-full h-1/6 flex justify-center items-center">
            <button className="w-3/4 h-1/2 text-4xl font-semibold rounded-lg bg-violet-400 text-white">
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
