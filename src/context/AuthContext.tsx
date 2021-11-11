import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type State = {
  auth: {};
};
type TAuthProvider = {
  children: ReactNode;
};

const AuthContext = createContext<{ auth: State; setAuth: Function }>(null);

const AuthProvider = ({ children }: TAuthProvider) => {
  const [auth, setAuth] = useLocalStorage("user", null);
  const value = { auth, setAuth };
  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used inside a AuthContext");
  }
  return context;
}

export { useAuth, AuthProvider };
