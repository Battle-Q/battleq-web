import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../components/LoginPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
