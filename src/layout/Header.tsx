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
