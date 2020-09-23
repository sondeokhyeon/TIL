import React from "react";
import { authService, fireInstance } from "../mybase";
import AuthForm from "../components/AuthForm";

const Auth = () => {
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
      <AuthForm />
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
