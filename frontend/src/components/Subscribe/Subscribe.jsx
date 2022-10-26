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
    }
  }

  return (
    <>
      <div className="title-container">
        <h1>Subscribe Below</h1>
      </div>
      <div className="subscribed-msg">
        {isClicked && (
          <p>We will send monthly newslatter to {subscribeEmail}</p>
        )}
      </div>
      <div className="form-backfround-layout">
        <div className="input-wrapper">
          <input
            onChange={(e) => {
              onChangeHandler(e.target.value);
            }}
            type="text"
            placeholder="Your Email"
          />
          {validationLine && (
            <p style={{ color: "red" }}>please enter a valid email address</p>
          )}
        </div>
        <div className="button-wrapper">
          <Button
            onClick={subscribeHandler}
            icon="pi pi-bookmark"
            className="p-button-rounded p-button-secondary"
            aria-label="Bookmark"
            label="Send me a newslatter!"
          />
        </div>
      </div>
      <div />
    </>
  );
}

export default Subscribe;
