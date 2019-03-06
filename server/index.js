require("dotenv").config();

const { CONNECTION_STRING } = process.env;
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const massive = require("massive");
const { json } = require("body-parser");
const { addUser, getUser } = require('./controller')

app.use(json());
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("connected");
  })
  .catch(err => console.log(err));

app.post('/api/signup', addUser);
app.post("/api/signin", getUser);

app.listen(port, () => console.log(`Server is listening on port ${port}`));