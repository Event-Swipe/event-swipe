/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import jwt_decode from "jwt-decode";

const UserContext = createContext();
export default UserContext;
export function UserContextProvider({ children }) {
  // creating the states for the variables
  const [userDetails, setUserDetails] = useState(
    localStorage.getItem("key") === null
      ? null
      : jwt_decode(localStorage.getItem("key"))
  );
  const [userNotFound, setUserNotFound] = useState(false);
  const LoginFunction = async (email, password) => {
    await fetch(`http://localhost:5000/login/${email}/${password}`)
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data);
        localStorage.setItem("key", data.token);
      })
      .catch((error) => {
        setUserNotFound(true);
        console.error("Error:", error);
      });
  };
  // const cachedUserDetails = useMemo(
  //   () => LoginFunction(email, password),
  //   [userDetails]
  // );

  return (
    <UserContext.Provider
      value={{
        LoginFunction,
        userDetails,
        setUserDetails,
        userNotFound,
        setUserNotFound,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
