import React from "react";
import { HeaderQuizList } from "../layout/Header";
import { MiddleQuizList } from "../layout/Middle";
import { Footer } from "../layout/Footer";

export default function QuizListPage() {
  return (
    <div className="w-full h-full flex flex-col bg-layoutColor">
      <HeaderQuizList />
      <MiddleQuizList />
      <Footer />
    </div>
  );
}
