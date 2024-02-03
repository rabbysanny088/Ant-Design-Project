import { message } from "antd";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../Firsbase";

const google = new GoogleAuthProvider();


const firebaseauth = getAuth(app);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseauth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  const finalGoogle = () => {
    return signInWithPopup(firebaseauth, google);
  }
  const UsersSignin = async (email, password) => {
    try {
      setError(null);
      const result = await createUserWithEmailAndPassword(
        firebaseauth,
        email,
        password
      );
      console.log("Successful login...", result);
    } catch (error) {
      if (error.code === "auth/weak-password") {
        message.error("Password should be at least 6");
      }else if(error.code === "auth/email-already-in-use") {
        message.error("email-already-in-use")
      }
      console.log(error);
    }
  };
  const logouts = async () => {
    try {
      await signOut(firebaseauth);
      console.log("Logout successful");
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  const isLoggedIn = user ? true : false;

  const singinUserWithEmailAndPass = async (email, password) => {
    try {
      setError(null);
      const result = await signInWithEmailAndPassword(
        firebaseauth,
        email,
        password
      );
      console.log("Successful login...", result);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        message.error(
          "Invalid credentials. Please check your email and password."
        );
      } else {
        console.error("Error during login:", error.message);
      }
    }
  };

  const auth = getAuth();
  const users = auth.currentUser;
  const displayusersEmail = users ? users.email : null;
  const displayusersPhotoUrl = users ? users.photoURL : null;
  return (
    <FirebaseContext.Provider
      value={{
        UsersSignin,
        singinUserWithEmailAndPass,
        isLoggedIn,
        logouts,
        error,
        displayusersEmail,
        finalGoogle,
        displayusersPhotoUrl
      }}
    >
      {" "}
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
