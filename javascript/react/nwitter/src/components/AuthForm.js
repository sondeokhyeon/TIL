import React, { useState } from "react";
import { authService } from "../mybase";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <>
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
    </>
  );
};

export default AuthForm;
