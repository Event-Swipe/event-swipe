/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect, useContext } from "react";
import Sidemenu from "../../Sidemenu/Sidemenu";
import "./Favourites.css";
import UserContext from "../../../contexts/UserContext";
import EventCard from "../../EventCard/EventCard";

function Favourites() {
  const { userDetails, favEvents, FetchFavEvents } = useContext(UserContext);

  {
    userDetails !== null &&
      useEffect(() => {
        FetchFavEvents(userDetails.id);
      }, []);
  }

  return (
    <div className="page-wrapper-dashboard">
      <Sidemenu />
      <div className="fav-cards-con">
        {favEvents !== null &&
          favEvents.map((event) => {
            return <EventCard dayEvents={event.event} isRemovable removeX />;
          })}
      </div>
    </div>
  );
}

export default Favourites;
