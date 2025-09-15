import { Router } from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";
import { addCourseToStudent } from "../controllers/course_student.controller.js";

export const courseRoutes = Router();

courseRoutes.post("/courses", createCourse);
courseRoutes.get("/courses", getAllCourses);
courseRoutes.get("/courses/:id", getCourseById);
courseRoutes.put("/courses/:id", updateCourse);
courseRoutes.delete("/courses/:id", deleteCourse);

//ruta para agregar estudiante
courseRoutes.put("/courses/:id/add-course", addCourseToStudent);
