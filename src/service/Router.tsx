import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import RegistPage from "../components/RegistPage";
import ProfilePage from "../components/ProfilePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/regist" element={<RegistPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
