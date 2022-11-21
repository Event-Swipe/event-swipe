/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-empty */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import "./Subscribe.css";
import { Button } from "primereact/button";

function Subscribe() {
  const [subscribeEmail, setSubscribeEmail] = useState(null);
  const [isClicked, setIsClicked] = useState(null);
  const [validationLine, setValidationLine] = useState(null);

  function isEmailValid(input) {
    return input === null
      ? setValidationLine(true)
      : input.length < 10
      ? setValidationLine(true)
      : !input.includes("@")
      ? setValidationLine(true)
      : !input.includes(".")
      ? setValidationLine(true)
      : true;
  }

  function onChangeHandler(input) {
    setSubscribeEmail(input);
    isEmailValid(input);
    if (isEmailValid(input)) {
      setValidationLine(false);
    }
  }

  function subscribeHandler() {
    if (isEmailValid(subscribeEmail)) {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(null);
      }, 3000);
    } else {
    }
  }

  return (
    <div className=" subscribe-container d-flex flex-column  justify-content-center align-items-center p-4">
      <div className="title-container">
        <h4>Subscribe to our newsletter below!</h4>
      </div>
      <div className="subscribed-msg">
        {isClicked && (
          <p>We will send monthly newsletter to {subscribeEmail}</p>
        )}
      </div>
      <div className="form-background-layout d-flex flex-row align-items-center ">
        <div className="input-wrapper m-2">
          <input
            onChange={(e) => {
              onChangeHandler(e.target.value);
            }}
            type="text"
            placeholder="Your Email"
            className="form-control"
          />
          {validationLine && (
            <p className="subscribe-error-message" style={{ color: "red" }}>
              Please enter a valid email address
            </p>
          )}
        </div>
        <div className="subscribe-button">
          <Button
            onClick={subscribeHandler}
            label="Send me a newsletter!"
            className="btn btn-light subscribe-button"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
