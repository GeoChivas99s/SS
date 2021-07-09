import { useEffect } from "react";
import { useState, createContext } from "react";
import { isLogged as loggedOnFirebase } from "../api";

const userContext = createContext({});

export const UserProvider = ({ children }) => {
  const { Provider } = userContext;

  const [userData, setUserData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(loggedOnFirebase());
  }, []);

  const INITIAL_USER_VALUE = {
    isLogged,
    setIsLogged,
    setUserData,
    data: userData,
  };

  return <Provider value={INITIAL_USER_VALUE}>{children}</Provider>;
};

export default userContext;
