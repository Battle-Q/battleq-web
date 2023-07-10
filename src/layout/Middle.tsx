import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import ProfileName from "../components/profile/ProfileName";
import ProfileImg from "../components/profile/ProfileImg";
import { useNavigate } from "react-router-dom";
import ParticipationList from "../components/game/ParticipationList";
import { ChatInputBox } from "../components/game/GameChat";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination, Navigation]);

export function MiddleProfile() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-80percent flex justify-center items-center bg-watingRoom">
      <div className="w-60percent h-95percent bg-white mr-20 rounded-2xl bg-opacity-40 flex justify-center items-center flex-col">
        <div className="w-full h-15percent flex justify-around items-center border-b-2 border-white">
          <button className="w-30percent h-50percent bg-white rounded-l-full rounded-r-full text-xl font-bold">
            내 정보
          </button>
          <button
            className="w-30percent h-50percent bg-white rounded-l-full rounded-r-full text-xl font-bold bg-opacity-60"
            onClick={() => navigate("/quizList")}
          >
            퀴즈 보기
          </button>
        </div>
        <div className="w-full h-70percent flex justify-center items-center border-b-2 border-white">
          <ProfileImg />
          <ProfileName />
        </div>
        <div className="w-full h-15percent flex justify-center items-center">
          <div className="w-40 h-50percent bg-white flex justify-center items-center">
            <button className="w-full h-full text-2xl font-bold mt-1">
              <span className="text-3xl text-green-600 mr-5 mb-1">&#9654;</span>
              확인
            </button>
          </div>
        </div>
      </div>
      <div className="w-30percent h-95percent bg-white rounded-2xl bg-opacity-40 flex flex-col ">
        <>
          <div className="w-full h-15percent text-3xl items-center flex justify-center font-bold border-b-2"></div>
          <div className="w-full h-70percent flex items-center justify-center rounded-2xl border-b-2"></div>
        </>
        <div className="w-full h-15percent flex justify-center">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export function MiddleQuizList() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-80percent flex justify-center items-center bg-watingRoom">
      <div className="w-60percent h-95percent bg-white mr-20 rounded-2xl bg-opacity-40 flex justify-center items-center flex-col">
        <div className="w-full h-15percent flex justify-around items-center border-b-2 border-white">
          <button
            className="w-30percent h-50percent bg-white rounded-l-full rounded-r-full text-xl font-bold bg-opacity-60"
            onClick={() => navigate("/profile")}
          >
            내 정보
          </button>
          <button className="w-30percent h-50percent bg-white rounded-l-full rounded-r-full text-xl font-bold">
            퀴즈 보기
          </button>
        </div>
        <div className="w-full h-70percent flex justify-center items-center border-b-2 border-white">
          <Swiper
            className=" w-full h-full"
            spaceBetween={20}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            slideToClickedSlide={true}
            loop
            navigation
          >
            <SwiperSlide className="bg-blue-200">1</SwiperSlide>
            <SwiperSlide className="bg-blue-300">2</SwiperSlide>
            <SwiperSlide className="bg-blue-400">3</SwiperSlide>
            <SwiperSlide className="bg-blue-500">4</SwiperSlide>
            <SwiperSlide className="bg-blue-600">5</SwiperSlide>
          </Swiper>
        </div>

        <div className="w-full h-15percent flex justify-center items-center">
          <div className="w-40 h-50percent bg-white flex justify-center items-center">
            <button className="w-full h-full text-2xl font-bold mt-1">
              <span className="text-3xl text-green-600 mr-5 mb-1">&#9654;</span>
              확인
            </button>
          </div>
          <button
            className="w-20 h-20 rounded-full absolute left-4 bottom-16 border-2"
            onClick={() => navigate("/quizSummaryCreate")}
          >
            <span className="text-white text-sm bottom-24 font-bold">
              문제 만들기
            </span>
          </button>
        </div>
      </div>
      <div className="w-30percent h-95percent bg-white rounded-2xl bg-opacity-40 flex flex-col ">
        <>
          <div className="w-full h-15percent text-3xl items-center flex justify-center font-bold border-b-2"></div>
          <div className="w-full h-70percent flex items-center justify-center rounded-2xl border-b-2"></div>
        </>
        <div className="w-full h-15percent flex justify-center">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export function MiddleQuizSummaryCreate() {
  return (
    <div className="w-full h-80percent flex justify-center items-center bg-watingRoom">
      <div className="w-60percent h-95percent bg-white mr-20 rounded-2xl bg-opacity-40 flex justify-center items-center flex-col">
        <div className="w-full h-85percent  flex justify-center items-center border-b-2 border-white flex-col">
          <div className="w-3/4 h-20percent flex justify-around items-end">
            <span className="w-15percent h-1/2 text-3xl flex text-center justify-center items-center text-white">
              제목
            </span>
            <input
              required
              id="name"
              name="name"
              autoComplete="off"
              autoFocus
              className="w-3/4 h-1/2 text-2xl rounded-lg pl-5"
            />
          </div>
          <div className="w-3/4 h-60percent flex justify-around items-center">
            <span className="w-15percent h-1/2 text-3xl flex text-center justify-center items-center text-white">
              설명
            </span>
            <input
              required
              name="introduction"
              id="introduction"
              autoComplete="off"
              className="w-3/4 h-1/2 text-2xl rounded-lg pl-5"
            />
          </div>
          <div className="w-3/4 h-20percent flex justify-around items-start">
            <span className="w-15percent h-1/2 text-3xl flex text-center justify-center items-center text-white">
              카테고리
            </span>
            <select
              name="category"
              className="w-3/4 h-1/2 text-2xl rounded-lg pl-5 cursor-pointer"
            >
              <option value="">선택</option>
              <option value="IT">IT</option>
              <option value="GAME">GAME</option>
              <option value="FUN">FUN</option>
            </select>
          </div>
        </div>

        <div className="w-full h-15percent flex justify-center items-center">
          <div className="w-40 h-50percent bg-white flex justify-center items-center">
            <button className="w-full h-full text-2xl font-bold mt-1">
              <span className="text-3xl text-green-600 mr-5 mb-1">&#9654;</span>
              확인
            </button>
          </div>
        </div>
      </div>
      <div className="w-30percent h-95percent bg-white rounded-2xl bg-opacity-40 flex flex-col ">
        <div className="w-full h-15percent text-3xl items-center flex justify-center font-bold">
          <span>퀴즈 카테고리 이름</span>
        </div>
        <div className="w-full h-60percent flex items-center justify-center">
          <img
            src="images/categoryDefault.jpg"
            className="w-85percent h-85percent rounded-3xl"
          />
        </div>

        <div className="w-full h-25percent flex flex-col justify-center">
          <p>카테고리에 관련된 문제를 제작합니다.</p>

          <p>
            카테고리와 관련된 다양한 형식의 문제를 풀어보고 지식을 습득하는
            시간을 가져봅시다 .
          </p>
        </div>
      </div>
    </div>
  );
}

