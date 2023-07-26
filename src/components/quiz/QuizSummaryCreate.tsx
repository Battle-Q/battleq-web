import React from "react";
import { HeaderQuizCreate } from "../../layout/Header";
import { MiddleQuizSummaryCreate } from "../../layout/Middle";
import { Footer } from "../../layout/Footer";

export default function QuizSummaryCreate() {
  return (
    <div className="w-full h-full flex flex-col bg-layoutColor">
      <HeaderQuizCreate />
      <MiddleQuizSummaryCreate />
      <Footer />
    </div>
  );
}
