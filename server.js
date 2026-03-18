import express from "express";

// This app is an object
const app = express();

// '/' is a route that sends response "Without request & response" when user visits '/' route.
app.get("/", function (req, res) {
  res.send("Without request & response");
});

// '/users' is a route that sends response "Without request & response" when user visits '/users' route.
app.get("/users", function (req, res) {
  res.send("With request & response");
});

// it acts as a listener which listens port 5002 nd contains a callback function that prints Started when server gets started/live.
app.listen(5002, function (){
    console.log("Started");
})