import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import RegistPage from "../components/RegistPage";
import ProfilePage from "../components/ProfilePage";
import Free from "../components/board/Free";
import Notice from "../components/board/Notice";
import QuizListPage from "../components/QuizListPage";
import MainPage from "../components/MainPage";
import QuizSummaryCreate from "../components/quiz/QuizSummaryCreate";
import QuizContentCreate from "../components/quiz/QuizContentCreate";
import GameLobbyPage from "../components/game/GameLobbyPage";
import GameInfomation from "../components/game/GameInfomation";
import { TextEditor } from "../components/board/TextEditor";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/regist" element={<RegistPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/quizList" element={<QuizListPage />} />
      <Route path="/quizSummaryCreate" element={<QuizSummaryCreate />} />
      <Route path="/quizContentCreate" element={<QuizContentCreate />} />
      <Route path="/board/free" element={<Free />} />
      <Route path="/board/notice" element={<Notice />} />
      <Route path="/board/textEditor" element={<TextEditor />} />
      <Route path="/gameLobby" element={<GameLobbyPage />} />
      <Route path="/gameInfomation" element={<GameInfomation />} />
    </Routes>
  );
}
