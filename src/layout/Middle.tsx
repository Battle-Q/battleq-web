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
          <button className="w-20 h-20 rounded-full absolute left-4 bottom-16 border-2">
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
