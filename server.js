import express from "express";
import studentRoutes from "./routes/studentRoutes.js";

// This app is an object
const app = express();

app.use(express.json());

// '/' is a route that sends response "Without request & response" when user visits '/' route.
app.use("/student", studentRoutes);

// '/users' is a route that sends response "Without request & response" when user visits '/users' route.
app.use("/student", studentRoutes);

app.use("/student/:id", studentRoutes);

app.use("/student/:id", studentRoutes);

app.use("/student/:id", studentRoutes);

// It acts as a listener which listens port 5002 nd contains a callback function that prints Started when server gets started/live.
app.listen(5002, function (){
    console.log("Started");
})