import React from "react";
import { HeaderGameLobby } from "../../layout/Header";
import { Footer } from "../../layout/Footer";

export default function GameLobbyPage() {
  return (
    <div className="w-full h-full flex flex-col bg-layoutColor">
      <HeaderGameLobby />
      <Footer />
    </div>
  );
}
