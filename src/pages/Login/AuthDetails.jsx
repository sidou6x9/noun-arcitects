import { useEffect, useState } from "react";
import { auth } from "../../config/Config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "./Login";
import DashBoard from "./DashBoard";

function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <DashBoard />
          <button onClick={userSignOut}>SignOut</button>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default AuthDetails;
