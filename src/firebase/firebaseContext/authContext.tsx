import React, { FC, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../firebase.ts";

const AuthContext = React.createContext();

export function useAuth() {
  useContext(AuthContext);
}

interface AuthProv {
  children: ReactNode;
}
interface UserData {
  username: string;
  password: string;
  prevState: null;
}
export const AuthProvider: FC<AuthProv> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserData>();

  const singUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    singUp,
  };

  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
};
