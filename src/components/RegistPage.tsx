import React, { useEffect, useState } from "react";
import { RegistType } from "../type/type";
import { apiUrl } from "../service/authService";
import axios from "axios";
export default function RegistPage() {
  const [registData, setRegistData] = useState<RegistType>({
    email: "",
    name: "",
    password: "",
    nickname: "",
  });

  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const data: RegistType = {
    email: registData.email,
    name: registData.name,
    password: registData.password,
    nickname: registData.nickname,
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

  const isRegistrationEmpty = () => {
    return (
      registData.email.length === 0 ||
      registData.name.length === 0 ||
      registData.password.length === 0 ||
      registData.nickname.length === 0
    );
  };

  const registHandleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (isRegistrationEmpty()) {
      return alert("입력한 정보를 확인해주세요.");
    }

    return await axios
      .post(`${apiUrl}/users`, data)
      .then((res) => {
        alert("회원가입을 성공하였습니다.");
      })

      .catch((error) => {
        alert("회원가입을 실패하였습니다.");
      });
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+([-_.]?[0-9a-zA-Z.!#$%&])+?@[0-9a-zA-Z]([0-9a-zA-Z])+?\.[a-zA-Z]{2,3}$/;
    setRegistData({ ...registData, email: e.target.value });
    setEmailCheck(!regex.test(e.target.value));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/;
    setRegistData({ ...registData, password: e.target.value });
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
              value={registData.password}
              onChange={handleChangePassword}
            />
          </div>
          {passwordCheck && (
            <div className="w-5/6 h-5percent flex">
              <p className="text-lg text-red-400 flex justify-center pt-2">
                {" "}
                영문, 숫자, 특수문자 조합으로 8~12자 입력하세요
              </p>
            </div>
          )}
          <div className="w-5/6 h-10percent mt-7 mb-7 flex">
            <input
              type="text"
              className="w-full h-full border-black-200 rounded-l-xl text-2xl bg-white pl-4"
              placeholder="&#128587; 이름"
              autoComplete="off"
              value={registData.name}
              onChange={(e) =>
                setRegistData({ ...registData, name: e.target.value })
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
              disabled={disabled}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
