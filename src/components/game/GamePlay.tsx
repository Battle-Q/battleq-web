import React from "react";
import { Header } from "../../layout/Header";
import { MiddleGamePlay } from "../../layout/Middle";
import { Footer } from "../../layout/Footer";

export default function GamePlay() {
  return (
    <div className="w-full h-full flex flex-col bg-layoutColor">
      <Header />
      <MiddleGamePlay />
      <Footer />
    </div>
  );
}
