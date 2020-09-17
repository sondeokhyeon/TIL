import React, { useState } from "react";
import { authService, fireInstance } from "../myBase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setpassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let data = null;
    try {
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    try {
      if (name === "google") {
        provider = new fireInstance.auth.GoogleAuthProvider();
      } else if (name === "github") {
        provider = new fireInstance.auth.GithubAuthProvider();
      }
      const data = await authService.signInWithPopup(provider);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          email={email}
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          password={password}
          onChange={onChange}
          required
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
      <div>
        <button name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
