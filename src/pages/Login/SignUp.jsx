import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/Config";

import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signup-container">
      <div>
        <form className="signup-form-parent" onSubmit={SignUp}>
          <h1>Inscriver Vous</h1>
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

export default SignUp;
