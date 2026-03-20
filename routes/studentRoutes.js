import express from "express";

// This app is an object
const app = express();
const router = express.Router();

// '/' is a route that sends response "Without request & response" when user visits '/' route.
router.get("/", function (req, res) {
  res.status(200).send("All data of students");
});

router.post("/", function (req, res) {
  res.send("New record of students");
});

router.get("/:id", function (req, res) {
  let studentId = req.params.id;
  res.send("New record of a student");
});

router.put("/:id", function (req, res) {
  let studentId = req.params.id;
  res.send("This is the put method of a student: " + studentId);
});

router.delete("/:id", function (req, res) {
  let studentId = req.params.id;
  res.send("This is the delete method of a student: " + studentId);
});

export default router;