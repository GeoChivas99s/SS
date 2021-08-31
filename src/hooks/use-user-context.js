import { useContext } from "react";
import userContext from "../context/user";

const useUserContext = () => useContext(userContext);

export default useUserContext;
