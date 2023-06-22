import React, { useState } from "react";
import { loginType } from "../type/type";
import { apiUrl } from "../service/authService";
import axios from "axios";

export default function LoginPage() {
  const [loginData, setLoginData] = useState<loginType>({ email: "", pwd: "" });
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);

  const data: loginType = {
    email: loginData.email,
    pwd: loginData.pwd,
  };
  const loginHandleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await axios
      .post(`${apiUrl}/login`, data)
      .then((res) => {
        alert("로그인을 성공하였습니다.");
      })
      .catch((error) => {
        alert("로그인을 실패하였습니다.");
      });
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex =
      /^[0-9a-zA-Z]([0-9a-zA-Z])+?@[0-9a-zA-Z]([0-9a-zA-Z])+?\.[a-zA-Z]{2,3}$/;
    setLoginData({ ...loginData, email: e.target.value });
    setEmailCheck(!regex.test(e.target.value));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    setLoginData({ ...loginData, pwd: e.target.value });
    setPasswordCheck(!regex.test(e.target.value));
  };

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
            className="w-full h-10percent border-black-200 rounded-xl text-3xl bg-white pl-4 mb-5"
            placeholder="아이디 예) Battle-Q@naver.com"
            autoComplete="off"
            value={loginData.email}
            onChange={handleChangeEmail}
          />
          {emailCheck && (
            <div className="w-full h-5percent flex justify-center mb-5 ">
              <p className="text-lg text-red-400">이메일 형식으로 입력하세요</p>
            </div>
          )}
          <input
            type="password"
            className="w-full h-10percent border-gray-200 rounded-xl bg-white mb-5 text-3xl pl-4"
            placeholder="비밀번호"
            autoComplete="off"
            value={loginData.pwd}
            onChange={handleChangePassword}
          />
          {passwordCheck && (
            <div className="w-5/6 h-5percent flex justify-center mb-7">
              <p className="text-lg text-red-400 pt-2">
                {" "}
                8 ~ 10자 영문, 숫자 조합으로 입력하세요
              </p>
            </div>
          )}
          <div className="w-4/5 h-8 flex justify-end">
            <a href="/regist" className="w-28 h-6 border-b-2 border-blue-500">
              <small className="text-blue-500">계정이 없으신가요?</small>
            </a>
          </div>
          <div className="w-full h-1/6 flex justify-center items-center">
            <button
              className="w-3/4 h-1/2 text-4xl font-semibold rounded-lg bg-violet-400 text-white"
              onClick={loginHandleSubmit}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
