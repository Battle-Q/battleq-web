import React, { useState } from "react";
import { registType } from "../type/type";
import { apiUrl } from "../service/authService";
import axios from "axios";
export default function RegistPage() {
  const [registData, setRegistData] = useState<registType>({
    email: "",
    pwd: "",
    nickname: "",
    userName: "",
    authority: "ROLE_ADMIN",
    userInfo: "테스트 유저입니다.",
  });

  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);

  const data: registType = {
    email: registData.email,
    pwd: registData.pwd,
    nickname: registData.nickname,
    userName: registData.userName,
    authority: registData.authority,
    userInfo: registData.userInfo,
  };

  const registHandleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      registData.email.length > 0 &&
      registData.pwd.length > 0 &&
      registData.nickname.length > 0 &&
      registData.userName.length > 0
    )
      return await axios
        .post(`${apiUrl}`, data)
        .then((res) => {
          alert("회원가입을 성공하였습니다.");
        })

        .catch((error) => {
          alert("회원가입을 실패하였습니다.");
        });
    if (
      registData.email.length === 0 ||
      registData.pwd.length === 0 ||
      registData.nickname.length === 0 ||
      registData.userName.length === 0
    )
      return alert("입력한 정보를 확인해주세요.");
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex =
      /^[0-9a-zA-Z]([0-9a-zA-Z])+?@[0-9a-zA-Z]([0-9a-zA-Z])+?\.[a-zA-Z]{2,3}$/;
    setRegistData({ ...registData, email: e.target.value });
    setEmailCheck(!regex.test(e.target.value));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    setRegistData({ ...registData, pwd: e.target.value });
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
          <div className="w-5/6 h-10percent flex">
            <input
              type="email"
              className="w-full h-full border-black-200 rounded-l-xl text-2xl bg-white pl-4"
              placeholder="&#128100; 아이디 (예:battleq@naver.com)"
              autoComplete="off"
              value={registData.email}
              onChange={handleChangeEmail}
            />

            <button className="w-1/6 h-full bg-white flex justify-center items-center rounded-r-xl">
              <img
                src="images/duplicateCheckFalse.png"
                alt="check"
                className="w-1/2 h-1/2"
              />
            </button>
          </div>
          {emailCheck && (
            <div className="w-5/6 h-5percent flex justify-center pt-2">
              <p className="text-lg text-red-400">이메일 형식으로 입력하세요</p>
            </div>
          )}
          <div className="w-5/6 h-10percent flex flex-col mt-7">
            <input
              required
              type="password"
              className="w-full h-full border-black-200 rounded-l-xl text-2xl bg-white pl-4"
              placeholder="&#128274; 비밀번호"
              autoComplete="off"
              value={registData.pwd}
              onChange={handleChangePassword}
            />
          </div>
          {passwordCheck && (
            <div className="w-5/6 h-5percent flex">
              <p className="text-lg text-red-400 flex justify-center pt-2">
                {" "}
                8 ~ 10자 영문, 숫자 조합으로 입력하세요
              </p>
            </div>
          )}
          <div className="w-5/6 h-10percent mt-7 mb-7 flex">
            <input
              type="text"
              className="w-full h-full border-black-200 rounded-l-xl text-2xl bg-white pl-4"
              placeholder="&#128587; 이름"
              autoComplete="off"
              value={registData.userName}
              onChange={(e) =>
                setRegistData({ ...registData, userName: e.target.value })
              }
            />
          </div>
          <div className="w-5/6 h-10percent mb-12 flex">
            <input
              type="text"
              className="w-full h-full border-black-200 rounded-l-xl text-2xl bg-white pl-4 "
              placeholder="&#128055; 닉네임"
              autoComplete="off"
              value={registData.nickname}
              onChange={(e) =>
                setRegistData({ ...registData, nickname: e.target.value })
              }
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
            <button
              className="w-3/4 h-1/2 text-4xl font-semibold rounded-lg bg-violet-400 text-white"
              onClick={registHandleSubmit}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
