import { HeaderQuizCreate } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { MiddleQuizContent } from "../../layout/Middle";

export default function QuizContentCreate() {
  return (
    <div className="w-full h-full flex flex-col bg-layoutColor">
      <HeaderQuizCreate />
      <MiddleQuizContent />
      <Footer />
    </div>
  );
}
