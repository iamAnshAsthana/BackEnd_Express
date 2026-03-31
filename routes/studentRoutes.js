import express from "express";
import { createStudents, deleteStudent, getStudent, getStudents, updateStudent} from "../controller/studentController.js";

const app = express();
const router = express.Router();

router.get("/", getStudents);

router.post("/", createStudents);

router.get("/:id", getStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;