export function MiddleQuizContent() {
  return (
    <div className="w-full h-80percent flex justify-center items-center bg-watingRoom">
      <div className="w-20percent h-95percent bg-white mr-10 rounded-2xl bg-opacity-40 flex justify-center items-center flex-col"></div>
      <div className="w-50percent h-95percent bg-white mr-10 rounded-2xl bg-opacity-40 flex justify-around items-center flex-col">
        <div className="w-full h-20percent  flex justify-center items-center">
          <input
            placeholder="문제 제목을 입력해주세요."
            autoComplete="off"
            name="title"
            className="w-3/4 h-1/2 rounded-2xl text-xl text-center"
          />
        </div>
        <div className="w-full h-60percent grid grid-cols-2 gap-3 place-items-center">
          <input
            name="content"
            placeholder="1번 문항"
            className="w-3/4 h-2/3 rounded-full text-xl text-center border-2"
          />
          <input
            name="content"
            placeholder="2번 문항"
            className="w-3/4 h-2/3 rounded-full text-xl text-center border-2"
          />
          <input
            name="content"
            placeholder="3번 문항"
            className="w-3/4 h-2/3 rounded-full text-xl text-center border-2"
          />
          <input
            name="content"
            placeholder="4번 문항"
            className="w-3/4 h-2/3 rounded-full text-xl text-center border-2"
          />
        </div>
        <div className="w-full h-20percent flex items-center justify-center">
          <input
            name="answer"
            placeholder="정답을 입력해주세요."
            className="w-3/4 h-1/2 rounded-2xl text-xl text-center"
          />
        </div>
      </div>
      <div className="w-20percent h-95percent bg-white rounded-2xl bg-opacity-40 flex flex-col items-center">
        <div className="w-full h-80percent rounded-2xl flex flex-col items-center justify-around">
          <select className="w-2/3 h-1/5 text-center text-xl cursor-pointer rounded-full border-2 border-opacity-70 bg-white bg-opacity-0 text-white">
            <option className="text-black" value="VOTE">
              4지선다
            </option>
            <option className="text-black" value="CHOSUNG">
              초성
            </option>
            <option className="text-black" value="OX">
              OX
            </option>
            <option className="text-black" value="SHORTANSWER">
              주관식
            </option>
          </select>{" "}
          <select className="w-2/3 h-1/5 text-center text-xl cursor-pointer rounded-full border-2 border-opacity-70 bg-white bg-opacity-0 text-white">
            <option className="text-black" value="5">
              5s
            </option>
            <option className="text-black" value="10">
              10s
            </option>
            <option className="text-black" value="15">
              15s
            </option>
          </select>{" "}
          <select className="w-2/3 h-1/5 text-center text-xl cursor-pointer rounded-full border-2 border-opacity-70 bg-white bg-opacity-0 text-white">
            <option className="text-black" value="SINGLE">
              SINGLE
            </option>
            <option className="text-black" value="DOUBLE">
              DOUBLE
            </option>
          </select>{" "}
          <input
            name="image"
            placeholder="이미지 주소를 넣어주세요"
            className="w-2/3 h-1/5 text-center text-sm rounded-full border-2 border-opacity-70 bg-white bg-opacity-0 text-white placeholder-white"
          />
        </div>
        <div className="w-full h-20percent rounded-2xl flex items-center justify-around">
          <button className="w-1/3 h-1/2 text-center text-xl rounded-full border-2 text-white">
            제작
          </button>
          <button className="w-1/3 h-1/2 text-center text-xl rounded-full border-2 text-white">
            등록
          </button>
        </div>
      </div>
    </div>
  );
}

