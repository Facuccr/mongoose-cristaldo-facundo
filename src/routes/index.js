import { Router } from "express";
import { teacherRoutes } from "./teacher.routes.js";
import { courseRoutes } from "./course.routes.js";
import { studentRoutes } from "./student.routes.js";

export const routes = Router();

routes.use(teacherRoutes);
routes.use(courseRoutes);
routes.use(studentRoutes);
