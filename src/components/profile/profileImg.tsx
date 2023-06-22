import React from "react";

export default function profileImg() {
  return (
    <>
      <img
        src="images/defaultProfile.png"
        className="w-80 h-80 rounded-full mr-20 border-2 border-black"
      />

      <label className="w-10 h-10 bg-white text-black rounded-full relative right-44 top-32 cursor-pointer items-center justify-center flex">
        <img src="images/refresh.png" alt="사진 선택" className="w-8 h-8" />
        <input
          style={{ display: "none" }}
          id="file-input"
          type="file"
          name="imageFile"
        />
      </label>
    </>
  );
}
