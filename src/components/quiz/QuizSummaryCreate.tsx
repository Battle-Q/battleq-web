import React from "react";
import { HeaderQuizCreate } from "../../layout/Header";
import { MiddleQuizSummaryCreate } from "../../layout/Middle";

export default function QuizSummaryCreate() {
  return (
    <div className="w-full h-full flex flex-col bg-layoutColor">
      <HeaderQuizCreate />
      <MiddleQuizSummaryCreate />
    </div>
  );
}
