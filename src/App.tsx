import React, { useEffect } from "react";
import "./App.css";
import Router from "./service/Router";
import { fetchData } from "./redux/reducer/userDataSlice";
import { useAppDispatch } from "./redux/hooks/hooks";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="w-screen h-screen">
      <Router />
    </div>
  );
}

export default App;
