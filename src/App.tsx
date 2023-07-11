import React, { useEffect } from "react";
import "./App.css";
import Router from "./service/Router";
import axios from "axios";
import { email, headers } from "./service/authService";

function App() {
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
