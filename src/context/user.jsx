import { useEffect, useState, createContext } from "react";
import { isLogged as loggedOnFirebase } from "../api";

const userContext = createContext({});

export const UserProvider = ({ children }) => {
  const { Provider } = userContext;

  const [userData, setUserData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const tempUser = loggedOnFirebase();
    if(tempUser && !isLogged) {
      setIsLogged(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedOnFirebase()]);

  const INITIAL_USER_VALUE = {
    isLogged,
    setIsLogged,
    setUserData,
    data: userData,
  };

  return <Provider value={INITIAL_USER_VALUE}>{children}</Provider>;
};

export default userContext;
