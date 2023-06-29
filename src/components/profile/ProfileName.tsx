import React from "react";
export default function ProfileName() {
  return (
    <input
      className="w-1/3 h-1/5 text-center text-3xl font-normal"
      placeholder="닉네임"
      autoComplete="off"
      name="nickname"
      required
    />
  );
}
