import { Router } from "express";
import {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacher.controller.js";

export const teacherRoutes = Router();

teacherRoutes.post("/teachers", createTeacher);
teacherRoutes.get("/teachers", getAllTeachers);
teacherRoutes.get("/teachers/:id", getTeacherById);
teacherRoutes.put("/teachers/:id", updateTeacher);
teacherRoutes.delete("/teachers/:id", deleteTeacher);
