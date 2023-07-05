import React from "react";
import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { MiddleBoardFree } from "../../layout/Middle";

export default function Free() {
  return (
    <div className="w-full h-full flex flex-col bg-layoutColor">
      <Header />
      <MiddleBoardFree />
      <Footer />
    </div>
  );
}
