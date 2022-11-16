/* eslint-disable no-restricted-syntax */
require("dotenv").config();

const app = require("./src/app");

const port = parseInt("5000", 10);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
