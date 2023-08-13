import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { MiddleBoardNotice } from "../../layout/Middle";

export default function Notice() {
  return (
    <div className="w-full h-full flex flex-col bg-layoutColor">
      <Header />
      <MiddleBoardNotice />
      <Footer />
    </div>
  );
}
