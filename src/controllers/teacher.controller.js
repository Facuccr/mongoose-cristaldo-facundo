import { teacherModel } from "../models/teacher.model.js";
import { courseModel } from "../models/course.model.js";
export const createTeacher = async (req, res) => {
  const { name, contact } = req.body;

  try {
    const newTeacher = await teacherModel.create({ name, contact });
    res.status(201).json({
      ok: true,
      msg: "profesor creado correctamente",
      data: newTeacher,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await teacherModel.find({ isDeleted: false });
    res.status(200).json({ ok: true, data: teachers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};
export const getTeacherById = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await teacherModel
      .findById(id)
      .populate({ path: "courses", match: { isDeleted: false } });
    if (!teacher) {
      return res.status(404).json({ ok: false, msg: "teacher no encontrado" });
    }

    res.status(200).json({ ok: true, data: teacher });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};

export const updateTeacher = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedTeacher = await teacherModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).json({
      ok: true,
      msg: "profesor actualizado correctamente",
      data: updatedTeacher,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};

export const deleteTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    // eliminar cursos relacionados
    await courseModel.updateMany({ teacher: id }, { isDeleted: true });

    const deletedTeacher = await teacherModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    res.status(200).json({
      ok: true,
      msg: "profesor eliminado correctamente",
      data: deletedTeacher,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};
