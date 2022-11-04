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
    <>
      <div className="title-container">
        <h1>Subscribe Below</h1>
      </div>
      <div className="subscribed-msg">
        {isClicked && (
          <p>We will send monthly newsletter to {subscribeEmail}</p>
        )}
      </div>
      <div className="form-backfround-layout">
        <div className="input-big-wrapper">
          <div className="input-wrapper">
            <input
              onChange={(e) => {
                onChangeHandler(e.target.value);
              }}
              type="text"
              placeholder="Your Email"
            />
            {validationLine && (
              <p style={{ color: "white" }}>
                please enter a valid email address
              </p>
            )}
          </div>
        </div>
        <div className="button-wrapper">
          <Button
            onClick={subscribeHandler}
            className="p-button-rounded p-button-secondary"
            label="Send me a newsletter!"
          />
        </div>
      </div>
      <div />
    </>
  );
}

export default Subscribe;
