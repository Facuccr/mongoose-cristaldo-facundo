import { courseModel } from "../models/course.model.js";

export const createCourse = async (req, res) => {
  const { title, description, teacher, students } = req.body;

  try {
    const newCourse = await courseModel.create({
      title,
      description,
      teacher,
      students,
    });

    res.status(201).json({
      ok: true,
      msg: "curso creado correctamente",
      data: newCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel
      .find({ isDeleted: false })
      .populate("teacher", "name -_id")
      .populate("students");

    res.status(200).json({ ok: true, data: courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Error interno del servidor" });
  }
};

export const getCourseById = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await courseModel
      .findById(id)
      .populate("teacher", "name -_id")
      .populate("students");

    res.status(200).json({ ok: true, data: course });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Error interno del servidor" });
  }
};

export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  try {
    const updatedCourse = await courseModel.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "curso actualizado correctamente",
      data: updatedCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};

export const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCourse = await courseModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "curso eliminado correctamente",
      data: deletedCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};
