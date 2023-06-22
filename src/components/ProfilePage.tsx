import React from "react";
import { HeaderProfile } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { MiddleProfile } from "../layout/Middle";

export default function ProfilePage() {
  return (
    <div className="w-full h-full flex flex-col bg-layoutColor">
      <HeaderProfile />
      <MiddleProfile />
      <Footer />
    </div>
  );
}
