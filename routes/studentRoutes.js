import express from "express";
import { createStudents, deleteStudent, getStudent, getStudents, updateStudent} from "../controller/studentController.js";

// This app is an object
const app = express();
const router = express.Router();

// '/' is a route that sends response "Without request & response" when user visits '/' route.
router.get("/", getStudents);

router.post("/", createStudents);

router.get("/:id", getStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;