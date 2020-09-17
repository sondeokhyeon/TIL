import React, { useState, useEffect } from "react";
import Router from "./Router";
import { authService } from "../myBase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedin(true);
      } else {
        setIsLoggedin(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <Router isLoggedin={isLoggedin} /> : "Initalizing..."}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
