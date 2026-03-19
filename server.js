import express from "express";

// This app is an object
const app = express();

app.use(express.json());

// '/' is a route that sends response "Without request & response" when user visits '/' route.
app.get("/student", function (req, res) {
  res.status(200).send("All data of students");
});

// '/users' is a route that sends response "Without request & response" when user visits '/users' route.
app.post("/student", function (req, res) {
  res.send("New record of students");
});

app.get("/student/:id", function (req, res) {
  let studentId = req.params.id;
  res.send("New record of a student");
});

app.put("/student/:id", function (req, res) {
  let studentId = req.params.id;
  res.send("This is the put method of a student: "+studentId);
});

app.delete("/student/:id", function (req, res) {
  let studentId = req.params.id;
  res.send("This is the delete method of a student: " + studentId);
});

// It acts as a listener which listens port 5002 nd contains a callback function that prints Started when server gets started/live.
app.listen(5002, function (){
    console.log("Started");
})