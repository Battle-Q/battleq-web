import React from "react";
import { HeaderGameLobby } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { MiddleGameLobby } from "../../layout/Middle";

export default function GameLobbyPage() {
  return (
    <div className="w-full h-full flex flex-col bg-layoutColor">
      <HeaderGameLobby />
      <MiddleGameLobby />
      <Footer />
    </div>
  );
}
