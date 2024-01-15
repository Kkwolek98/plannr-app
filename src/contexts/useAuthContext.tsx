import { ReactNode, createContext, useContext, useState } from "react";
import { User } from "../types/user";

const AuthContext = createContext<
  | {
      user: User | null;
      setUser: (user: User | null) => void;
      setToken: (token: string) => void;
      getToken: () => string | null;
      clearToken: () => void;
    }
  | undefined
>({
  user: null,
  setUser: () => {},
  setToken: () => {},
  getToken: () => null,
  clearToken: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const setToken = (token: string) => {
    console.log(token);
    localStorage.setItem("token", `Bearer ${token}`);
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const clearToken = () => {
    localStorage.removeItem("token");
  };

  const context = { user, setUser, setToken, getToken, clearToken };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
};
