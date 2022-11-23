/* eslint-disable no-alert */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import axios from "axios";

const UserContext = createContext();
export default UserContext;
export function UserContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState(null);
  const [favEvents, setFavEvents] = useState(null);
  const [sharedEvents, setSharedEvents] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);

  const LoginFunction = async (email, password) => {
    await fetch(`http://localhost:5000/login/${email}/${password}`)
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data);
      })
      .catch((error) => {
        setUserNotFound(true);
        console.error("Error:", error);
      });
  };
  const FetchFavEvents = async (id) => {
    fetch(`http://localhost:5000/favourites/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const arr = [];
        data.map((event) => {
          const parsedEvent = JSON.parse(event.oneevent);
          const parsedObj = {
            id: event.id,
            event: parsedEvent,
          };
          arr.push(parsedObj);
        });

        setFavEvents(arr);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const FetchSharedEvents = (email) => {
    fetch(`http://localhost:5000/share/${email}`)
      .then((response) => response.json())
      .then((data) => {
        const arr = [];
        data.map((event) => {
          const parsedEvent = JSON.parse(event.event);
          const parsedObj = {
            event: parsedEvent,
            sentFrom: event.senderEmail,
          };
          arr.push(parsedObj);
        });

        setSharedEvents(arr);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const PostSharedEvent = (object) => {
    axios
      .post(`http://localhost:5000/share`, object)
      .then((res) => {
        alert("Sent!");
      })
      .catch(() => {
        // errorLogin()
      });
  };
  const PostFavEvent = (object) => {
    axios
      .post(`http://localhost:5000/favourites`, object)
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        // errorLogin()
      });
  };
  const DeleteFavEvent = async (id) => {
    const response = confirm("Remove this event from favourties?");
    response;

    {
      response &&
        (await axios
          .delete(`http://localhost:5000/favourites/${id}`)
          .then(() => {})
          .catch(() => {
            // errorLogin()
          }));
      FetchFavEvents(userDetails.id);
    }
  };

  return (
    <UserContext.Provider
      value={{
        LoginFunction,
        userDetails,
        setUserDetails,
        userNotFound,
        setUserNotFound,
        FetchSharedEvents,
        FetchFavEvents,
        PostSharedEvent,
        PostFavEvent,
        DeleteFavEvent,
        favEvents,
        sharedEvents,
        setSharedEvents,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
