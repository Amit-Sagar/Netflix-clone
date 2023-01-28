import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import moment from "moment";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const signUp = async (email, password, username) => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (result) => {
        const user = result?.user;
        const displayName = username || user?.email.split("@")[0];
        let creationTime = Number(
          moment(user.metadata.creationTime).format("x")
        );
        const infos = {
          displayName: displayName,
          email: user?.email,
          uid: user?.uid,
          createdAt: creationTime,
          savedShows: [],
        };
        await setDoc(doc(db, "users", user?.uid), infos);
      }
    );
  };
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(AuthContext);
};
