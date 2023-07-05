import React, { useEffect } from "react";
import "./App.css";
import Router from "./service/Router";
import axios from "axios";

function App() {
  const email = localStorage.getItem("email");
  const headers = {
    accessToken: `${localStorage.getItem("accessToken")}`,
    "Access-Control-Allow-Origin": "*",
  };

  useEffect(() => {
    (async () => {
      await axios
        .get(`member/detail/${email}`, {
          headers,
        })
        .then(
          (res) => {},
          (err) => {}
        );
    })();
  }, [email]);

  return (
    <div className="w-screen h-screen">
      <Router />
    </div>
  );
}

export default App;
