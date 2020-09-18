import React, { useState, useEffect } from "react";
import Router from "./router";
import { authService } from "../mybase";

function App() {
  const [init, setinit] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [useObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedin(true);
        setUserObj(user);
      } else {
        setIsLoggedin(false);
      }
      setinit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <Router isLoggedin={isLoggedin} useObj={useObj} />
      ) : (
        "Initalizing..."
      )}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
