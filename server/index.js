const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("I Love My Pet BackEnd Is Here");
});
//backend connected and running on localhost:3001 run it manualy
app.listen(3001, () => {
  console.log("running on *** port 3001");
});
//running on port 3001 is visible in terminal
//to start running the server write : npm run devStart
