import { Router } from "express";
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller.js";

export const studentRoutes = Router();

studentRoutes.post("/students", createStudent);
studentRoutes.get("/students", getAllStudents);
studentRoutes.get("/students/:id", getStudentById);
studentRoutes.put("/students/:id", updateStudent);
studentRoutes.delete("/students/:id", deleteStudent);
