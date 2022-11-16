/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

const UserContext = createContext();
export default UserContext;
export function UserContextProvider({ children }) {
  // creating the states for the variables
  const [userDetails, setUserDetails] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);

  const LoginFunction = (email, password) => {
    fetch(`http://localhost:5000/login/${email}/${password}`)
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data);
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
        // cachedUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
