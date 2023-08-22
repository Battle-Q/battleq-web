import React, { useState, useEffect } from "react";
import { LoginType } from "../type/type";
import { apiUrl } from "../service/authService";
import axios from "axios";

export default function LoginPage() {
  const [loginData, setLoginData] = useState<LoginType>({
    email: "",
    password: "",
  });
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const data: LoginType = {
    email: loginData.email,
    password: loginData.password,
  };

  useEffect(() => {
    disabledButton();
  }, [emailCheck, passwordCheck]);

  const disabledButton = () => {
    if (!emailCheck && !passwordCheck) {
      return setDisabled(false);
    }

    return setDisabled(true);
  };

  const isLoginEmpty = () => {
    return loginData.email.length === 0 || loginData.password.length === 0;
  };

  const loginHandleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isLoginEmpty()) {
      return alert("입력한 정보를 확인해주세요.");
    }

    await axios
      .post(`${apiUrl}/auth/login`, data)
      .then((res) => {
        alert("로그인을 성공하였습니다.");
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("email", data.email);
        window.location.replace("/");
      })
      .catch((error) => {
        alert("로그인을 실패하였습니다.");
      });
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+([-_.]?[0-9a-zA-Z.!#$%&])+?@[0-9a-zA-Z]([0-9a-zA-Z])+?\.[a-zA-Z]{2,3}$/;
    setLoginData({ ...loginData, email: e.target.value });
    setEmailCheck(!regex.test(e.target.value));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/;
    setLoginData({ ...loginData, password: e.target.value });
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
            value={loginData.password}
            onChange={handleChangePassword}
          />
          {passwordCheck && (
            <div className="w-5/6 h-5percent flex justify-center mb-7">
              <p className="text-lg text-red-400 pt-2">
                {" "}
                영문, 숫자, 특수문자 조합으로 8~12자 입력하세요
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
              disabled={disabled}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
