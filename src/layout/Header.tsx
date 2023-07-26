export function Header() {
  return (
    <div className="w-full h-10percent bg-watingRoom flex justify-center items-center">
      <div className="absolute left-16 top-12">
        <button
          className="text-white text-3xl"
          onClick={() => window.location.replace("/")}
        >
          &#9664;
        </button>
      </div>
    </div>
  );
}

export function HeaderProfile() {
  return (
    <div className="w-full h-10percent bg-watingRoom flex justify-center items-center">
      <div className="absolute left-16 top-12">
        <button
          className="text-white text-3xl"
          onClick={() => window.location.replace("/")}
        >
          &#9664;
        </button>
      </div>
      <span className="text-3xl text-white mt-5">캐릭터 선택</span>
    </div>
  );
}
export function HeaderQuizList() {
  return (
    <div className="w-full h-10percent bg-watingRoom flex justify-center items-center">
      <div className="absolute left-16 top-12">
        <button
          className="text-white text-3xl"
          onClick={() => window.location.replace("/")}
        >
          &#9664;
        </button>
      </div>
      <span className="text-3xl text-white mt-5">내 퀴즈 목록</span>
    </div>
  );
}
export function HeaderQuizCreate() {
  return (
    <div className="w-full h-10percent bg-watingRoom flex justify-center items-center">
      <div className="absolute left-16 top-12">
        <button
          className="text-white text-3xl"
          onClick={() => window.location.replace("/")}
        >
          &#9664;
        </button>
      </div>
      <span className="text-3xl text-white mt-5">BQ</span>
    </div>
  );
}

export function HeaderGameLobby() {
  return (
    <div className="w-full h-10percent bg-watingRoom flex justify-between items-center">
      <div className="ml-20">
        <button className="text-white text-2xl mr-10">&#9664;</button>
      </div>
      <div className="w-20 text-center">
        <span className="text-3xl text-white">BQ</span>
      </div>
      <div className="mr-20 bg-red-300"></div>
    </div>
  );
}
