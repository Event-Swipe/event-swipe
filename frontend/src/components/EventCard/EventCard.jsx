/* eslint-disable react/prop-types */
<<<<<<< HEAD
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
=======
import React from "react";
// import { Card } from "primereact/card";
>>>>>>> 81afea574adb66b88f4d116e2d47ea75365c6791
import "./EventCard.css";

function EventCard({ event }) {
  // let currentDate = new Date();
  // console.log(currentDate.getHours());

  // filter events that have already passed
  // if event date < current date -> display else hide

  //   const title = event.short_title;
  //   const subTitle = event.venue.display_location;
  //   const header = <img src={event.performers[0].image} alt="" />;
  //   const footer = (
  //     <p>
  //       {new Date(event.datetime_utc).getHours()}H
  //       {new Date(event.datetime_utc).getMinutes()}M
  //     </p>
  // );
  return (
<<<<<<< HEAD
    <div key={dayEvents.id}>
      <NavLink to={`/events/${dayEvents.id}`}>
        <div className="eventCardContainer">
          <img
            src={
              imgUrl ||
              "https://files.slack.com/files-pri/T6SG2QGG2-F047D8LH95Y/company-logo-nobg.png"
            }
            alt=""
          />
          <h4>{title}</h4>
          <h6>{subTitle.toUpperCase()}</h6>
          <p>
            {eventHour}:{eventMinutes}
          </p>
        </div>
      </NavLink>
=======
    <div key={event.id}>
      {/* <Card
        style={{ width: "25em" }}
        title={title}
        subTitle={subTitle}
        header={header}
        footer={footer}
      ></Card> */}
      {/* <h1>EventCard</h1> */}
      <div className="cardContainer">
        <img src={event.performers[0].image} alt="" />
        <h4>{event.short_title}</h4>
        <h6>{event.venue.display_location.toUpperCase()}</h6>
        <p>
          {new Date(event.datetime_utc).getHours()}:
          {new Date(event.datetime_utc).getMinutes() === 0
            ? "00"
            : new Date(event.datetime_utc).getMinutes()}
        </p>
      </div>
      {/* <p>
        {new Date(event.datetime_utc).getHours() > currentDate.getHours() &&
          console.log(new Date(event.datetime_utc).getHours())}
      </p> */}
      {/* this used to map inside each performer but we decided that for the cards only one image and tittle
      would suffice. Let's leave this part for the details
      {event.performers.map((performer) => {
        return (
          <div key={performer.id}>
            <img src={performer.image} alt=""></img>
            <h3>Performer Name: {performer.name}</h3>
          </div>
        );
      })} */}
>>>>>>> 81afea574adb66b88f4d116e2d47ea75365c6791
    </div>
  );
}

export default EventCard;
