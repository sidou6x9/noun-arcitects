import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/Config";

import "./Login.css";
import AuthDetails from "./AuthDetails";
import SignUp from "./SignUp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <div>
        <form className="login-form-parent" onSubmit={Login}>
          <h1>Connecter Vous</h1>
          <label>label1</label>
          <input
            type="email"
            placeholder="Email d'authentification"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>label2</label>
          <input
            type="password"
            placeholder="Mot de passe d'authentification"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