export function MiddleBoardLeft() {
  return (
    <div className="w-15percent h-95percent bg-white mr-20 rounded-2xl bg-opacity-40 flex justify-center items-center flex-col">
      <div className="w-full h-15percent flex justify-around items-center border-b-2 border-white">
        <p className="text-3xl text-white">Menu</p>
      </div>

      <div className="w-full h-70percent flex flex-col justify-center items-center border-b-2 border-white"></div>
      <div className="w-full h-15percent flex justify-center items-center"></div>
    </div>
  );
}

export function MiddleBoardFree() {
  return (
    <div className="w-full h-80percent flex justify-center items-center bg-watingRoom">
      <MiddleBoardLeft />
      <div className="w-75percent h-95percent bg-white rounded-2xl bg-opacity-40 flex flex-col ">
        <div className="w-full h-15percent text-3xl items-center flex justify-center font-bold border-b-2">
          <p className="text-3xl text-white">자유게시판</p>
        </div>
        <div className="w-full h-70percent flex items-center justify-center rounded-2xl border-b-2"></div>
        <div className="w-full h-15percent flex justify-center">
          <p></p>
        </div>
      </div>
    </div>
  );
}
export function MiddleBoardNotice() {
  return (
    <div className="w-full h-80percent flex justify-center items-center bg-watingRoom">
      <MiddleBoardLeft />
      <div className="w-75percent h-95percent bg-white rounded-2xl bg-opacity-40 flex flex-col ">
        <div className="w-full h-15percent text-3xl items-center flex justify-center font-bold border-b-2">
          <p className="text-3xl text-white">공지사항</p>
        </div>
        <div className="w-full h-70percent flex items-center justify-center rounded-2xl border-b-2"></div>
        <div className="w-full h-15percent flex justify-center">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export function MiddleGameLobby() {
  return (
    <div className="w-full h-80percent flex justify-center items-center bg-watingRoom">
      <div className="w-30percent h-95percent bg-white mr-20 rounded-2xl bg-opacity-60 flex flex-col">
        <ParticipationList />
      </div>

      <div className="w-60percent h-95percent bg-white rounded-2xl bg-opacity-40 flex flex-col ">
        <div className="w-full h-90percent bg-white overflow-scroll overflow-x-hidden overflow-y-auto bg-opacity-40 rounded-t-2xl"></div>
        <ChatInputBox />
      </div>
    </div>
  );
}

export function MiddleGameInfomation() {
  return (
    <div className="w-full h-80percent flex  justify-center items-center bg-watingRoom ">
      <div className="w-30percent h-95percent bg-white mr-20 rounded-2xl bg-opacity-60 flex flex-col">
        <ParticipationList />
      </div>

      <div className="w-60percent h-95percent bg-white rounded-2xl bg-opacity-60 flex flex-col ">
        <div className="w-full h-15percent flex justify-around items-center ">
          <button className="w-30percent h-50percent bg-white rounded-l-full rounded-r-full text-xl font-bold">
            게임 정보
          </button>
        </div>
        <div className="w-full h-60percent flex justify-around items-center border-b-2 border-white ">
          <img
            src="images/categoryDefault.jpg"
            alt="game introduction"
            className="w-3/5 h-3/4"
          />
        </div>
        <div className="w-full h-30percent flex justify-around items-center"></div>
      </div>
    </div>
  );
}
