import React from "react";
import { Header } from "../../layout/Header";
import { MiddleGameInfomation } from "../../layout/Middle";
import { Footer } from "../../layout/Footer";

export default function GameInfomation() {
  return (
    <div className="w-full h-full flex flex-col bg-layoutColor">
      <Header />
      <MiddleGameInfomation />
      <Footer />
    </div>
  );
}
