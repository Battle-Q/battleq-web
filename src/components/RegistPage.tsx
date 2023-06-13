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
    if (registData.pwd.length > 0 && registData.pwd.length < 12)
      await axios
        .post(`${apiUrl}`, data)
        .then((res) => {
          console.log("회원가입 성공");
          console.log(res);
        })

        .catch((error) => {
          console.log("회원가입 실패");
          console.log(error);
        });
    else alert("비밀번호를 입력해주세요");
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
          <div className="w-5/6 h-10percent mb-12 flex">
            <input
              type="email"
              className="w-full h-full border-black-200 rounded-l-xl text-2xl bg-white pl-4"
              placeholder="&#128100; 아이디 (예:battleq@naver.com)"
              autoComplete="off"
              value={registData.email}
              onChange={(e) =>
                setRegistData({ ...registData, email: e.target.value })
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
          <div className="w-5/6 h-10percent mb-5 flex">
            <input
              required
              type="password"
              className="w-full h-full border-black-200 rounded-l-xl text-2xl bg-white pl-4"
              placeholder="&#128274; 비밀번호"
              autoComplete="off"
              value={registData.pwd}
              onChange={(e) =>
                setRegistData({ ...registData, pwd: e.target.value })
              }
            />
          </div>
          <div className="w-5/6 h-10percent mb-5 flex">
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
