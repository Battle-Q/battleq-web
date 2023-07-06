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
      <Route path="/gameLobby" element={<GameLobbyPage />} />
    </Routes>
  );
}
